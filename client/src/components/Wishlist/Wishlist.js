import React, { Component } from 'react';
import './Wishlist.scss';
import Rumors from '../../images/Wishlist/rumors-event.png';
import PopUp from '../../images/Wishlist/popup-event.png';
import Yoga from '../../images/Wishlist/yoga-event.png';
import Like from '../../images/icons/like.png';
import Comment from '../../images/icons/comment.png';


class Wishlist extends Component {
    render() {
        return (
            <div className="Wishlist">
                <div className="title-follow-view">
                    <div className="title-follow">
                        <p className="title-follow">Whislist</p>
                    </div>
                    <div className="title-view title-view-2">
                        <p>View All</p>
                    </div>
                </div>
                <div className="follow-list">
                    <div className="name-button">
                        <div className="follow-name">
                            <p className="one">Rumors Art Basel</p>
                            <img className="first" src={Rumors} alt="natalie" />
                            <div className="button-follow1">
                                <img className="followers followers-i likes" src={Like} alt="like" /><p className="followers followers-p">8649</p>
                                <img className="followings followings-i" src={Comment} alt="comment" /><p className="followings followings-p">321</p>
                            </div>
                        </div>
                    </div>

                    <div className="name-button">
                        <div className="follow-name2">
                            <p className="two">Yivamukti Yoga</p>
                            <img className="second" src={Yoga} alt="bradley" />

                            <div className="button-follow2">
                                <img className="followers followers-i likes" src={Like} alt="like" /><p className="followers followers-p">8649</p>
                                <img className="followings followings-i" src={Comment} alt="comment" /><p className="followings followings-p">321</p>
                            </div>
                        </div>
                    </div>

                    <div className="name-button">
                        <div className="follow-name3">
                            <p className="three">Pop Up Sundays</p>
                            <img className="third" src={PopUp} alt="andrea" />
                            <div className="button-follow3">
                                <img className="followers followers-i likes" src={Like} alt="like" /><p className="followers followers-p">8649</p>
                                <img className="followings followings-i" src={Comment} alt="comment" /><p className="followings followings-p">321</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

        );
    }
}

export default Wishlist;