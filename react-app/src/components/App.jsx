import React        from 'react';
import ProductsList from './ProductList';
import Cart         from '../lib/Cart';
import Footer       from './Footer';
import NavMenu      from './Navigation';
import Slider       from './Slider';
import Column       from './Columns';

class App extends React.Component {

  // Note the cart object is just a vanilla JS
  // custom type (see lib/Cart.js)
  state = {
    cart : new Cart()
  }
  // Render
  render() {
    return (
      <div className='App'>
        <NavMenu cart={this.state.cart} />
        <Slider />
        <ProductsList cart={this.state.cart} />
        <Column />
        <Footer />
      </div>
    );
  }
}

export default App;
