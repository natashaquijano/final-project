import React, { Component } from 'react';
import './WishlistProfile.scss'

// likes
import deckYoga from '../../images/ProfileActivity/deck-yoga.png';
import bowl from '../../images/ProfileActivity/bowl.png';
import recordSale from '../../images/ProfileActivity/record-sale.png';
import mixologyShots from '../../images/ProfileActivity/mixology-shots.png'

// wishlist

import abracadabra from '../../images/ProfileActivity/abracadabra.png'
import bioFarming from '../../images/ProfileActivity/biodynamic-farmimg.png'
import wineTasting from '../../images/ProfileActivity/winetasting.png'
import sfmomA from '../../images/ProfileActivity/sf-momA.png'

// upcoming events
import rumors from '../../images/ProfileActivity/rumors-artbasel.png'
import yogaClass from '../../images/ProfileActivity/yoga-class.png'
import afterBurn from '../../images/ProfileActivity/afterburn.png'
import yosemite from '../../images/ProfileActivity/yosemite.png'

//past events
import veganPizza from '../../images/ProfileActivity/vegan-pizza.png'
import popUp from '../../images/ProfileActivity/popup.png'
import makePlant from '../../images/ProfileActivity/make-plant.png'
import siteSeeing from '../../images/ProfileActivity/site-seeing.png'

class Suggestions extends Component {
    state = {
    }

    render() {

        return (
            <div>
                <h1 className="trending trending1">Your Activity</h1>
                <div className="trendingEventsMain">
                    <h1 className="trendingEvents">Likes</h1>
                    <div className="trendingevents">
                        <ul className="trendingEventsul">
                            <li className="trendingEventsli"><img src={deckYoga} alt="events" /></li>
                            <li className="trendingEventsli"><img src={bowl} alt="events" /></li>
                            <li className="trendingEventsli"><img src={recordSale} alt="events" /></li>
                            <li className="trendingEventsli"><img src={mixologyShots} alt="events" /></li>
                        </ul>
                    </div>
                    <div className="trending-buttone">
                        <button className="trending-buttonE">View More</button>
                    </div>
                </div>
                <div className="trendingArticlesMain">
                    <h1 className="trendingArticles">Wishlist</h1>
                    <div className="trendingarticles">
                        <ul className="trendingArticlesul">
                            <li className="trendingArticlesli"><img src={abracadabra} alt="articles" /></li>
                            <li className="trendingArticlesli"><img src={bioFarming} alt="articles" /></li>
                            <li className="trendingArticlesli"><img src={wineTasting} alt="articles" /></li>
                            <li className="trendingArticlesli"><img src={sfmomA} alt="articles" /></li>
                        </ul>
                    </div>
                    <div className="trending-buttona">
                        <button className="trending-buttonA">View More</button>
                    </div>
                </div>
                <div className="trendingCreativesMain">
                    <h1 className="trendingCreatives">Upcoming Events</h1>
                    <div className="trendingcreatives">
                        <ul className="trendingCreativesul">
                            <li className="trendingCreativesli"><img src={rumors} alt="creatives" /></li>
                            <li className="trendingCreativesli"><img src={yosemite} alt="creatives" /></li>
                            <li className="trendingCreativesli"><img src={afterBurn} alt="creatives" /></li>
                            <li className="trendingCreativesli"><img src={yogaClass} alt="creatives" /></li>
                        </ul>
                    </div>
                    <div className="trending-buttonc">
                        <button className="trending-buttonC">View More</button>
                    </div>
                </div>
                <div className="trendingCreativesMain">
                    <h1 className="trendingCreatives">Past Events</h1>
                    <div className="trendingcreatives">
                        <ul className="trendingCreativesul">
                            <li className="trendingCreativesli"><img src={veganPizza} alt="creatives" /></li>
                            <li className="trendingCreativesli"><img src={popUp} alt="creatives" /></li>
                            <li className="trendingCreativesli"><img src={makePlant} alt="creatives" /></li>
                            <li className="trendingCreativesli"><img src={siteSeeing} alt="creatives" /></li>
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