import React, { Component } from 'react';
import Trending from '../components/Trending/Trending';
import TrendingEvents from '../components/TrendingEvents/TrendingEvents';
import TrendingArticles from '../components/TrendingArticles/TrendingArticles';
import TrendingCreatives from '../components/TrendingCreatives/TrendingCreatives';
import HeaderLandingVideo from '../components/HeaderLandingVideo/HeaderLandingVideo';
import NavBar from '../components/NavBar/NavBar';

class Landing extends Component {
    render() {
        return (
            <div><NavBar history={this.props.history} />
                <div className="all-container">
                    <div className="body-container ">
                        <HeaderLandingVideo />
                        <Trending />
                        <TrendingEvents />
                        <TrendingArticles />
                        <TrendingCreatives />
                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;