import React, { Component } from 'react';
import Instagram from '../../images/icons/instagram.png';
import Facebook from '../../images/icons/facebook.png';
import Twitter from '../../images/icons/twitter.png';
import FooterLogo from '../../images/icons/logo-white.png';

import './Footer.scss';


class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                {/* <div class="footer-logo"> */}

                <img className="logo-footer" src={FooterLogo} alt="Instagram" />
                {/* </div> */}

                {/* <div className="footer-description"> */}
                <h2 className="footer-title">Rouse</h2>
                {/* </div> */}

                {/* <div className="footer-social">
                    <div className="social-title"> */}
                {/* <h1 className="social">Follow Us</h1> */}
                {/* </div> */}
                {/* <div className="social-icons"> */}
                <div className="div2">
                    <ul className="social-ul">
                        <li className="social-icons-footer instagram"><img className="instagram social-icons-footer" src={Instagram} alt="Instagram" /></li>
                        <li className="social-icons-footer facebook"><img className="facebook social-icons-footer" src={Facebook} alt="Facebook" /></li>
                        <li className="twitter social-icons-footer twitter"><img className="twitter social-icons-footer" src={Twitter} alt="Twitter" /></li>
                    </ul>
                    {/* </div> */}
                </div>
            </div >


        );
    }
}

export default Footer;