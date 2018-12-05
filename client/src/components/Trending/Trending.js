import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Trending.scss';

// import paintNight from '../../images/Events/events-paintnight.png';
// import plantSale from '../../images/Events/events-plant-sale.png';
// import bobMoses from '../../images/Events/events-bobmoses.png'
// import sfMoma from '../../images/Events/events-sfmoma.png';

import photography from '../../images/Articles/articles-arch-photography.png';
import burningMan from '../../images/Articles/articles-burning-man.png';
import sFMoma from '../../images/Articles/articles-sf-moma.png';
import soundHealing from '../../images/Articles/articles-soundhealing.png';

import ashleyLongshore from '../../images/Creatives/creatives-ashley-longshore.png';
import bedouin from '../../images/Creatives/creatives-bedouin.png';
import mitchGobel from '../../images/Creatives/creatives-mitch-gobel.png';
import peggyGou from '../../images/Creatives/creatives-peggy-gou.png';


class Trending extends Component {
    render() {
        const { eventItems } = this.props
        return (
            <div>
                <h1 className="trending">Trending</h1>

                <div className="trendingEventsMain">
                    <h1 className="trendingEvents">Events</h1>
                    <div className="trendingevents">
                        <ul className="trendingEventsul">
                            {
                                eventItems.map((item, index) => {
                                    return (
                                        <li key={index} className="trendingEventsli"><Link to={{ pathname: "/eventpage", state: { item } }}><img src={item.image} alt="events" /></Link></li>
                                    )
                                })
                            }
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
                            <li className="trendingArticlesli"><img src={photography} alt="articles" /></li>
                            <li className="trendingArticlesli"><img src={burningMan} alt="articles" /></li>
                            <li className="trendingArticlesli"><img src={sFMoma} alt="articles" /></li>
                            <li className="trendingArticlesli"><img src={soundHealing} alt="articles" /></li>
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
                            <li className="trendingCreativesli"><img src={ashleyLongshore} alt="creatives" /></li>
                            <li className="trendingCreativesli"><img src={bedouin} alt="creatives" /></li>
                            <li className="trendingCreativesli"><img src={mitchGobel} alt="creatives" /></li>
                            <li className="trendingCreativesli"><img src={peggyGou} alt="creatives" /></li>
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

export default Trending;