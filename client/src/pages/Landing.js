import React, { Component } from 'react';
import Carousel from '../components/Carousel/Carousel';
import Trending from '../components/Trending/Trending';
import HeaderLandingVideo from '../components/HeaderLandingVideo/HeaderLandingVideo';
import NavBar from '../components/NavBar/NavBar';
import axios from '../helper/APIConfig';

class Landing extends Component {
    state = {
        eventItems: [],
        articleItems: [],
        creativeItems: []
    }
    componentDidMount() {
        axios.get("/products")
            .then((response) => {
                const { products } = response.data;

                this.setState({
                    eventItems: products.filter((product) => product.productType === "Events"),
                    articleItems: products.filter((product) => product.productType === "Articles"),
                    creativeItems: products.filter((product) => product.productType === "Creatives")
                })


            })
            .catch(() => {

            })
    }
    render() {
        const { eventItems, articleItems, creativeItems } = this.state
        if (!eventItems.length) {
            return (<div>loading.......</div>)
        }
        return (
            <div><NavBar history={this.props.history} />
                <div className="all-container">
                    <div className="body-container ">
                        <HeaderLandingVideo />
                        <Trending />
                        <Carousel header="Events" items={eventItems} />
                        <Carousel header="Articles" items={articleItems} />
                        <Carousel header="Creatives" items={creativeItems} />

                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;