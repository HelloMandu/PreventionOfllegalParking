import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import cn from "classnames";
import { ButtonBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { roadToPositionSaga } from "../../modules/location";
import useInput from "../../hooks/useInput";
import useSearch from "../../hooks/useSearch";

import Search from "../../components/Search/Search";
import AddressList from "../../components/AddressList/AddressList";

import Icon from "../../images/Icons";
import "./SearchContainer.scss";

const buttonStyles = makeStyles({
    root: {
        width: "50%",
        height: "48px",
        marginLeft: "8px",
        marginRight: "8px",
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        border: 0,
        borderRadius: 15,
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
        color: "white",
        padding: "0 30px",
        zIndex: "1500",
        pointerEvents: "auto"
    },
});

const SearchContainer = ({ location, setLocation }) => {
    const buttonStyle = buttonStyles();
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
            <div className="location-button">
                <ButtonBase
                    id="location-button"
                    className={buttonStyle.root}
                    data-latitude={location.latitude}
                    data-longitude={location.longitude}
                    onClick={(e) => {
                        setLocation({
                            latitude: e.target.dataset.latitude,
                            longitude: e.target.dataset.longitude,
                        });
                    }}
                >
                    현재위치 지정
                </ButtonBase>
                <ButtonBase id="confirm-button" className={buttonStyle.root}>
                    검사
                </ButtonBase>
            </div>
        </div>
    );
};

export default SearchContainer;
