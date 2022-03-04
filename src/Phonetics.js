import React from "react";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Phonetics.css";

export default function Phontics(props) {
    console.log(props.phonetics);
    if (props.phonetics.audio.length > 10) {
        return (
            <span className="Phonetics me-3">
                <a href={props.phonetics.audio} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faHeadphones} /> {props.phonetics.text}</a>
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