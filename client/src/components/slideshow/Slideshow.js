import React, { Component } from 'react';
import './Slideshow.scss';

import Slide1 from '../../images/yoga.png';
import Slide2 from '../../images/music.png';
import Slide3 from '../../images/museum.png';

class Slideshow extends Component {
    render() {
        return (
            <div className="slideshow">
                <img className="yoga" src={Slide1} alt="yoga" />
                <img className="music" src={Slide2} alt="music" />
                <img className="museum" src={Slide3} alt="museum" />

            </div >
        );
    }
}

export default Slideshow;