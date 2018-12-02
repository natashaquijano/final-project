import React, { Component } from 'react';
import FriendProfileInfo from '../components/FriendProfileInfo/FriendProfileInfo';
import HeaderProfile from '../components/HeaderProfile/HeaderProfile';

class FriendProfile extends Component {
    render() {
        return (

            <div className="all-container">
                <div className="body-container ">
                    <HeaderProfile />
                    <FriendProfileInfo />
                </div>
            </div>

        );
    }
}

export default FriendProfile;