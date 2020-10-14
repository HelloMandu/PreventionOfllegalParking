import React from "react";
import Icons from "../images/Icons";
import { Link } from "react-router-dom";

const NavItem = ({ url, explain }) => {
    return (
        <div className="nav-item">
            <Link to={`/${url}`} className="nav__link">
                <Icons>{url}</Icons>
                <div className="nav__explain">{explain}</div>
            </Link>
        </div>
    );
};

export default NavItem;
