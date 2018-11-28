import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Trending from '../components/Trending/Trending';
import TrendingEvents from '../components/TrendingEvents/TrendingEvents';
import TrendingArticles from '../components/TrendingArticles/TrendingArticles';
import TrendingCreatives from '../components/TrendingCreatives/TrendingCreatives';


class Home extends Component {
    render() {
        return (
            <div className="all-container">
                <div className="body-container ">
                    <Header />
                    <Trending />
                    <TrendingEvents />
                    <TrendingArticles />
                    <TrendingCreatives />
                </div>
            </div>
        );
    }
}

export default Home;