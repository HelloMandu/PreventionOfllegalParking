import React from "react";
import { Link } from "react-router-dom";
// import "../SCSS/Header.scss";

const Header = () => {
    return (
        <header className="header">
            <div className="header__title">
                <h2>Safe parking</h2>
            </div>
                <Link className="login-button" to="/login" >sign in</Link>
        </header>
    );
};

export default Header;
