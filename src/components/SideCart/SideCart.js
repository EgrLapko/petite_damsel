import React, { Component } from 'react';
import {ProductConsumer} from '../../context';
import {Link} from 'react-router-dom';

export default class SideCart extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {cartOpen, cart, cartItems, handleCart, cartTotal} = value;
          return (
            <div className={"sidecart " + (cartOpen ? "sidecart_visible" : null)}>
              <div className="sidecart-top">
                <p className="sidecart-title">Your cart ({cartItems} items) </p>
                <p className="close-sidecart-btn" onClick={handleCart}><i className="fas fa-times"></i></p>
              </div>
              <ul className="cart-menu-content">
                {cart.map(item => {
                  return (
                    <li key={item.id} className="cart-menu-item">
                      <img src = {item.imageSmall} alt="sidecart"/>
                      <div className="cart-item-info">
                        <p className="menu-item-title"> {item.title} </p>
                        <p className="menu-item-count">x{item.count}</p>
                        <p className="menu-item-price"> ${item.featured ? (item.price - (item.price/100)*60).toFixed(2) : item.price} </p>
                      </div>
                    </li>
                  )
                })}
              </ul>
              <div className="order-total">
                <p>Order Total:</p>
                <p>${cartTotal}</p>
              </div>
              <Link to="/cart"><button className="btn btn-sidecart">View cart</button></Link>
            </div>
          )
        }}
      </ProductConsumer>
    )
  }
}
