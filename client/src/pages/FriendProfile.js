import React, { Component } from 'react';
import FriendProfileInfo from '../components/FriendProfileInfo/FriendProfileInfo';
import HeaderProfile from '../components/HeaderProfile/HeaderProfile';

import NavBar from '../components/NavBar/NavBar';

class FriendProfile extends Component {
    render() {
        return (
            <div><NavBar history={this.props.history} />
                <div className="all-container">
                    <div className="body-container ">
                        <HeaderProfile />
                        <FriendProfileInfo />
                    </div>
                </div>
            </div>
        );
    }
}

export default FriendProfile;