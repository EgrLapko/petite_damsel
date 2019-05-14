import React, { Component } from 'react';
import CartItem from './CartItem';
import {ProductConsumer} from '../../context';

export default class CartList extends Component {
  render() {
    return (
      <div className="cart-items">
        <ProductConsumer>
        {value => {
          const {cart, increment, decrement, removeItem} = value;
          if (cart.length === 0) {
            return (
              <h1>Your cart is empty</h1>
            );
          }
          return (
            <React.Fragment>
              {cart.map(item => (<CartItem 
                key = {item.id}
                cartItem = {item}
                increment = {increment}
                decrement = {decrement}
                removeItem = {removeItem}
              />))}
            </React.Fragment>
          )
        }}
        </ProductConsumer>
      </div>     
    )
  }
}
