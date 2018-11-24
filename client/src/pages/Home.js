import React, { Component } from 'react';
import Slideshow from '../components/slideshow/Slideshow';
import NavBar from '../components/NavBar/NavBar';

class Home extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Slideshow />
            </div>
        );
    }
}

export default Home;