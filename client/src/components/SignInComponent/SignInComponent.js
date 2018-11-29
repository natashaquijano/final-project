import React, { Component } from 'react';
import '../SignUpComponent/SignUpComponent';

class SignInComponent extends Component {
    render() {
        return (
            <div className="signupform">

                <form className="signup">
                    <h1 className="upexplore">Sign Up & Explore</h1>
                    <p className="fillin">Please fill in this form to create an account</p>

                    <input type="text" placeholder="Username" name="username" className="fillinf" />

                    <input type="password" placeholder="Enter Password" name="psw" className="fillinf" />

                    <div className="upbtn">
                        <button type="submit" className="signupbtn">Sign Up</button>

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