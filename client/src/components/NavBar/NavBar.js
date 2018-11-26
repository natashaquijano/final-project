import React, { Component } from 'react';
import './NavBar.scss';
import Logo from '../../images/logo.png';
import Defi from '../../images/default-image.png';

class NavBar extends Component {
    render() {
        return (
            <div className="navBar">
                <div className="nav-logo">
                    <img className="logo" src={Logo} alt="logo" />
                </div>
                <div className="nav-title">
                    <h1 className="title">Rouse</h1>
                </div>
                <div className="nav-search">
                    <input type="text" placeholder="Search" name="search-name" id="search-bar" />
                    {/* <input type="submit" placeholder="Submit" name="button-name" className="button" /> */}
                </div>
                <div>
                    <ul className="nav-links">
                        <li>About</li>
                        <img className="nav-image" src={Defi} alt="defi" />
                        <li className="nav-profile">Profile</li>
                        <li>Shopping Cart</li>
                        <li>Log Out</li>
                        <li>Sign In</li>
                        <li>Sign Up</li>
                    </ul>
                </div>
            </div >
        );
    }
}

export default NavBar;