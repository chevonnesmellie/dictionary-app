import React from "react";

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
                    </p>
                )
            })}
        </div>
    )
}