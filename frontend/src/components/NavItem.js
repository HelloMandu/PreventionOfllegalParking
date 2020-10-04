import React from "react";
import Icons from "../images/Icons";
import { Link } from "react-router-dom";

const NavItem = ({ url, explain }) => {
    return (
        <div>
            <Link to={`/${url}`}>
                <div className="nav-item">
                    <div className="nav__image">
                        <Icons>{url}</Icons>
                    </div>
                    <div className="nav__explain">{explain}</div>
                </div>
            </Link>
        </div>
    );
};

export default NavItem;
