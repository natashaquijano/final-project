import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './SuccessInfo.scss';
import Logo from '../../images/icons/logo.png';


class SuccessInfo extends Component {
    render() {
        return (
            <div className="SuccessInfo">
                <div className="logo-purchase-main">
                    <img className="logo logo-purchase" src={Logo} alt="logo" />
                </div>
                <h1 className="thank-you"> Thank you for your order!</h1>
                <p className="lead">
                    A confirmation of your purchase has been send to your email.
                          </p>

                <p className="lead lead1">You can also go into your profile to view your recent purchases.</p>

                <div className="go-back-success">
                    <Link to="/" className="go-back-success">Main Menu</Link>

                </div >

            </div >
        );
    }
}

export default SuccessInfo;