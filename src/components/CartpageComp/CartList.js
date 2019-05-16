import React, { Component } from 'react';
import CartItem from './CartItem';
import {ProductConsumer} from '../../context';
import Title from '../Title/Title';

export default class CartList extends Component {
  render() {
    return (
      <div className="cart-items">
        <ProductConsumer>
        {value => {
          const {cart, increment, decrement, removeItem} = value;
          if (cart.length === 0) {
            return (
              <Title title="No panties here yet :(" />
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
