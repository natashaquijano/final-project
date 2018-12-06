import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Trending from '../components/Trending/Trending';
import NavBar from '../components/NavBar/NavBar';
import axios from '../helper/APIConfig';

class Home extends Component {
    state = {
        eventItems: [],
    }
    componentDidMount() {
        axios.get("/products")
            .then((response) => {
                const { products } = response.data;
                console.log(products)

                this.setState({
                    eventItems: products.slice(-4)
                })


            })
            .catch(() => {

            })
    }
    render() {
        const { eventItems } = this.state
        if (!eventItems.length) {
            return (<div>loading.......</div>)
        }
        return (
            <div>  <NavBar history={this.props.history} />
                <div className="all-container">
                    <div className="body-container">
                        <Header />
                        <Trending
                            eventItems={eventItems} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;