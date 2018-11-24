import React, { Component } from 'react';
import './Slideshow.scss';

import Slide1 from '../../images/yoga.jpg';
import Slide2 from '../../images/monolink.jpg';
import Slide3 from '../../images/food.jpg';

class Slideshow extends Component {
    render() {
        return (
            <div className="slideshow">
                <img className="yoga" src={Slide1} alt="yoga" />
                <img className="music" src={Slide2} alt="music" />
                <img className="food" src={Slide3} alt="food" />

            </div >
        );
    }
}

export default Slideshow;