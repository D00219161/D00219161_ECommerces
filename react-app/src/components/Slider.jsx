import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

class Slider extends Component {

  render() {
    return (
      <Carousel>
  <Carousel.Item>
    <img
      className="w-100"
      src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/clans/36260268/ff5ff464a6ef59e5696fa0b904a6b9b1a2ad2eec.jpg"
      alt-text="Red Dead Redemption 2"
    />
    <Carousel.Caption>
      <h3>Red Dead Redemption 2 - Starting from €40.00</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn-ep19.pressidium.com/wp-content/uploads/2019/10/Canon-EOS-80D-review-featured.jpg"
      alt-text="Canon EOS 80D Body"
    />

    <Carousel.Caption>
      <h3>Canon EOS 80D Body - Starting from €1,159.99</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://assets.pcmag.com/media/images/666364-surface-pro.jpg?thumb=y&width=1280&height=720"
      alt="Surface Pro X"
    />

    <Carousel.Caption>
      <h3>Surface Pro X - Starting from €1,169.00</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
    
  }
  
}

export default Slider;