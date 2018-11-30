import React, { Component } from 'react';
import './TrendingEvents.scss';

// import PlantSale from '../../images/Events/plant-sale.png';
// import Afterburn from '../../images/Events/afterburn.png';
// import SatPhoto from '../../images/Events/sat-photo.png';
// import AllDay from '../../images/Events/allday.png';
// import Mixology from '../../images/Events/mixology.png';
// import Food from '../../images/Events/foodf.png';
// import BobMoses from '../../images/Events/bob-moses.png';
// import Museum from '../../images/Events/ museum.png';
// import PaintNight from '../../images/Events/paint-night.png';
// import YogaClass from '../../images/Events/yoga-class.png';


import CarouselEvents from '../CarouselEvents/CarouselEvents';
class TrendingEvents extends Component {
    render() {
        return (
            <div className="trendingEvents">
                <h1>Events</h1>
                <CarouselEvents />
            </div>
        );
    }
}

export default TrendingEvents;