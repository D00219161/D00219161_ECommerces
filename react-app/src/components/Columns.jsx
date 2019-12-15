import React           from 'react';
import {Col, Row, Container} from 'react-bootstrap/';

class Column extends React.Component {

    // Rendering for a single product. Note that each product is
    // passed in as a prop. All products are looped over in the
    // ProductList component, creating many of these Product
    // components.
    render() {
      return (
<Container>
<div className="christmas"><a href="https://www.animatedimages.org/cat-merry-christmas-570.htm">
<img src="https://www.animatedimages.org/data/media/570/animated-merry-christmas-image-0116.gif" 
border="0" alt="animated-merry-christmas-image-0116" width="800px" height="250px"/></a></div>
<div className="content">
<h4>Video Advert's</h4>
  <Row>
    <Col xs><iframe width="350" height="315" src="https://www.youtube.com/embed/OsXedJq1aWE"></iframe></Col>
    <Col xs={{ order: 12 }}><iframe width="350" height="315" src="https://www.youtube.com/embed/yyNtm0LZiKc"></iframe></Col>
    <Col xs={{ order: 1 }}><iframe width="350" height="315" src="https://www.youtube.com/embed/XuTwtOo88r8"></iframe></Col>
    <Col xs><iframe width="350" height="315" src="https://www.youtube.com/embed/x7QhUL8NUK4"></iframe></Col>
    <Col xs={{ order: 12 }}><iframe width="350" height="315" src="https://www.youtube.com/embed/gvYNxcZQ3B4"></iframe></Col>
    <Col xs={{ order: 1 }}><iframe width="350" height="315" src="https://www.youtube.com/embed/_nhNb0oLCxk"></iframe></Col>
    <Col xs><iframe width="350" height="315" src="https://www.youtube.com/embed/tKlRN2YpxRE"></iframe></Col>
    <Col xs={{ order: 12 }}><iframe width="350" height="315" src="https://www.youtube.com/embed/NdtYU2se0cI"></iframe></Col>
    <Col xs={{ order: 1 }}><iframe width="350" height="315" src="https://www.youtube.com/embed/dRGw_8xePZ8"></iframe></Col>
    <Col xs><iframe width="350" height="315" src="https://www.youtube.com/embed/hS_OjalEpZI"></iframe></Col>
    <Col xs={{ order: 12 }}><iframe width="350" height="315" src="https://www.youtube.com/embed/eaW0tYpxyp0"></iframe></Col>
    <Col xs={{ order: 1 }}><iframe width="350" height="315" src="https://www.youtube.com/embed/ZiZqGQEk7Vg"></iframe></Col>
    <Col xs><iframe width="350" height="315" src="https://www.youtube.com/embed/v5SFBpMiaiQ"></iframe></Col>
    <Col xs={{ order: 12 }}><iframe width="350" height="315" src="https://www.youtube.com/embed/Ls_dxo6vNTc"></iframe></Col>
    <Col xs={{ order: 1 }}><iframe width="350" height="315" src="https://www.youtube.com/embed/Knf9hh2o1L0"></iframe></Col>
  </Row>
  </div>
</Container>
);
}

}

export default Column;

