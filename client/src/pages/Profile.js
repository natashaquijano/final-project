import React, { Component } from 'react';
import HeaderProfile from '../components/HeaderProfile/HeaderProfile';
import WishlistProfile from '../components/WishlistProfile/WishlistProfile';

class Profile extends Component {
    render() {
        return (
            <div className="all-container">
                <div className="body-container ">
                    <HeaderProfile />
                    <WishlistProfile />
                </div>
            </div>
        );
    }
}

export default Profile;