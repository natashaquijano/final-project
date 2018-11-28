import React, { Component } from 'react';
import Instagram from '../../images/icons/instagram.png';
import Facebook from '../../images/icons/facebook.png';
import Twitter from '../../images/icons/twitter.png';

import './Footer.scss';


class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <div className="footer-newsletter">
                    <div className="newsletter-title">
                        <h1 className="Footer">Sign Up To Our Newsletter</h1>
                    </div>
                    <div className="newsletter-form">
                        <input type="newsletter" placeholder="Email" name="email" className="footer-bar Footer" />
                        <input type="submit" placeholder="Submit" name="button-name" className="button-footer" />
                    </div>
                </div>
                <div className="footer-social">
                    <div className="social-title">
                        <h1 className="Footer">Social</h1>
                    </div>
                    <div className="social-icons">
                        <ul className="social-li">
                            <li className="social-icons-footer instagram"><img className="instagram social-icons-footer" src={Instagram} alt="Instagram" /></li>
                            <li className="social-icons-footer facebook"><img className="facebook social-icons-footer" src={Facebook} alt="Facebook" /></li>
                            <li className="twitter social-icons-footer twitter"><img className="twitter social-icons-footer" src={Twitter} alt="Twitter" /></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-contact">
                    <div className="contact-title">
                        <h1 className="Footer">Contact</h1>
                    </div>
                    <div>
                        <ul className="contact-li">
                            <li className="contact-info Footer">help@rouse.com</li>
                            <li className="contact-info Footer">San Francisco, CA</li>
                        </ul>
                    </div>
                </div>
            </div >
        );
    }
}

export default Footer;