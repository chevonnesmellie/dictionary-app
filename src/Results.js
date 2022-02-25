import React from "react";
import Meanings from "./Meanings";

export default function Results(props) {
    if (props.results) {
        return (
            <div className="Results">
                <h2 className="mt-3">{props.results.word}</h2>
                {props.results.phonetics.map(function (phonetic, index) {
                    return (
                        <span className="me-3" key={index}>
                            {phonetic.text}
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