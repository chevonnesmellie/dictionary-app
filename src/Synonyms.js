import React from "react";

export default function Synonyms(props) {
    console.log(props.synonyms);
    if (props.synonyms) {
        return (
            <div className="Synonyms">
                <span>Synonyms: </span>
                {props.synonyms.map(function (synonym, index) {
                    return (
                        <span key={index} className="ms-2">
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