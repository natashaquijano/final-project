import React, { Component } from 'react';
// import NavBar from '../NavBar/NavBar';
// import axios from '../../helper/APIConfig';
import './Suggestion.scss'

import plant from '../../images/Events/events-plant.png'
import mixology from '../../images/Events/events-mixology.png'
import allDay from '../../images/Events/events-allday.png';
import yoga from '../../images/Events/events-yoga.png'

import bodyPaint from '../../images/Articles/articles-bodypaint.png'
import katerblau from '../../images/Articles/articles-katerblau.png'
import meditation from '../../images/Articles/articles-meditation.png'
import femaleDj from '../../images/Articles/articles-nina.png'

import satori from '../../images/Creatives/creatives-satori.png'
import gabby from '../../images/Creatives/creatives-gabby.png'
import mira from '../../images/Creatives/creatives-mira.png'
import yogagirl from '../../images/Creatives/creatives-yogagirl.png'

class Suggestions extends Component {
    state = {
    }

    render() {

        return (
            <div>
                <h1 className="trending trending1">Something For You</h1>
                <div className="trendingEventsMain">
                    <h1 className="trendingEvents">Events</h1>
                    <div className="trendingevents">
                        <ul className="trendingEventsul">
                            <li className="trendingEventsli"><img src={plant} alt="events" /></li>
                            <li className="trendingEventsli"><img src={mixology} alt="events" /></li>
                            <li className="trendingEventsli"><img src={allDay} alt="events" /></li>
                            <li className="trendingEventsli"><img src={yoga} alt="events" /></li>
                        </ul>
                    </div>
                    <div className="trending-buttone">
                        <button className="trending-buttonE">View More</button>
                    </div>
                </div>
                <div className="trendingArticlesMain">
                    <h1 className="trendingArticles">Articles</h1>
                    <div className="trendingarticles">
                        <ul className="trendingArticlesul">
                            <li className="trendingArticlesli"><img src={bodyPaint} alt="articles" /></li>
                            <li className="trendingArticlesli"><img src={katerblau} alt="articles" /></li>
                            <li className="trendingArticlesli"><img src={meditation} alt="articles" /></li>
                            <li className="trendingArticlesli"><img src={femaleDj} alt="articles" /></li>
                        </ul>
                    </div>
                    <div className="trending-buttona">
                        <button className="trending-buttonA">View More</button>
                    </div>
                </div>
                <div className="trendingCreativesMain">
                    <h1 className="trendingCreatives">Creatives</h1>
                    <div className="trendingcreatives">
                        <ul className="trendingCreativesul">
                            <li className="trendingCreativesli"><img src={satori} alt="creatives" /></li>
                            <li className="trendingCreativesli"><img src={gabby} alt="creatives" /></li>
                            <li className="trendingCreativesli"><img src={mira} alt="creatives" /></li>
                            <li className="trendingCreativesli"><img src={yogagirl} alt="creatives" /></li>
                        </ul>
                    </div>
                    <div className="trending-buttonc">
                        <button className="trending-buttonC">View More</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Suggestions;