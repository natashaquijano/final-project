import React, { Component } from 'react';
import './Wishlist.scss';
import Like from '../../images/icons/like.png';
import Comment from '../../images/icons/comment.png';


class Wishlist extends Component {
    render() {
        const { wishlist } = this.props
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
                    {
                        wishlist.slice(1).slice(-3).map((wish, index) => {
                            return (
                                <div className="name-button" key={index}>
                                    <div className="follow-name">
                                        <p className="one">{wish.title}</p>
                                        <img className="first" src={wish.image} alt="nothing" />
                                        <div className="button-follow1">
                                            <img className="followers followers-i likes" src={Like} alt="like" /><p className="followers followers-p">{wish.likes.length}</p>
                                            <img className="followings followings-i" src={Comment} alt="comment" /><p className="followings followings-p">321</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div >

        );
    }
}

export default Wishlist;