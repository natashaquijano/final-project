import React, { Component } from 'react';

import NavBar from '../components/NavBar/NavBar';
import ShoppingInfo from '../components/ShoppingInfo/ShoppingInfo';

class ShoppingCart extends Component {
    render() {
        return (
            <div><NavBar history={this.props.history} />
                <div className="all-container">
                    <div className="body-container ">
                        <ShoppingInfo />
                    </div>
                </div>
            </div>
        );
    }
}

export default ShoppingCart;