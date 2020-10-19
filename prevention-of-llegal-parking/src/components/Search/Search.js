import React, { useCallback } from "react";

import SearchList from "./SearchList";

import useSearch from "../../hooks/useSearch";
import { roadToPosition } from "../../api/RoadToPosition";

import Icon from "../../images/Icons";

import "./Search.scss";

const Search = ({ text, textChange }) => {
    const [searchFocus, searchList, handleSearchToggle] = useSearch(text);
    const handleSearchItem = async (e) => {
        console.log(e.currentTarget.lastChild.lastChild.innerHTML);
        const getPosition = async (address) =>{
            await roadToPosition(address);
        }
        await getPosition(e.currentTarget.lastChild.lastChild.innerHTML);
    };
    return (
        <div className="searchbar">
            <input
                className="search-text"
                type="text"
                placeholder="장소, 주소, 주차장 검색"
                value={text}
                onChange={textChange}
                onFocus={handleSearchToggle}
                // onBlur={handleSearchToggle}
            />
            <button className="search-click">
                <Icon>{"search"}</Icon>
            </button>
            {searchFocus && (
                <SearchList
                    searchList={searchList}
                    handleSearchItem={handleSearchItem}
                />
            )}
        </div>
    );
};

export default Search;
