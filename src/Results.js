import React from "react";
import Meanings from "./Meanings";
import Phonetics from "./Phonetics";

export default function Results(props) {
    if (props.results) {
        return (
            <div className="Results">
                <h2 className="mt-3">{props.results.word}</h2>
                {props.results.phonetics.map(function (phonetic, index) {
                    return (
                        <span key={index}>
                            <Phonetics phonetics={phonetic} />
                        </span>
                    )
                })}
                {props.results.meanings.map(function (meaning, index) {
                    return (
                        <div key={index}>
                            <Meanings meanings={meaning} />
                        </div>
                    )
                })}
            </div>
        )
    } else {
        return null;
    }
}