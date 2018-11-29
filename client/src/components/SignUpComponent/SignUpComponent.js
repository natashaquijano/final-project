import React, { Component } from 'react';
import './SignUpComponent.scss';
class SignUpComponent extends Component {
    render() {
        return (
            <div className="signupform">

                <form className="signup">
                    <h1 className="upexplore">Sign Up & Explore</h1>
                    <p className="fillin">Please fill in this form to create an account</p>

                    <input type="text" placeholder="First Name" name="firstname" className="fillinf" />

                    <input type="text" placeholder="Last Name" name="lastname" className="fillinf" />

                    <input type="text" placeholder="Username" name="username" className="fillinf" />

                    <input type="text" placeholder="Email" name="email" className="fillinf" />


                    <input type="password" placeholder="Enter Password" name="psw" className="fillinf" />


                    <input type="password" placeholder="Repeat Password" name="psw-repeat" className="fillinf" />

                    <div className="upbtn">
                        <button type="submit" className="signupbtn">Sign Up</button>

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