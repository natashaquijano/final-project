import React, { Component } from 'react';
import Video from '../../videos/main-video.mp4';
import '../HeaderVideo/HeaderVideo.scss';

class HeaderVideo extends Component {
    render() {
        return (
            <div className="vid">
                <video className="mainvideo" autoPlay="main-video" src={Video} alt="video" />
                <input type="text" placeholder="Your Location" name="search-location" id="location-bar" />
                <button className="save-button">Save</button>
            </div>
        );
    }
}

export default HeaderVideo;