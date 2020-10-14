import React from 'react';
import NavList from './NavList';

import logo from '../../images/logo.png';

import './NavBar.scss'

const NavBar = () => {
    return(
        <div className="navbar">
            <img className="logo" src={logo} alt="logo image"/>
            <NavList></NavList>
        </div>
    )
}

export default NavBar;