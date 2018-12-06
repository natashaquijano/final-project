import React, { Component } from 'react';
import './HeaderProfile.scss';

import defaultCover from '../../images/ProfileActivity/default-cover.png'
import Defi from '../../images/icons/default-image.png';

// import Following from '../../components/Following/Following';


class HeaderProfile extends Component {
    render() {
        const { user } = this.props
        return (
            <div >
                <div>
                    <div className="pro-img pro-img1">
                        {/* <video className="mainprofile" loop autoPlay="main-video" src={Video} alt="video" /> */}
                        <img src={defaultCover} className="pro-img1" alt="articles" />
                    </div>
                    <div>
                        <h1 className="default-user-info">{user.username}</h1>
                        <h2 className="default-user-info info2">{`${user.firstName} ${user.lastName}`}</h2>
                        <h2 className="default-user-info info3">Location</h2>
                        <img className="nav-image nav-image2" src={user.avatar} alt="defi" />
                    </div>
                </div>
                <div>
                    {/* <Following /> */}
                </div>
            </div >

        );
    }
}

export default HeaderProfile;