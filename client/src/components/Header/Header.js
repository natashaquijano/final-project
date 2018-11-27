import React, { Component } from 'react';
import './Header.scss';

import MainVideo from '../MainVideo/MainVideo';
import HeaderSidebar from '../../components/HeaderSidebar/HeaderSidebar';

class Header extends Component {
    render() {
        return (
            <div className="wrapper">
                <MainVideo />
                <div>
                    <HeaderSidebar />
                </div>
            </div >

        );
    }
}

export default Header;