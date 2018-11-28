import React, { Component } from 'react';
import './Following.scss';

import Bradley from '../../images/Following/bradleythomas.png';
import Andrea from '../../images/Following/andreageorge.png';
import Natalie from '../../images/Following/nataliefisher.png';
import Followers from '../../images/icons/followers.png';
import Followings from '../../images/icons/following.png';


class Following extends Component {
    render() {
        return (
            <div className="Following">
                <div className="title-follow-view">
                    <div className="title-follow">
                        <p className="title-follow">Following</p>
                    </div>
                    <div className="title-view">
                        <p className="title-follow">View All</p>
                    </div>
                </div>
                <div className="follow-list">
                    <div className="name-button">
                        <div className="follow-name">
                            <p className="one">Natalie Fisher</p>
                            <img className="first" src={Natalie} alt="natalie" />
                            <div className="button-follow1">
                                <img className="followers followers-i" src={Followers} alt="followers" /><p className="followers followers-p">8649</p>
                                <img className="followings followings-i" src={Followings} alt="followings" /><p className="followings followings-p">321</p>
                            </div>
                        </div>
                    </div>

                    <div className="name-button">
                        <div className="follow-name2">
                            <p className="two">Bradley Thomas</p>
                            <img className="second" src={Bradley} alt="bradley" />
                            <div className="button-follow2">
                                <img className="followers followers-i" src={Followers} alt="followers" /><p className="followers followers-p">56k</p>
                                <img className="followings followings-i" src={Followings} alt="followings" /><p className="followings followings-p">973</p>
                            </div>
                        </div>
                    </div>

                    <div className="name-button">
                        <div className="follow-name3">
                            <p className="three">Andrea George</p>
                            <img className="third" src={Andrea} alt="andrea" />
                            <div className="button-follow3">
                                <img className="followers followers-i" src={Followers} alt="followers" /><p className="followers followers-p">3419</p>
                                <img className="followings followings-i" src={Followings} alt="followings" /><p className="followings followings-p">159</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

        );
    }
}

export default Following;