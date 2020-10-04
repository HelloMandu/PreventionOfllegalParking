import React from "react";
import NavItem from './NavItem';


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
            explain: "불법주정차 규정",
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
                        <NavItem url={url} explain={explain}></NavItem>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavList;
