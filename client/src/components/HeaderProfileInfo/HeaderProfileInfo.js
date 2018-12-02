import React, { Component } from 'react';
import Video from '../../videos/main-video.mp4';

class HeaderProfileInfo extends Component {
    render() {
        return (
            <div className="pro-img">
                <video className="mainprofile" loop autoPlay="main-video" src={Video} alt="video" />
            </div>
        );
    }
}

export default HeaderProfileInfo;