import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Trending.scss';

import photography from '../../images/Articles/articles-arch-photography.png';
import burningMan from '../../images/Articles/articles-burning-man.png';
import sFMoma from '../../images/Articles/articles-sf-moma.png';
import soundHealing from '../../images/Articles/articles-soundhealing.png';

import ashleyLongshore from '../../images/Creatives/creatives-ashley-longshore.png';
import bedouin from '../../images/Creatives/creatives-bedouin.png';
import mitchGobel from '../../images/Creatives/creatives-mitch-gobel.png';
import peggyGou from '../../images/Creatives/creatives-peggy-gou.png';

import axios from '../../helper/APIConfig';
import Like from '../../images/icons/like.png';
import Add from '../../images/icons/add-01.png';


class Trending extends Component {
    add = (eventId) => {
        axios.post(`/products/event/${eventId}`, { add: true }, {
            headers: {
                Authorization: window.localStorage.getItem("token")
            }
        })
            .then((response) => {
                window.location.reload()
            })
            .catch((error) => {
                console.log(error)
            })
    }

    like = (eventId) => {
        axios.post(`/products/event/${eventId}`, { like: true }, {
            headers: {
                Authorization: window.localStorage.getItem("token")
            }
        })
            .then((response) => {
                window.location.reload()
            })
            .catch((error) => {
                console.log(error)
            })
    }

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
                                    console.log('ITEM', item)
                                    return (
                                        <li key={index} className="trendingEventsli"><Link to={{ pathname: `/eventpage/${item._id}`, state: { item } }}>
                                            <img src={item.image} alt="events" />
                                            <h1 className="events-title">{item.title}</h1>
                                        </Link>
                                            <img onClick={() => this.add(item._id)} className="followers followers-i likes add" src={Add} alt="add" />
                                            <img onClick={() => this.like(item._id)} className="followers followers-i likes" src={Like} alt="like" />
                                        </li>
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