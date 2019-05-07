import React, { Component } from 'react';
import {ProductConsumer} from '../../context';

export default class SideCart extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {cartOpen, cartClose, cart} = value;
          return (
            <div className={"sidecart " + (cartOpen ? "sidecart_visible" : null)} onClick={cartClose}>
              <p>Cart items here</p>
            </div>
          )
        }}
      </ProductConsumer>
    )
  }
}
