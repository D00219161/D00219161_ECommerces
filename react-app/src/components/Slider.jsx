import React, { Component } from 'react';
import { Carousel, Button, ButtonToolbar} from 'react-bootstrap';

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
      <ButtonToolbar>
  <Button href="https://www.rockstargames.com/reddeadredemption2/restricted-content/agegate/form?redirect=https%3A%2F%2Fwww.rockstargames.com%2Freddeadredemption2%2Fpc&options=&locale=en_us" 
  target="_blank">See More</Button>
  </ButtonToolbar>
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
      <ButtonToolbar>
  <Button href="https://store.canon.ie/canon-eos-80d-body/1263C036/" target="_blank">See More</Button>
  </ButtonToolbar>
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
      <ButtonToolbar>
  <Button href="https://www.microsoft.com/en-ie/p/surface-pro-x/8VDNRP2M6HHC?s_kwcid=AL!4249!3!386691299250!e!!g!!surface%20pro%20x&ef_id=Cj0KCQiA0NfvBRCVARIsAO4930kbG4F7nkYEdWQ13eeszV-uD6eZbT1V9xl93kj0OzXcpQG87uLfsXMaAuLiEALw_wcB:G:s&s_kwcid=AL!4249!3!386691299250!e!!g!!surface%20pro%20x&invsrc=search&cl_vend=google&cl_ch=sem&cl_camp=6645603269&cl_adg=80414491153&cl_crtv=386691299250&cl_kw=surface%20pro%20x&cl_pub=google.com&cl_place=&cl_dvt=c&cl_pos=1t1&cl_mt=e&cl_gtid=kwd-311823439399&cl_pltr=88920125132&cl_dim0=Cj0KCQiA0NfvBRCVARIsAO4930kbG4F7nkYEdWQ13eeszV-uD6eZbT1V9xl93kj0OzXcpQG87uLfsXMaAuLiEALw_wcB:G:s&OCID=AID2000006_SEM_Cj0KCQiA0NfvBRCVARIsAO4930kbG4F7nkYEdWQ13eeszV-uD6eZbT1V9xl93kj0OzXcpQG87uLfsXMaAuLiEALw_wcB:G:s" 
  target="_blank">See More</Button>
  </ButtonToolbar>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
    
  }
  
}

export default Slider;