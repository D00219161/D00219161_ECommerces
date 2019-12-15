import React           from 'react';
import AddToCartButton from './AddToCartButton';
import * as Config     from '../config.json';
import './Product.css';
import {Col, Row} from 'react-bootstrap/';

class Product extends React.Component {

  // Rendering for a single product. Note that each product is
  // passed in as a prop. All products are looped over in the
  // ProductList component, creating many of these Product
  // components.
  render() {
    return (
      <Row>
      <Col md={12}>
      <div className='card mb-4'>
        <h2 className='card-header'>{this.props.product.name}</h2>
        <div className='row'>

          <div className='col-12 col-md-3'>
            <div className='product-image'>
              <img src={this.props.product.image_href} alt={this.props.product.name} />
            </div>
          </div>

          <div className='col-12 col-md-9'>
            <div className='card-body'>
              <h3 className='card-sub-title'>&euro;{(parseFloat(this.props.product.price)).toFixed(2)}</h3>
              <p className='card-text'>{this.props.product.description}</p>
              <p className='card-text'>{this.props.product.creator}</p>
              <AddToCartButton product={this.props.product} cart={this.props.cart} />
            </div>
          </div>

        </div>
      </div>
      </Col>
      </Row>
      
    );
  }

}

export default Product;