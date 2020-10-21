import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import cn from "classnames";

import { roadToPositionSaga } from "../../modules/location";
import useInput from "../../hooks/useInput";
import useSearch from "../../hooks/useSearch";

import Search from "../../components/Search/Search";
import AddressList from "../../components/AddressList/AddressList";

import Icon from "../../images/Icons";
import "./SearchContainer.scss";

const SearchContainer = () => {
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
    const handleSearchItem = useCallback((e) => {
        const road = e.currentTarget.lastChild.lastChild.innerHTML;
        setAddress(road);
        roadToPosition(road);
    }, []);

    return (
        <div className={cn("search-container", { seen })}>
            <div className="search-header">
                <h1>Safe Parking</h1>
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
                    setSearchFocus={setSearchFocus}
                    handleSearchItem={handleSearchItem}
                ></AddressList>
            )}
            <div className="on-search" onClick={() => setSeen(!seen)}>
                <Icon>{seen ? "arrow-left" : "arrow-right"}</Icon>
            </div>
        </div>
    );
};

export default SearchContainer;
