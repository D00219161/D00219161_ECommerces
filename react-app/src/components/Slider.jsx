import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

class Slider extends Component {

  render() {
    return (
      <Carousel>
  <Carousel.Item>
    <img
      className="w-100"
      src="https://www.universitysupplystore.com/outerweb/product_images/13194215l.jpg"
      alt="First Slide"
    />
    <Carousel.Caption>
      <h3>Apple Watch Series 4</h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.irelandsown.ie/wp-content/uploads/2017/12/hith-father-christmas-lights-iStock_000029514386Large.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.irelandsown.ie/wp-content/uploads/2017/12/hith-father-christmas-lights-iStock_000029514386Large.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
    
  }
  
}

export default Slider;