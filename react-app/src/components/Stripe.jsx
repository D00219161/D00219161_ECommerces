import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {Col, Row, Container} from 'react-bootstrap';

class Stripe extends Component {
    onToken = (token, description, image, name, label) => {
    };
    render() {
        return (
            <StripeCheckout
            name="TheChristmasShop.ie"
            image="http://files.softicons.com/download/holidays-icons/christmas-dock-icons-by-chicho21net/png/256/snowman.png"
            locale="centre"
            stripeKey="pk_test_MjRMMPAX5d1iXIBTakGuopAc00U0CgLedr"
            label="Pay with 💳" 
            token={this.onToken}
            />
        )
  }
}

export default Stripe;