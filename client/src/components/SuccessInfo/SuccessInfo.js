import React, { Component } from 'react';
import './SuccessInfo.scss';



class SuccessInfo extends Component {
    render() {
        return (
            <div className="SuccessInfo">
                <h1> Thank you for your purchase!</h1>
                <p class="lead">
                    A confirmation of your purchase has been send to your email.
                    You can also go into your profile to view your recent purchases.
    </p>
                <div className="go-back-success">
                    <button className="go-back-success">Main Menu</button>
                </div>
            </div >

        );
    }
}

export default SuccessInfo;