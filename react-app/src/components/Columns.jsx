import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {Col, Row, Container} from 'react-bootstrap';

class Stripe extends Component {
    onToken = (token, description, image, name, label) => {
    };
    render() {
        return (
            <Container>
           <Row>
           <Col sm={9}>Products Listed Below</Col>
           <Col sm={2}>
           <p>Payment Option here:
            <StripeCheckout
            name="TheChristmasShop.ie"
            image="http://files.softicons.com/download/holidays-icons/christmas-dock-icons-by-chicho21net/png/256/snowman.png"
            locale="centre"
            stripeKey="pk_test_MjRMMPAX5d1iXIBTakGuopAc00U0CgLedr"
            label="Pay with 💳" 
            token={this.onToken}
            />
            </p>
            </Col></Row>
</Container>
        )
  }
}

export default Stripe;