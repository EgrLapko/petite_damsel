import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';

export default class Product extends Component {
  render() {

    const {product, cardSize} = this.props;

    return (
      <ProductConsumer>
        {value => {
          const {addToCart, setSingleProduct} = value;
          return (
            <div className={"product-card " + (cardSize === "small" ? "card-small" : null)}>
              <div className="image-container">
                <Link to={`/products/:category/:type/${product.id}`} onClick={() => setSingleProduct(product.id)}>
                  <img src={product.imageSmall} 
                    alt="product"
                    onMouseOver = {e => {e.currentTarget.src = product.imageSmall2}}
                    onMouseOut = {e => {e.currentTarget.src = product.imageSmall}}
                  />
                </Link>
              </div>
              <div className="product-details">
                <p className="product-category"> {product.category} </p>
                <Link to={`/products/:category/:type/${product.id}`}><p className="product-title"> {product.title}</p></Link>
              </div>
              <div className="product-bottom-details">
                <p className="product-price"> ${product.price} </p>
                <p className="cart-btn"><i className="fas fa-cart-plus" onClick={() => addToCart(product.id)}></i></p>
              </div>
            </div>
          )
        }}
      </ProductConsumer>
    )
  }
}
