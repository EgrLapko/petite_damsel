import React, { Component } from 'react';
import {ProductConsumer} from '../../context';
import {Link} from 'react-router-dom';

export default class CartTotals extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {cartSubtotal, cartTax, cartTotal, clearCart} = value;
          return (
            <div className="totals-container">        
              <div className="totals-inner-container">
                <div className="subtotal">
                  <p>
                    Subtotal:
                  </p>
                  <p>
                    ${cartSubtotal}
                  </p>        
                </div>
                <div className="tax">
                  <p>
                    Tax:
                  </p>
                  <p>
                    ${cartTax}
                  </p>
                </div>
                <div className="total">
                <p>
                  Total:
                </p>
                <p>
                  ${cartTotal}
                </p>       
                </div>
                <div className="totals-btns">
                  <button className="btn pink-btn totals-btn">
                    Checkout
                  </button>
                  <Link to="/">
                    <button className="btn totals-btn" onClick={clearCart}>
                      Clear bag
                    </button>
                  </Link>
                </div>     
              </div>  
            </div>
          )
        }}
      </ProductConsumer>
    )
  }
}
