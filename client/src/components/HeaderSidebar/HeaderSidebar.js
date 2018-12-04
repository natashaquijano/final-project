import React, { Component } from 'react';
import './HeaderSidebar.scss';


import Following from '../../components/Following/Following';
import Wishlist from '../../components/Wishlist/Wishlist';
import axios from '../../helper/APIConfig';

class HeaderSidebar extends Component {
    state = {
        following: [],
        wishlist: []
    }

    componentDidMount() {
        axios.get("/users/current", { headers: { Authorization: window.localStorage.getItem("token") } })
            .then((response) => {
                console.log(response.data)
                this.setState({
                    following: response.data.user.following,
                    wishlist: response.data.user.whishlist,
                })
            })
            .catch((error) => {
                console.log(error.message)
            })

    }
    render() {
        return (
            <div className="header-sidebar">
                <Following following={this.state.following} />
                <Wishlist wishlist={this.state.wishlist} />
            </div>
        );
    }
}

export default HeaderSidebar;