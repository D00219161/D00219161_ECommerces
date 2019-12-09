import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

class Slider extends Component {

  render() {
    return (
      <Carousel>
  <Carousel.Item>
    <img
      className="w-100"
      src="https://hb.imgix.net/75740eb26832ca9e583f573b09a294bcc47fb227.jpg?auto=compress,format&fit=crop&h=353&w=616&s=0a22e38765fcf80ab5d14cb123e6c3aa"
      alt-text="Red Redemption 2"
    />
    <Carousel.Caption>
      <h3>Red Redemption 2</h3>
      <p>Red Dead Redemption 2 is a 2018 action-adventure game developed and published by Rockstar Games. The game is the third entry in the Red Dead series and is a prequel to the 2010 game Red Dead Redemption.</p>
      <p>€40.00</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.bhphotovideo.com/images/images2500x2500/canon_1263c004_eos_80d_dslr_camera_1225875.jpg"
      alt-text="Canon EOS 80D Body"
    />

    <Carousel.Caption>
      <h3>Canon EOS 80D Body</h3>
      <p>At home or on your travels, at night or in daylight, explore the art of photography and filmmaking with a fast and reliable all-rounder camera that delivers stunning stills and Full HD movies.</p>
      <p>€1,159.99</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTAaZrkgtqYfyxV6TDU3J8YtE0SuuSlPshz9Dx71IL2Xr15SC8cvA&usqp=CAc"
      alt="Surface Pro X"
    />

    <Carousel.Caption>
      <h3>Surface Pro X</h3>
      <p>Edge to edge 2-in-1 laptop with LTE and 13” touchscreen. Ultra-thin and always connected, Surface Pro X combines ultimate mobility with amazing graphics.</p>
      <p>€1,169.00</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
    
  }
  
}

export default Slider;