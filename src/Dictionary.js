import React, { useState } from 'react';
import axios from 'axios';

import Results from "./Results";
import Photos from "./Photos";

import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);
    let [photos, setPhotos] = useState(null);

    function handleResponse(response) {
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);
    }
    
    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    function search(event) {
        event.preventDefault();

        // documentation https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);

        const pexelsApiKey = "563492ad6f917000010000016be6ec5878a64b929f389e574095c79f";
        const pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
        const headers = { Authorization: `Bearer ${pexelsApiKey}` };
        axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
    }

    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" onChange={handleKeywordChange} className="form-control search-input" autoFocus="off" />
                <input type="submit" value="Search" className="btn search-btn" />
            </form>
            <Results results={results} />
            <Photos photos={photos} />
        </div>
    )
}