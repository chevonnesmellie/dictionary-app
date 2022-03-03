import React from "react";
import Synonyms from "./Synonyms";

import "./Meanings.css";

export default function Meanings(props) {
    return (
        <div className="Meanings">
            <h4>{props.meanings.partOfSpeech}</h4>
            {props.meanings.definitions.map(function (definition, index) {
                if (definition.example) {
                    return (
                        <div key={index}>
                            <span className="definition">{index+1}. {definition.definition}</span>
                            <br />
                            <span className="example">{definition.example}</span>
                            <br />
                            <Synonyms synonyms={definition.synonyms} />
                        </div>
                    )
                } else {
                    return (
                        <div key={index}>
                            <span className="definition">{index+1}. {definition.definition}</span>
                            <br />
                            <Synonyms synonyms={definition.synonyms} />
                        </div>
                    )
                }
            })}
        </div>
    )
}