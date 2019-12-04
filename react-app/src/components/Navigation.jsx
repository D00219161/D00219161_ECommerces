import React, { Component } from 'react';
import { Nav, Navbar, FormControl, Form } from 'react-bootstrap';
import ViewCart from './ViewCart';

class NavMenu extends Component {

  render() {
    return (
        <Navbar bg="dark" variant="dark">
    <Navbar.Brand ><img src="http://icons.iconarchive.com/icons/icondrawer/winter-holiday/128/xmas-tree-icon.png"/>The Christmas Shop <img src="https://st2.cannypic.com/thumbs/19/197041_352_canny_pic.png"/>
        </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form><ViewCart cart={this.props.cart} />
    </Form>
  </Navbar>
    );
    
  }
  
}

export default NavMenu;