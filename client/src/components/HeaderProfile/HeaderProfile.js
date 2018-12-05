import React, { Component } from 'react';
import './HeaderProfile.scss';

import defaultCover from '../../images/ProfileActivity/default-cover.png'

// import Following from '../../components/Following/Following';


class HeaderProfile extends Component {
    render() {
        return (
            <div >
                <div>
                    <div className="pro-img pro-img1">
                        {/* <video className="mainprofile" loop autoPlay="main-video" src={Video} alt="video" /> */}
                        <img src={defaultCover} className="pro-img1" alt="articles" />
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