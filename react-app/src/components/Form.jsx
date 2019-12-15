import React from 'react';
import {Form, Button, Col} from 'react-bootstrap';

class EmailForm extends React.Component {

    render() {
      return (
        <div id="grid">
        <h4>Please sign up and checkout here!</h4>
        <Col sm={12}>
        <Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="Enter Address Line 1" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Enter Address Line 2" />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>County</Form.Label>
      <Form.Control placeholder="Enter County" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Country</Form.Label>
      <Form.Control placeholder="Enter Country" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Eircode</Form.Label>
      <Form.Control placeholder="Enter Eircode" />
    </Form.Group>
  </Form.Row>

  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</Col>
</div>

        );
    }
  
  }
  
  export default EmailForm;