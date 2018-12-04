import React, { Component } from 'react';
import NavBar from '../components/NavBar/NavBar';
import axios from '../helper/APIConfig';

class Home extends Component {
    state = {
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

        return (
            <div>  <NavBar history={this.props.history} />
                <div className="all-container">
                    <div className="body-container">

                    </div>
                </div>
            </div>
        );
    }
}

export default Home;