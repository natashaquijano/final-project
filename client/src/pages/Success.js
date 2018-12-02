import React, { Component } from 'react';
import SuccessInfo from '../components/SuccessInfo/SuccessInfo';
import NavBar from '../components/NavBar/NavBar';

class FriendProfile extends Component {
    render() {
        return (
            <div><NavBar history={this.props.history} />
                <div className="all-container">
                    <div className="body-container ">
                        <SuccessInfo />
                    </div>
                </div >
            </div>
        );
    }
}

export default FriendProfile;