import React from "react";
import Icons from "../images/Icons";
import { Link } from "react-router-dom";

const NavItem = ({ url, explain }) => {
    return (
        <div>
            <div className="nav__image">
                <Icons>{url}</Icons>
            </div>
            <div className="nav__explain">{explain}</div>
        </div>
    );
};

const NavList = () => {
    const navList = [
        {
            id: 1,
            url: "location",
            explain: "불법주정차 위치",
        },
        {
            id: 2,
            url: "description",
            explain: "불법주정차 내용",
        },
        {
            id: 3,
            url: "parking",
            explain: "공용주차장 찾기",
        },
    ];
    return (
        <nav className="nav">
            <ul className="nav__menu">
                {navList.map(({ id, url, explain }) => (
                    <li key={id}>
                        <Link to={`/${url}`}>
                            <NavItem url={url} explain={explain}></NavItem>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavList;
