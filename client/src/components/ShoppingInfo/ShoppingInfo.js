import React, { Component } from 'react';
import StripeCheckout from '../Payment/Payment'
import BobMoses from '../../images/Event/event-bobmoses.png'
import './ShoppingInfo.scss';




class ShoppingInfo extends Component {
    render() {
        return (
            <div className="ShoppingInfo">

                <h1 className="ShoppingInfo2">Your Cart</h1>
                <h1 className="ShoppingInfo3">Item Title</h1>
                <div className="main-purchase">
                    <div className="main-purchase2">
                        <ul>
                            <li className="trendingCreativesli"><img className="shoppingC-image" src={BobMoses} alt="creatives" /></li>
                        </ul>
                    </div>
                    <div className="main-purchase3">
                        <h1 className="ShoppingInfo4">Bob Moses Concert</h1>
                        <p className="ShoppingInfo5">Amount $50</p>
                        <p className="ShoppingInfo5">Total $50</p>
                        <StripeCheckout history={this.props.history} className="StripeCheckout1" />
                    </div>
                </div>
            </div >

        );
    }
}

export default ShoppingInfo;