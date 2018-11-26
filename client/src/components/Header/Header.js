import React, { Component } from 'react';
import './Header.scss';

import Video from '../../videos/main-video.mp4';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <video className="mainv" src={Video} type="video/mp4" alt="video" />


            </div >

        );
    }
}

export default Header;