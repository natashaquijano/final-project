import React, { Component } from 'react';
import HeaderProfile from '../components/HeaderProfile/HeaderProfile';
import WishlistProfile from '../components/WishlistProfile/WishlistProfile';

import NavBar from '../components/NavBar/NavBar';

class Profile extends Component {
    render() {
        return (
            <div><NavBar history={this.props.history} />
                <div className="all-container">
                    <div className="body-container ">
                        <HeaderProfile />
                        <WishlistProfile />
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;