import React, { Component } from 'react';
import Suggestions from '../components/Suggestion/Suggestion'
import axios from '../helper/APIConfig';



class SuggestionsPage extends Component {
    state = {
    }

    render() {

        return (
            <Suggestions />
        );
    }
}

export default SuggestionsPage;