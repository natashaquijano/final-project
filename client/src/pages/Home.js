import React, { Component } from 'react';
import Header from '../components/Header/Header';
// import Carousel from '../components/Carousel/Carousel';
import Trending from '../components/Trending/Trending';
import TrendingEvents from '../components/TrendingEvents/TrendingEvents';
import TrendingArticles from '../components/TrendingArticles/TrendingArticles';
import TrendingCreatives from '../components/TrendingCreatives/TrendingCreatives';
import NavBar from '../components/NavBar/NavBar';

class Home extends Component {
    render() {
        return (
            <div>  <NavBar history={this.props.history} />
                <div className="all-container">
                    <div className="body-container">
                        <Header />
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

export default Home;