import React, { Component } from 'react';
import './TrendingArticles.scss';

import BodyPaint from '../../images/Articles/body-paint.png';
import BurningMan from '../../images/Articles/burning-man.png';
import Meditation from '../../images/Articles/meditation.png';
import Katerblau from '../../images/Articles/katerblau.png';
import Polaroid from '../../images/Articles/polaroid.png';
import SoundHealing from '../../images/Articles/sound-healing.png';
import Plants from '../../images/Articles/plants.png';
import AmelieLens from '../../images/Articles/amelie-lens.png';
import Museums from '../../images/Articles/museums.png';
import VeggieBurger from '../../images/Articles/veggie-burger.png';
class TrendingArticles extends Component {
    render() {
        return (
            <div className="trendingArticles">
                <h1>Articles</h1>
                <div className="articles-content">
                    <div>
                        <img className="bodypaint trendings" src={BodyPaint} alt="bodypaint" />
                        <p>The Rise Of Body Paint</p>
                    </div>
                    <div>
                        <img className="burningman trendings" src={BurningMan} alt="burningman" />
                        <p>Ten Things About Black Rock City</p>
                    </div>
                    <div>
                        <img className="meditation trendings" src={Meditation} alt="meditation" />
                        <p>The Art Of Meditation</p>
                    </div>
                    <div>
                        <img className="katerblau trendings" src={Katerblau} alt="katerblau" />
                        <p>Katerblau & It's History</p>
                    </div>
                    <div>
                        <img className="polaroid trendings" src={Polaroid} alt="polaroid" />
                        <p>Best Uses For Your Polaroid</p>
                    </div>
                    <div>
                        <img className="soundhealing trendings" src={SoundHealing} alt="soundhealing" />
                        <p>Sound Healing Benefits</p>
                    </div>
                    <div>
                        <img className="plants trendings" src={Plants} alt="plants" />
                        <p>Keep Your Plants Happy</p>
                    </div>
                    <div>
                        <img className="amelielens trendings" src={AmelieLens} alt="amelielens" />
                        <p>Best Female DJ's Of 2018</p>
                    </div>
                    <div>
                        <img className="museums trendings" src={Museums} alt="museums" />
                        <p>World's Tendiest Museums</p>
                    </div>
                    <div>
                        <img className="veggieburger trendings" src={VeggieBurger} alt="veggieburger" />
                        <p>The Best Veggie Burgers</p>
                    </div>
                </div>
            </div >
        );
    }
}

export default TrendingArticles;