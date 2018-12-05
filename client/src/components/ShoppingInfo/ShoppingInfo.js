import React, { Component } from 'react';
import StripeCheckout from '../Payment/Payment'
import BobMoses from '../../images/Event/event-bobmoses.png'
import './ShoppingInfo.scss';




class ShoppingInfo extends Component {
    render() {
        return (
            <div className="ShoppingInfo">

                <h1>Your Cart</h1>
                <h1>Item Title</h1>
                <ul>
                    <li className="trendingCreativesli"><img className="image" src={BobMoses} alt="creatives" /></li>
                </ul>

                <ul>
                    <li className="trendingCreativesli"><img className="image" src={BobMoses} alt="creatives" /></li>
                </ul>
                <p>Name of the product</p>
                <p>Amount $$</p>
                <strong>Total</strong>
                <strong>Amount $$$</strong>
                <StripeCheckout history={this.props.history} />
            </div >

        );
    }
}

export default ShoppingInfo;