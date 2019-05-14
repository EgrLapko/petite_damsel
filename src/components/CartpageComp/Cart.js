import React, { Component } from 'react';
import Title from '../Title/Title';
import CartColumns from './CartColumns';
import CartTotals from './CartTotals';
import CartList from './CartList';

export default class Cart extends Component {
  render() {
    return (
      <section className="cart-page">
        <Title title="My bag" />
        <CartColumns />
        <CartList />
        <CartTotals />
      </section>
    )
  }
}
