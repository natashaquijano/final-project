import React, { Component } from 'react';

import NavBar from '../components/NavBar/NavBar';

class Event extends Component {
    render() {
        return (
            <div><NavBar history={this.props.history} />
                <div className="all-container">
                    <div className="body-container ">
                    </div>
                </div>
            </div>
        );
    }
}

export default Event;