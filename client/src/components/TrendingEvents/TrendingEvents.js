import React, { Component } from 'react';
import './TrendingEvents.scss';

import Carousel from '../Carousel/Carousel';

class TrendingEvents extends Component {
    render() {
        return (
            <div className="trendingEvents">
                <h1>Events</h1>
                <Carousel />
            </div>
        );
    }
}

export default TrendingEvents;