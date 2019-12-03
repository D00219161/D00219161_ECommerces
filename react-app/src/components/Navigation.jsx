import React, { Component } from 'react';
import { Nav, Navbar, FormControl, Form } from 'react-bootstrap';
import ViewCart from './ViewCart';

class NavMenu extends Component {

  render() {
    return (
        <Navbar bg="dark" variant="dark">
    <Navbar.Brand ><img src="https://c7.uihere.com/icons/574/823/780/christmas-christmas-tree-decoration-ornament-star-icon-23c1c685746c2df3e5d553b2b27b5c2b.png"/>The Christmas Shop <img src="https://st2.cannypic.com/thumbs/19/197041_352_canny_pic.png"/>
        </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form>
  <ViewCart cart={this.props.cart} />
    </Form>
  </Navbar>
    );
    
  }
  
}

export default NavMenu;