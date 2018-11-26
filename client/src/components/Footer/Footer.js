import React, { Component } from 'react';
import './Footer.scss';


class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                {/* <div className="footer-logo-title">
                    <div className="footer-logo">
                        <img className="logoWhite" src={LogoWhite} alt="logo" />
                    </div>
                    <div className="footer-title">
                        <h1 className="rouse-footer-title">Rouse</h1>
                    </div>
                </div> */}
                <div className="footer-newsletter">
                    <div className="newsletter-title">
                        <h1>Sign Up To Our Newsletter</h1>
                    </div>
                    <div className="newsletter-form">
                        <input type="newsletter" placeholder="Email" name="email" className="footer-bar" />
                        <input type="submit" placeholder="Submit" name="button-name" className="button-footer" />
                    </div>
                </div>
                <div className="footer-social">
                    <div className="social-title">
                        <h1>Social</h1>
                    </div>
                    <div className="social-icons">
                        <ul>
                            <li>Instagram</li>
                            <li>Facebook</li>
                            <li>Twitter</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-contact">
                    <div className="contact-title">
                        <h1>Contact</h1>
                    </div>
                    <div>
                        <ul>
                            <li className="contact-info">help@rouse.com</li>
                            <li className="contact-info">San Francisco, CA</li>
                        </ul>
                    </div>
                </div>
            </div >
        );
    }
}

export default Footer;