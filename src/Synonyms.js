import React from "react";

import "./Synonyms.css";

export default function Synonyms(props) {
    console.log(props.synonyms);
    if (props.synonyms.length > 0) {
        return (
            <div className="Synonyms">
                <span className="label">Synonyms: </span>
                {props.synonyms.map(function (synonym, index) {
                    return (
                        <span key={index} className="ms-2 synonym">
                            {synonym}
                        </span>
                    )
                })}
            </div>
        )
    } else {
        return null;
    }
}