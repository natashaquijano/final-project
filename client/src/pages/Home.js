import React, { Component } from 'react';
import Header from '../components/Header/Header';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';

class Home extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Header />
                <Footer />
            </div>
        );
    }
}

export default Home;