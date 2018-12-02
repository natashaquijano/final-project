import React, { Component, Fragment } from 'react';
import './NavBar.scss';
import { isAuthenticated } from '../../helper/Index'
import Logo from '../../images/icons/logo.png';
import Defi from '../../images/icons/default-image.png';
import { Link } from 'react-router-dom'

class NavBar extends Component {
    handleLogOut = () => {
        window.localStorage.removeItem("token");
        this.props.history.push("/landing");
    }
    render() {
        return (
            <div className="navBar">
                <div className="nav-logo">
                    <Link to={isAuthenticated() ? "/" : "/landing"}><img className="logo" src={Logo} alt="logo" /></Link>
                </div>
                <div className="nav-title">
                    {/* <h1 className="title">Rouse</h1> */}
                </div>

                <div className="nav-search">
                    <input type="text" placeholder="Search" name="search-name" id="search-bar" />
                </div>
                <div>
                    <ul className="nav-links">
                        {isAuthenticated() && <Fragment> <img className="nav-image" src={Defi} alt="defi" />
                            <Link to="/profile"><li className="nav-profile">Profile</li></Link></Fragment>}
                        <Link to="/shoppingcart"> <li>Shopping Cart</li></Link>
                        {isAuthenticated() ? <li onClick={this.handleLogOut}>Log Out</li> :
                            <Fragment>
                                <Link to="/signin"><li>Sign In</li></Link>
                                <Link to="/signup"><li>Sign Up</li></Link>
                            </Fragment>}
                    </ul>
                </div>
            </div >
        );
    }
}

export default NavBar;