import React, { Component } from 'react';
import NavBar from '../components/NavBar/NavBar';
import Suggestions from '../components/Suggestion/Suggestion'



class SuggestionsPage extends Component {
    state = {
    }

    render() {

        return (
            <div><NavBar history={this.props.history} />
                <div className="all-container">
                    <div className="body-container ">
                        <Suggestions />
                    </div>
                </div>
            </div>

        );
    }
}

export default SuggestionsPage;