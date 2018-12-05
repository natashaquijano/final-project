import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

export default class TakeMoney extends React.Component {
    onToken = (token) => {
        fetch('/save-stripe-token', {
            method: 'POST',
            body: JSON.stringify(token),
        }).then(response => {
            response.json().then(data => {
                alert(`We are in business, ${data.email}`);
            });
        });
    }
    onClosed = (data) => {
        console.log(data)
        this.props.history.push("/thankyou")
    }

    // ...

    render() {
        return (
            // ...
            <StripeCheckout
                closed={this.onClosed}
                token={this.onToken}
                stripeKey="pk_test_oc9OZpML5uHJkcbwZGPT6JDP"
            />
        )
    }
}