import React, { Component } from 'react';
import Event from '../components/Event/Event.js'
// import axios from '../helper/APIConfig';



class EventPage extends Component {
    state = {
    }

    render() {
        return (
            <div className="all-container">
                <div className="body-container ">
                    <Event location={this.props.location} />
                </div>
            </div>
        );
    }
}

export default EventPage;