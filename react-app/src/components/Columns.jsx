import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {Row, Col} from 'react-bootstrap';

class Stripe extends Component {
    onToken = (token, description, image, name) => {
    };
    render() {
        return (
            <row><Col classname ="float-right">
            <p>Payment Option here:</p>
            <StripeCheckout
            name="TheChristmasShop.ie"
            image="http://files.softicons.com/download/holidays-icons/christmas-dock-icons-by-chicho21net/png/256/snowman.png"
            locale="centre"
            stripeKey="pk_test_MjRMMPAX5d1iXIBTakGuopAc00U0CgLedr"
            token={this.onToken}
            />
            </Col></row>
        )
  }
}


export default Stripe;