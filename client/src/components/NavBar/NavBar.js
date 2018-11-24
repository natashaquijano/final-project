import React, { Component } from 'react';
import './NavBar.scss';

import Logo from '../../images/logo.png';

class NavBar extends Component {
    render() {
        return (
            <div className="navBar">
                <img className="logo" src={Logo} alt="logo" />
                <h1>Rouse</h1>
                <input type="text" placeholder="Search" name="search-name" id="search-bar" />
                <input type="submit" placeholder="Submit" name="button-name" className="button" />
                <ul>
                    <li>About</li>
                    <li>Profile</li>
                    <li>Shopping Cart</li>
                    <li>Log Out</li>
                    <li>Sign In</li>
                    <li>Sign Up</li>
                </ul>
            </div >
        );
    }
}

export default NavBar;