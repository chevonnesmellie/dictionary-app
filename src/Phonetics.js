import React from "react";

import "./Phonetics.css";

export default function Phontics(props) {
    if (props.phonetics.audio) {
        return (
            <span className="Phonetics me-3">
                <a href={props.phonetics.audio} target="_blank" rel="noreferrer">{props.phonetics.text}</a>
            </span>
        )
    } else {
        return (
            <span className="Phonetics me-3">
                {props.phonetics.text}
            </span>
        )
    }
}