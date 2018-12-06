import React, { Component } from 'react';

import Event from '../components/Event/Event.js'

import NavBar from '../components/NavBar/NavBar';

class EventPage extends Component {
    state = {
    }

    render() {
        return (
            <div><NavBar history={this.props.history} />
                <div className="all-container">
                    <div className="body-container ">
                        <Event location={this.props.location} />
                    </div>
                </div>
            </div>
        );
    }
}

export default EventPage;