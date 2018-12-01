import React, { Component } from 'react';

import SignUpComponent from '../components/SignUpComponent/SignUpComponent';


class SignUp extends Component {
    render() {
        return (
            <div className="all-container">
                <div className="body-container">
                    <SignUpComponent />
                </div>
            </div>
        );
    }
}

export default SignUp;