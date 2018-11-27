import React, { Component } from 'react';
import './TrendingEvents.scss';

import PlantSale from '../../images/Events/plant-sale.png';
import Afterburn from '../../images/Events/afterburn.png';
import SatPhoto from '../../images/Events/sat-photo.png';
import AllDay from '../../images/Events/allday.png';
import Mixology from '../../images/Events/mixology.png';
import Food from '../../images/Events/foodf.png';
import BobMoses from '../../images/Events/bob-moses.png';
import Museum from '../../images/Events/ museum.png';
import PaintNight from '../../images/Events/paint-night.png';
import YogaClass from '../../images/Events/yoga-class.png';
class TrendingEvents extends Component {
    render() {
        return (
            <div className="trendingEvents">
                <h1>Events</h1>
                <div className="events-content">
                    <div>
                        <img className="plantsale trendings" src={PlantSale} alt="plantsale" />
                        <p>Plant Sale</p>
                    </div>
                    <div>
                        <img className="afterburn trendings" src={Afterburn} alt="afterburn" />
                        <p>Afterburn</p>
                    </div>
                    <div>
                        <img className="satphoto trendings" src={SatPhoto} alt="satphoto" />
                        <p>Saturdays & Photo</p>
                    </div>
                    <div>
                        <img className="allday trendings" src={AllDay} alt="allday" />
                        <p>All Day I dream</p>
                    </div>
                    <div>
                        <img className="mixology trendings" src={Mixology} alt="mixology" />
                        <p>Mixology</p>
                    </div>
                    <div>
                        <img className="foodf trendings" src={Food} alt="foodf" />
                        <p>Vegan Food Fest</p>
                    </div>
                    <div>
                        <img className="bobmoses trendings" src={BobMoses} alt="bobmoses" />
                        <p>Bob Moses</p>
                    </div>
                    <div>
                        <img className="museum trendings" src={Museum} alt="museum" />
                        <p>Night At The MOMA</p>
                    </div>
                    <div>
                        <img className="paintnight trendings" src={PaintNight} alt="paintnight" />
                        <p>Paint Night At The Mission</p>
                    </div>
                    <div>
                        <img className="yogaclass trendings" src={YogaClass} alt="yogaclass" />
                        <p>Evening Yoga Class</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default TrendingEvents;