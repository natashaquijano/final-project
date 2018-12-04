import React, { Component } from 'react';
import './TrendingCreatives.scss';

import Carousel from '../../components/Carousel/Carousel';

class TrendingCreatives extends Component {
    render() {
        return (
            <div className="trendingCreatives">
                <h1>Creatives</h1>
                <Carousel />
            </div>
        );
    }
}

export default TrendingCreatives;