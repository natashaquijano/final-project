import React, { Component } from 'react';

import SignUpComponent from '../components/SignUpComponent/SignUpComponent';
import NavBar from '../components/NavBar/NavBar';

class SignUp extends Component {
    render() {
        console.log(this.props)
        return (
            <div> <NavBar history={this.props.history} />
                <div className="all-container">
                    <div className="body-container">
                        <SignUpComponent history={this.props.history} />
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;