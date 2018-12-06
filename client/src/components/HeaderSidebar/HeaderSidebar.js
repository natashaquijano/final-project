import React, { Component } from 'react';
import './HeaderSidebar.scss';


import Likes from '../../components/Likes/Likes';
import Wishlist from '../../components/Wishlist/Wishlist';
import axios from '../../helper/APIConfig';

class HeaderSidebar extends Component {
    state = {
        likes: [],
        wishlist: []
    }

    componentDidMount() {
        axios.get("/users/current", { headers: { Authorization: window.localStorage.getItem("token") } })
            .then((response) => {
                console.log(response.data)
                this.setState({
                    likes: response.data.user.likes,
                    wishlist: response.data.user.wishlist,
                })
            })
            .catch((error) => {
                console.log(error.message)
            })

    }
    render() {
        console.log(this.state.likes, this.state.wishlist)
        return (
            <div className="header-sidebar">
                <Likes likes={this.state.likes} />
                <Wishlist wishlist={this.state.wishlist} />
            </div>
        );
    }
}

export default HeaderSidebar;