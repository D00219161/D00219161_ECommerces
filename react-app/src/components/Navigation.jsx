import React, { Component } from 'react';
import { Nav, Navbar, FormControl, Form } from 'react-bootstrap';
import ViewCart from './ViewCart';

class NavMenu extends Component {

  render() {
    return (
        <Navbar bg="dark" variant="dark">
    <Navbar.Brand >
    <nav>
    <img src="http://icons.iconarchive.com/icons/icondrawer/winter-holiday/128/xmas-tree-icon.png"/>
    <a href="index.js">The Christmas Shop</a>
    <img src="https://st2.cannypic.com/thumbs/19/197041_352_canny_pic.png"/>
    </nav>
        </Navbar.Brand>
    <Nav className="mr-auto">
    </Nav>
    <Form><ViewCart cart={this.props.cart} />
    </Form>
  </Navbar>
    );
    
  }
  
}

export default NavMenu;