import { Icon } from "@material-ui/core";
import React from "react";
import { useRef } from "react";

import Icons from "../../images/Icons";

import "./SearchList.scss";

const SearchItem = ({ title, address, onClick }) => {
    return (
        <div className="search-item" onClick={onClick}>
            <Icons>{"marker"}</Icons>
            <div className="address">
                <div className="title">{title}</div>
                <div className="description">{address}</div>
            </div>
        </div>
    );
};

const SearchList = ({ searchList, handleSearchItem }) => {
    const listKey = useRef(0);
    if (searchList === null || searchList.length === 0) {
        return null;
    }
    return (
        <ul className="search-list">
            {searchList.map(({ bdNm, roadAddr }) => {
                listKey.current += 1;
                return (
                    <li key={listKey.current} >
                        <SearchItem
                            title={bdNm}
                            address={roadAddr}
                            onClick={handleSearchItem}
                        ></SearchItem>
                    </li>
                );
            })}
        </ul>
    );
};

export default SearchList;
