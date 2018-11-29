import React, { Component } from 'react';
import SignInComponent from '../components/SignInComponent/SignInComponent';
class SignIn extends Component {
    render() {
        return (
            <div className="all-container">
                <div className="body-container">
                    <SignInComponent />
                </div>
            </div>
        );
    }
}

export default SignIn;