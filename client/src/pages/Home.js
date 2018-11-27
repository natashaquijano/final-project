import React, { Component } from 'react';
import Header from '../components/Header/Header';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import Trending from '../components/Trending/Trending';
import TrendingEvents from '../components/TrendingEvents/TrendingEvents';
import TrendingArticles from '../components/TrendingArticles/TrendingArticles';
import TrendingCreatives from '../components/TrendingCreatives/TrendingCreatives';
import AppSass from '../../src/App.scss'
// import './App.scss';

class Home extends Component {
    render() {
        return (
            <div>
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