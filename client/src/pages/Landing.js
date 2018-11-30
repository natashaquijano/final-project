import React, { Component } from 'react';
import LandingHeader from '../components/LandingHeader/LandingHeader';
// import Carousel from '../components/Carousel/Carousel';
import Trending from '../components/Trending/Trending';
import TrendingEvents from '../components/TrendingEvents/TrendingEvents';
import TrendingArticles from '../components/TrendingArticles/TrendingArticles';
import TrendingCreatives from '../components/TrendingCreatives/TrendingCreatives';

class Landing extends Component {
    render() {
        return (
            <div className="all-container">
                <div className="body-container ">
                    <LandingHeader />
                    <Trending />
                    <TrendingEvents />
                    <TrendingArticles />
                    <TrendingCreatives />
                </div>
            </div>
        );
    }
}

export default Landing;