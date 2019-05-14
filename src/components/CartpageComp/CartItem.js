import React, { Component } from 'react';
import {ProductConsumer} from '../../context';

export default class CartItem extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {increment, decrement, removeItem} = value;
          const {cartItem} = this.props;
          const {id, title, price, count, total, imageSmall} = cartItem;
          return (
            <div className="cart-items-list">
                <div className="cart-item">
                    <img src={imageSmall} alt="" />
                </div>
                <div className="cart-item">
                  <p id="cart-item-title"> {title} </p>
                </div>
                <div className="cart-item">
                  <p id="cart-item-price"> ${price} </p>
                </div>
                <div className="cart-item">
                  <div className="cart-item btns">
                        <button className="quantity-btn" onClick={() => decrement(id)}><i className="fas fa-minus"></i></button>
                          <p> {count} </p>
                        <button className="quantity-btn" onClick={() => increment(id)}><i className="fas fa-plus"></i></button>
                  </div>
                </div>
                <div className="cart-item">
                  <i id="trash-icon" className="fas fa-trash-alt" onClick={() => removeItem(id)}></i>
                </div>
                <div className="cart-item">
                  <p id="cart-item-total"> ${total} </p>
                </div>
            </div>
          )
        }}
      </ProductConsumer>
    )
  }
}
