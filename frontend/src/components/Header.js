import React from "react";
import { Link } from "react-router-dom";
import {ButtonBase} from '@material-ui/core';
// import "../SCSS/Header.scss";

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <Link to="/">LOGO</Link>
            </div>
            <div className="header__title">
                <h2>Safe parking</h2>
            </div>
            <div className="header__login">
                <Link className="login-button" to="/login" >sign in</Link>
            </div>
        </header>
    );
};

export default Header;
