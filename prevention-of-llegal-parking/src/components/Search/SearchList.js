import { Icon } from "@material-ui/core";
import React from "react";
import { useRef } from "react";

import Icons from "../../images/Icons";

import "./SearchList.scss";

const SearchItem = ({ title, address }) => {
    return (
        <div className="search-item">
            <Icons>{"marker"}</Icons>
            <div className="address">
                <div className="title">{title}</div>
                <div className="description">{address}</div>
            </div>
        </div>
    );
};

const SearchList = ({ searchList }) => {
    const listKey = useRef(0);
    if (searchList === null || searchList.length === 0) {
        return null;
    }
    return (
        <ul className="search-list">
            {searchList.map(({ bdNm, roadAddr }) => {
                listKey.current += 1;
                return (
                    <li key={listKey.current}>
                        <SearchItem
                            title={bdNm}
                            address={roadAddr}
                        ></SearchItem>
                    </li>
                );
            })}
        </ul>
    );
};

export default SearchList;
