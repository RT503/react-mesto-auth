import React from 'react';
import logo from '../images/header-logo.svg';
import { NavLink, Route } from 'react-router-dom';


function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={logo} alt="Логотип сайта Mesto" / >
        </header>
    )
}

export default Header;