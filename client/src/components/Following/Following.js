import React, { Component } from 'react';
import './Following.scss';
import Followers from '../../images/icons/followers.png';
import Followings from '../../images/icons/following.png';



class Following extends Component {

    render() {
        const { following } = this.props;
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
                    {following.map((user, index) => {
                        return (<div key={index} className="name-button">
                            <div className="follow-name">
                                <p className="one">{user.firstName} {user.lastName}</p>
                                <img className="first" src={`http://${user.avatar.slice(2)}`} alt="nothing" />
                                <div className="button-follow1">
                                    <img className="followers followers-i" src={Followers} alt="followers" /><p className="followers followers-p">{user.followers.length}</p>
                                    <img className="followings followings-i" src={Followings} alt="followings" /><p className="followings followings-p">{user.following.length}</p>
                                </div>
                            </div>
                        </div>)
                    })}
                </div>
            </div >

        );
    }
}

export default Following;