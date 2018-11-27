import React, { Component } from 'react';
import './Wishlist.scss';
import Rumors from '../../images/Wishlist/rumors-event.png';
import PopUp from '../../images/Wishlist/popup-event.png';
import Yoga from '../../images/Wishlist/yoga-event.png';


class Wishlist extends Component {
    render() {
        return (
            <div className="Wishlist">
                <div className="title-follow-view">
                    <div className="title-follow">
                        <p>Whislist</p>
                    </div>
                    <div className="title-view">
                        <p>View All</p>
                    </div>
                </div>
                <div className="follow-list">
                    <div className="name-button">
                        <div className="follow-name">
                            <p className="one">Rumors Art Basel</p>
                            <img className="first" src={Rumors} alt="natalie" />
                        </div>
                        <div className="button-follow1">

                        </div>
                    </div>

                    <div className="name-button">
                        <div className="follow-name2">
                            <p className="two">Yivamukti & Sound Meditation</p>
                            <img className="second" src={Yoga} alt="bradley" />
                        </div>
                        <div className="button-follow2">

                        </div>
                    </div>

                    <div className="name-button">
                        <div className="follow-name3">
                            <p className="three">Pop Up Sundays</p>
                            <img className="third" src={PopUp} alt="andrea" />
                        </div>
                        <div className="button-follow3">

                        </div>
                    </div>
                </div>
            </div >

        );
    }
}

export default Wishlist;