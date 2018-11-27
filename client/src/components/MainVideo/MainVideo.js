import React, { Component } from 'react';
import Video from '../../videos/main-video.mp4';
class MainVideo extends Component {
    render() {
        return (
            <div className="main-video">
                <video className="mainvideo" autoPlay="main-video" src={Video} alt="video" />
                <div className="location-bar-button">
                    <input type="text" placeholder="Your Location" name="search-location" id="location-bar" />
                    <button className="save-button">Save</button>
                </div>
            </div>
        );
    }
}

export default MainVideo;