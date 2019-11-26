import React    from 'react';
import ViewCart from './ViewCart';

class Header extends React.Component {
  render() {
    return (
      <div className='jumbotron'>
        <h1 className='display-4'><img src="https://c7.uihere.com/icons/574/823/780/christmas-christmas-tree-decoration-ornament-star-icon-23c1c685746c2df3e5d553b2b27b5c2b.png"/>The Christmas Shop <img src="https://st2.cannypic.com/thumbs/19/197041_352_canny_pic.png"/>
        </h1>
        <p>Your favourite Christmas shop</p>
        <ViewCart cart={this.props.cart} />
      </div>
    );
  }

}

export default Header;