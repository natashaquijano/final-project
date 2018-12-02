import React, { Component } from 'react';
import './HeaderProfile.scss';

import Following from '../../components/Following/Following';
import HeaderProfileInfo from '../HeaderProfileInfo/HeaderProfileInfo';

class HeaderProfile extends Component {
    render() {
        return (
            <div className="wrapper3">
                <div>
                    <HeaderProfileInfo />
                </div>
                <div>
                    <Following />
                </div>
            </div >

        );
    }
}

export default HeaderProfile;