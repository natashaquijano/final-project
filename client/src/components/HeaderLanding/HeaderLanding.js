import React, { Component } from 'react';
import './HeaderLanding.scss';

import HeaderLandingVideo from '../../components/HeaderLandingVideo/HeaderLandingVideo';

class HeaderLanding extends Component {
    render() {
        return (
            <div className="wrapper">
                <div>
                    <HeaderLandingVideo />
                </div>
            </div >

        );
    }
}

export default HeaderLanding;