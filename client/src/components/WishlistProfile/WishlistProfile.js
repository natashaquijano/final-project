import React, { Component } from 'react';
import Rumors from '../../images/Wishlist/rumors-event.png';
import PopUp from '../../images/Wishlist/popup-event.png';
import Yoga from '../../images/Wishlist/yoga-event.png';

import './WishlistProfile.scss';

class WishlistProfile extends Component {
    render() {
        return (
            <div>
                <div className="wish-title-view">
                    <div className="wishlistp-title">
                        <h1 className="wishlistp-title">Likes</h1>
                    </div>
                    <div className="wishlist-viewall">
                        <p className="wishlist-viewall">View All</p>
                    </div>
                </div>
                <div className="wishlist-profile-images">
                    <img className="wishlist-profile-images-1" src={Rumors} alt="followers" /><p className="followers followers-p"></p>
                    <img className="wishlist-profile-images-1" src={PopUp} alt="followers" /><p className="followers followers-p"></p>
                    <img className="wishlist-profile-images-1" src={Yoga} alt="followers" /><p className="followers followers-p"></p>
                    {/* <img className="wishlist-profile-images-1" src={Followers} alt="followers" /><p className="followers followers-p"></p> */}
                </div>
                <div className="wish-title-view">
                    <div className="wishlistp-title">
                        <h1 className="wishlistp-title">Wishlist</h1>
                    </div>
                    <div className="wishlist-viewall">
                        <p className="wishlist-viewall">View All</p>
                    </div>
                </div>
                <div className="wishlist-profile-images">
                    <img className="wishlist-profile-images-1" src={Rumors} alt="followers" /><p className="followers followers-p"></p>
                    <img className="wishlist-profile-images-1" src={PopUp} alt="followers" /><p className="followers followers-p"></p>
                    <img className="wishlist-profile-images-1" src={Yoga} alt="followers" /><p className="followers followers-p"></p>
                    {/* <img className="wishlist-profile-images-1" src={Followers} alt="followers" /><p className="followers followers-p"></p> */}
                </div>
                <div className="wish-title-view">
                    <div className="wishlistp-title">
                        <h1 className="wishlistp-title">Upcoming Events</h1>
                    </div>
                    <div className="wishlist-viewall">
                        <p className="wishlist-viewall">View All</p>
                    </div>
                </div>
                <div className="wishlist-profile-images">
                    <img className="wishlist-profile-images-1" src={Rumors} alt="followers" /><p className="followers followers-p"></p>
                    <img className="wishlist-profile-images-1" src={PopUp} alt="followers" /><p className="followers followers-p"></p>
                    <img className="wishlist-profile-images-1" src={Yoga} alt="followers" /><p className="followers followers-p"></p>
                    {/* <img className="wishlist-profile-images-1" src={Followers} alt="followers" /><p className="followers followers-p"></p> */}
                </div>
                <div className="wish-title-view">
                    <div className="wishlistp-title">
                        <h1 className="wishlistp-title">Order History</h1>
                    </div>
                    <div className="wishlist-viewall">
                        <p className="wishlist-viewall">View All</p>
                    </div>
                </div>
                <div className="wishlist-profile-images bottom-images">
                    <img className="wishlist-profile-images-1" src={Rumors} alt="followers" /><p className="followers followers-p"></p>
                    <img className="wishlist-profile-images-1" src={PopUp} alt="followers" /><p className="followers followers-p"></p>
                    <img className="wishlist-profile-images-1" src={Yoga} alt="followers" /><p className="followers followers-p"></p>
                    {/* <img className="wishlist-profile-images-1" src={Followers} alt="followers" /><p className="followers followers-p"></p> */}
                </div>

            </div>
        );
    }
}

export default WishlistProfile;