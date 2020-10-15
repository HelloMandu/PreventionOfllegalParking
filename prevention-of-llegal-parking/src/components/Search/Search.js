import React from "react";

import Icon from '../../images/Icons';
import useInput from "../../hooks/useInput";

import './Search.scss';

const Search = ({handleGPS}) => {
    const [text, textChange] = useInput("");
    return (
        <div className="searchbar" >
            <Icon onClick={handleGPS}>{"my-location"}</Icon>
            <input
                className="search-text"
                type="text"
                placeholder="장소, 주소검색"
                value={text}
                onChange={textChange}
            />
            <button className="search-click">
                <Icon>{"search"}</Icon>
            </button>
        </div>

    );
};

export default Search;
