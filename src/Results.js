import React from "react";
import Meanings from "./Meanings";
import Phonetics from "./Phonetics";

import "./Results.css";

export default function Results(props) {
    if (props.results) {
        return (
            <div className="Results">
                <section className="header">
                <h2>{props.results.word}</h2>
                {props.results.phonetics.map(function (phonetic, index) {
                    return (
                        <span key={index}>
                            <Phonetics phonetics={phonetic} />
                        </span>
                    )
                })}
                </section>
                <section>
                {props.results.meanings.map(function (meaning, index) {
                    return (
                        <section className="meanings" key={index}>
                                <Meanings meanings={meaning} />
                        </section>
                    )
                })}
                </section>
            </div>
        )
    } else {
        return null;
    }
}