import React, { Component } from 'react';
import HeaderProfile from '../components/HeaderProfile/HeaderProfile';
import WishlistProfile from '../components/WishlistProfile/WishlistProfile';
import axios from '../helper/APIConfig'

import NavBar from '../components/NavBar/NavBar';

class Profile extends Component {
    state = {}
    componentDidMount() {
        axios.get("/users/current", { headers: { Authorization: window.localStorage.getItem("token") } })
            .then((response) => {
                console.log(response.data)
                this.setState({
                    user: response.data.user
                })
            })
            .catch((error) => {
                console.log(error.message)
            })

    }

    render() {
        const { user } = this.state
        return (
            <div><NavBar history={this.props.history} />
                <div className="all-container">
                    <div className="body-container ">
                        {user && <div>
                            <HeaderProfile user={user} />
                            <WishlistProfile user={user} />
                        </div>}
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;