import React, { Component } from 'react';
import './TrendingArticles.scss';

import CarouselArticles from '../../components/CarouselArticles/CarouselArticles';

class TrendingArticles extends Component {
    render() {
        return (
            <div className="trendingArticles">
                <h1>Articles</h1>
                <CarouselArticles />
            </div>

        );
    }
}

export default TrendingArticles;