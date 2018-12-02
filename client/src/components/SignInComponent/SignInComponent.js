import React, { Component } from 'react';
import '../SignUpComponent/SignUpComponent';

import axios from '../../helper/APIConfig';

class SignInComponent extends Component {
    state = {}
    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    handleSubmit = (e) => {
        e.preventDefault()
        axios.post("/users/login", this.state)
            .then((res) => {
                window.localStorage.setItem('token', res.data.token)
                this.props.history.push("/")
            })
            .catch((e) => {
                console.log(e.message)
            })

    }

    render() {
        const { username, password } = this.state;
        return (
            <div className="signupform">

                <form className="signup">
                    <h1 className="upexplore">Sign In & Explore</h1>
                    <p className="fillin">Please fill in this form to create an account</p>

                    <input type="text" value={username || ""} onChange={this.handleInputChange} placeholder="Username" name="username" className="fillinf" />

                    <input type="password" value={password || ""} onChange={this.handleInputChange} placeholder="Enter Password" name="password" className="fillinf" />

                    <div className="upbtn">
                        <button disabled={!(username && password)} onClick={this.handleSubmit} className="signupbtn">Sign In</button>

                    </div>

                    <p className="terms">By creating an account you agree <br /> to our <strong className="terms-privacy">Terms &
                    Privacy</strong>.</p>
                    <p className="ifnot">Already a member? Sign in</p>


                </form>
            </div>
        );
    }
}

export default SignInComponent;