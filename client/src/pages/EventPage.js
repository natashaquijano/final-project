import React, { Component } from 'react';
import Event from '../components/Event/Event.js'
import axios from '../helper/APIConfig';



class EventPage extends Component {
    state = {
    }

    render() {

        return (
            <Event />
        );
    }
}

export default EventPage;