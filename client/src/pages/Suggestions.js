import React, { Component } from 'react';
import NavBar from '../components/NavBar/NavBar';
import axios from '../helper/APIConfig'
import HeaderProfile from '../components/HeaderProfile/HeaderProfile';
import Suggestions from '../components/Suggestion/Suggestion'




class SuggestionsPage extends Component {
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

        axios.get("/products")
            .then((response) => {
                const { products } = response.data;
                console.log(products)

                this.setState({
                    eventItems: products
                })


            })
            .catch(() => {

            })


    }
    render() {
        const { user, eventItems } = this.state
        return (
            <div><NavBar history={this.props.history} />
                <div className="all-container">
                    <div className="body-container ">
                        {user && eventItems && <div> <HeaderProfile user={user} />
                            <Suggestions eventItems={eventItems} /></div>
                        }
                    </div>
                </div>
            </div>

        );
    }
}

export default SuggestionsPage;