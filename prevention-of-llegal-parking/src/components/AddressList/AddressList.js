import React, { useRef } from "react";

import Icons from "../../images/Icons";

import "./AddressList.scss";

const AddressItem = ({ title, address, onClick }) => {
    return (
        <div className="address-item" onClick={onClick}>
            <Icons>{"marker"}</Icons>
            <div className="address">
                <div className="title">{title}</div>
                <div className="description">{address}</div>
            </div>
        </div>
    );
};

const AddressList = ({
    searchList,
    setSearched,
    setSearchFocus,
    handleSearchItem,
}) => {
    const listKey = useRef(0);
    if (searchList === null || searchList.length === 0) {
        return null;
    }
    return (
        <ul
            className="address-list"
            onClick={() => {
                setTimeout(() => setSearchFocus(false), 100);
            }}
        >
            {searchList.map(({ bdNm, roadAddr }) => {
                listKey.current += 1;
                return (
                    <li
                        key={listKey.current}
                        onClick={() => setSearched(false)}
                    >
                        <AddressItem
                            title={bdNm}
                            address={roadAddr}
                            onClick={handleSearchItem}
                        ></AddressItem>
                    </li>
                );
            })}
        </ul>
    );
};

export default AddressList;
