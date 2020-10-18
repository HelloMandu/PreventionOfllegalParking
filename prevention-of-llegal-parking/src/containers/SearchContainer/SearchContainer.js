import React from "react";
import useInput from "../../hooks/useInput";

import Search from "../../components/Search/Search";

import "./SearchContainer.scss";

const SearchContainer = () => {
    const [text, textChange] = useInput("");
    return (
        <div className="search-container">
            <div className="search-header">
                <h1>Safe Parking</h1>
                <Search
                    text={text}
                    textChange={textChange}
                ></Search>
            </div>
            <h2>공용주차장</h2>
        </div>
    );
};

export default SearchContainer;
