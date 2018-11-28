import React, { Component } from 'react';
import './Header.scss';

import HeaderVideo from '../../components/HeaderVideo/HeaderVideo';
import HeaderSidebar from '../../components/HeaderSidebar/HeaderSidebar';

class Header extends Component {
    render() {
        return (
            <div className="wrapper">
                <div>
                    <HeaderVideo />
                </div>
                <div>
                    <HeaderSidebar />
                </div>
            </div >

        );
    }
}

export default Header;