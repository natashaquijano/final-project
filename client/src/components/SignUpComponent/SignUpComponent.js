import React, { Component } from 'react';
import axios from '../../helper/APIConfig';
import './SignUpComponent.scss';
class SignUpComponent extends Component {
    state = {}
    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        axios.post("/users/register", this.state)
            .then((res) => {
                window.localStorage.setItem('token', res.data.token)
                this.props.history.push("/")
            })
            .catch((e) => {
                console.log(e.message)
            })

    }
    render() {
        const { firstName, lastName, password, username, email } = this.state;
        return (
            <div className="signupform">

                <form className="signup">
                    <h1 className="upexplore">Sign Up & Explore</h1>
                    <p className="fillin">Please fill in this form to create an account</p>

                    <input type="text" value={firstName || ""} onChange={this.handleInputChange} placeholder="First Name" name="firstName" className="fillinf" />

                    <input type="text" value={lastName || ""} onChange={this.handleInputChange} placeholder="Last Name" name="lastName" className="fillinf" />

                    <input type="text" value={username || ""} onChange={this.handleInputChange} placeholder="Username" name="username" className="fillinf" />

                    <input type="text" value={email || ""} onChange={this.handleInputChange} placeholder="Email" name="email" className="fillinf" />


                    <input type="password" value={password || ""} onChange={this.handleInputChange} placeholder="Enter Password" name="password" className="fillinf" />


                    <div className="upbtn">
                        <button disabled={!(firstName && lastName && email && password)} onClick={this.handleSubmit} className="signupbtn">Sign Up</button>

                    </div>

                    <p className="terms">By creating an account you agree <br /> to our <strong className="terms-privacy">Terms &
                    Privacy</strong>.</p>
                    <p className="ifnot">Forgot your password?</p>


                </form>
            </div>
        );
    }
}

export default SignUpComponent;