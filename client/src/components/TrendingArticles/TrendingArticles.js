import React, { Component } from 'react';
import './TrendingArticles.scss';

import Carousel from '../../components/Carousel/Carousel';

class TrendingArticles extends Component {

    render() {
        return (
            <div className="trendingArticles">
                <h1>Articles</h1>
                <Carousel />
            </div>

        );
    }
}

export default TrendingArticles;