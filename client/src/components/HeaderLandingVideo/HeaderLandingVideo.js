import React, { Component } from 'react';
import Video from '../../videos/main-video2.mp4';
import '../HeaderLandingVideo/HeaderLandingVideo.scss';

class HeaderLandingVideo extends Component {
    render() {
        return (
            <div className="vid2">
                <video className="mainvideo2" loop autoPlay="main-video2" src={Video} alt="video" />
                <input type="text" placeholder="Your Location" name="search-location" id="location-bar2" />
                <button className="save-button2">Save</button>
            </div>
        );
    }
}

export default HeaderLandingVideo;