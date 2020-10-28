import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import cn from "classnames";

import { roadToPositionSaga } from "../../modules/myLocation";
import useInput from "../../hooks/useInput";
import useSearch from "../../hooks/useSearch";

import Search from "../../components/Search/Search";
import AddressList from "../../components/AddressList/AddressList";

import Icon from "../../assets/images/Icons";
import "./SearchContainer.scss";
import Category from "../../components/Category/Category";

const SearchContainer = ({ location, setLocation }) => {
    const [address, setAddress, addressChange] = useInput("");
    const [
        searchFocus,
        searchList,
        setSearchFocus,
        handleSearchList,
    ] = useSearch(address);
    const [seen, setSeen] = useState(true);
    const [searched, setSearched] = useState(false);
    const dispatch = useDispatch();
    const roadToPosition = useCallback(
        (road) => {
            dispatch(roadToPositionSaga(road));
        },
        [dispatch]
    );
    const handleSearchItem = useCallback(
        (e) => {
            const road = e.currentTarget.lastChild.lastChild.innerHTML;
            setAddress(road);
            roadToPosition(road);
        },
        [roadToPosition, setAddress]
    );

    return (
        <div className={cn("search-container", { seen })}>
            <div className="search-header">
                <Search
                    address={address}
                    addressChange={addressChange}
                    setSearched={setSearched}
                    searchFocus={searchFocus}
                    searchList={searchList}
                    setSearchFocus={setSearchFocus}
                    handleSearchList={handleSearchList}
                    handleSearchItem={handleSearchItem}
                ></Search>
            </div>
            {searched && (
                <AddressList
                    searchList={searchList}
                    setSearched={setSearched}
                    setSearchFocus={setSearchFocus}
                    handleSearchItem={handleSearchItem}
                ></AddressList>
            )}
            <div className="on-search" onClick={() => setSeen(!seen)}>
                <Icon>{seen ? "arrow-left" : "arrow-right"}</Icon>
            </div>
            <Category></Category>
        </div>
    );
};

export default SearchContainer;
