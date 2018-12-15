import React, { Component } from 'react';
//import './Wishlist.scss';



class Wishlist extends Component {
    render() {
        const { wishlist } = this.props
        return (
            <div className="Wishlist">
                <ul className="title-follow-view">
                    <li className="title-follow">Wishlist</li>
                    <li className="title-view3">View All</li>

                </ul>
                <div className="follow-list">
                    {
                        wishlist && wishlist.slice(1).slice(-3).map((wish, index) => {
                            return (
                                <div className="name-button" key={index}>
                                    <div className="follow-name">
                                        <p className="one">{wish.title}</p>
                                        <img height="50px" width="75px" className="first" src={wish.image} alt="nothing" />
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