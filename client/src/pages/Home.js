import React, { Component } from 'react';
import Header from '../components/Header/Header';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import Trending from '../components/Trending/Trending';
import TrendingEvents from '../components/TrendingEvents/TrendingEvents';
import TrendingArticles from '../components/TrendingArticles/TrendingArticles';
import TrendingCreatives from '../components/TrendingCreatives/TrendingCreatives';
import Following from '../components/Following/Following';
import Follow from '../components/Follow/Follow';
import Wishlist from '../components/Wishlist/Wishlist';

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <NavBar />
                <Header />
                <Following />
                <Follow />
                <Wishlist />
                <Trending />
                <TrendingEvents />
                <TrendingArticles />
                <TrendingCreatives />
                <Footer />
            </div>
        );
    }
}

export default Home;