import React from "react";

import SearchList from "./SearchList";

import Icon from "../../assets/images/Icons";

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
    const onClickSearch = () => {
        handleSearchList(address);
        setSearched(true);
        setSearchFocus(false);
    };
    const onKeyPressSearch = (e) => {
        if (e.key === "Enter") {
            onClickSearch();
        }
    };
    return (
        <div className="searchbar">
            <input
                className="search-text"
                type="address"
                placeholder="장소, 주소, 주차장 검색"
                value={address}
                onChange={addressChange}
                onKeyPress={onKeyPressSearch}
            />
            <button className="search-click" onClick={onClickSearch}>
                <Icon>{"search"}</Icon>
            </button>
            {searchFocus && (
                <SearchList
                    address={address}
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
