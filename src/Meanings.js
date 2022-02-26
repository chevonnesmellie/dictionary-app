import React from "react";
import Synonyms from "./Synonyms";

export default function Meanings(props) {
    return (
        <div className="Meanings">
            <h4>{props.meanings.partOfSpeech}</h4>
            {props.meanings.definitions.map(function (definition, index) {
                return (
                    <p key={index}>
                        {index+1}. {definition.definition}
                        <br />
                        <em>{definition.example}</em>
                        <br />
                        <Synonyms synonyms={definition.synonyms} />
                    </p>
                )
            })}
        </div>
    )
}