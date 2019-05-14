import React, { Component } from 'react'

export default class CartColumns extends Component {
  render() {
    return (
      <div className="cart-items-titles">
        <div className="cart-item">
                <p>Product</p>
        </div>
        <div className="cart-item">
                <p>Title</p>
        </div>
        <div className="cart-item">
            <p>Price</p>
        </div>
        <div className="cart-item">
            <p>Quantity</p>
        </div>
        <div className="cart-item">
            <p>Remove</p>
        </div>
        <div className="cart-item">
            <p>Total</p>
        </div>
      </div>
    )
  }
}
