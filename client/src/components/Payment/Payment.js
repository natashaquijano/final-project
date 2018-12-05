import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

export default class TakeMoney extends React.Component {
    onToken = (token) => {
        fetch('/save-stripe-token', {
            method: 'POST',
            body: JSON.stringify(token),
        }).then(response => {
            this.props.history.push("/success")
        });
    }
    // ...

    render() {
        return (
            // ...
            <StripeCheckout
                token={this.onToken}
                stripeKey="pk_test_oc9OZpML5uHJkcbwZGPT6JDP"
            />
        )
    }
}