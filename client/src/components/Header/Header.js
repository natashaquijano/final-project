import React, { Component } from 'react';
import './Header.scss';

import Video from '../../videos/main-video.mp4';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <video className="mainvideo" autoPlay="main-video" src={Video} alt="video" />
                <div className="location-bar-button">
                    <input type="text" placeholder="Location" name="search-location" id="location-bar" />
                    <button className="save-button">Save</button>
                </div>
            </div >

        );
    }
}

export default Header;