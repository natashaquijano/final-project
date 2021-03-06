import React, { Component } from 'react';
import './Likes.scss';
import Like from '../../images/icons/like.png';


class Likes extends Component {
    render() {
        const { likes } = this.props
        return (
            <div className="Likes">
                <ul className="title-follow-view">
                    <li className="title-follow">Likes</li>
                    <li className="title-view3">View All</li>
                </ul>
                <div className="follow-list">
                    {
                        likes.slice(1).slice(-3).map((like, index) => {
                            return (
                                <div className="name-button" key={index}>
                                    <div className="follow-name">
                                        <p className="one">{like.title}</p>
                                        <img className="first" src={like.image} height="50px" width="75px" alt="nothing" />
                                        <div className="button-follow1">
                                            <img className="followers followers-i likes" src={Like} alt="like" /><p className="followers followers-p">{like.likes.length}</p>

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

export default Likes;