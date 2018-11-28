import React, { Component } from 'react';
import './HeaderSidebar.scss';


import Following from '../../components/Following/Following';
import Wishlist from '../../components/Wishlist/Wishlist';

class HeaderSidebar extends Component {
    render() {
        return (
            <div className="header-sidebar">
                <Following />
                <Wishlist />
            </div>
        );
    }
}

export default HeaderSidebar;