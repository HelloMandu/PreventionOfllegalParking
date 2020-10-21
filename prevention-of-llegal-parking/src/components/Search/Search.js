import React from "react";

import SearchList from "./SearchList";

import Icon from "../../images/Icons";

import "./Search.scss";

const Search = (props) => {
    const {
        address,
        addressChange,
        setSearched,
        searchFocus,
        searchList,
        setSearchFocus,
        handleSearchList,
        handleSearchItem,
    } = props;
    return (
        <div className="searchbar">
            <input
                className="search-text"
                type="address"
                placeholder="장소, 주소, 주차장 검색"
                value={address}
                onChange={addressChange}
                onFocus={() => {
                    setSearchFocus(true);
                    setSearched(false);
                }}
            />
            <button
                className="search-click"
                onClick={() => {
                    handleSearchList(address);
                    setSearched(true);
                    setSearchFocus(false);
                }}
            >
                <Icon>{"search"}</Icon>
            </button>
            {searchFocus && (
                <SearchList
                    searchList={searchList}
                    handleSearchItem={handleSearchItem}
                    handleSearchToggle={setSearchFocus}
                    setSearchFocus={setSearchFocus}
                />
            )}
        </div>
    );
};

export default Search;
