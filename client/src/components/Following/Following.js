import React, { Component } from 'react';
import './Following.scss';

import Bradley from '../../images/Following/bradleythomas.png';
import Andrea from '../../images/Following/andreageorge.png';
import Natalie from '../../images/Following/nataliefisher.png';


class Following extends Component {
    render() {
        return (
            <div className="Following">
                <div className="title-follow-view">
                    <div className="title-follow">
                        <p>Following</p>
                    </div>
                    <div className="title-view">
                        <p>View All</p>
                    </div>
                </div>
                <div className="follow-list">
                    <div className="name-button">
                        <div className="follow-name">
                            <p className="one">Natalie Fisher</p>
                            <img className="first" src={Natalie} alt="natalie" />
                        </div>
                        <div className="button-follow1">

                        </div>
                    </div>

                    <div className="name-button">
                        <div className="follow-name2">
                            <p className="two">Bradley Thomas</p>
                            <img className="second" src={Bradley} alt="bradley" />
                        </div>
                        <div className="button-follow2">

                        </div>
                    </div>

                    <div className="name-button">
                        <div className="follow-name3">
                            <p className="three">Andrea George</p>
                            <img className="third" src={Andrea} alt="andrea" />
                        </div>
                        <div className="button-follow3">

                        </div>
                    </div>
                </div>
            </div >

        );
    }
}

export default Following;