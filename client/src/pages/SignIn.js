import React, { Component } from 'react';
import SignInComponent from '../components/SignInComponent/SignInComponent';

import NavBar from '../components/NavBar/NavBar';
class SignIn extends Component {
    render() {
        return (
            <div><NavBar history={this.props.history} />
                <div className="all-container">
                    <div className="body-container">
                        <SignInComponent history={this.props.history} />
                    </div>
                </div>
            </div>
        );
    }
}

export default SignIn;