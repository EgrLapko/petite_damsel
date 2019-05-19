import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context/context';

export default class ProductCard extends Component {
  render() {

    const {product, cardSize} = this.props;

    return (
      <ProductConsumer>
        {value => {
          const {addToCart, setSingleProduct } = value;
          return (
            <div className={"product-card " + (cardSize === "small" ? "card-small" : "card-normal")}>
              <div className="image-container">
                <Link to={`/products/single/${product.id}`} onClick={() => setSingleProduct(product.id)}>
                  <img src={product.imageSmall} 
                    alt="product"
                    onMouseOver = {e => {e.currentTarget.src = product.imageSmall2}}
                    onMouseOut = {e => {e.currentTarget.src = product.imageSmall}}
                  />
                </Link>
              </div>
              <div className="product-details">
                <p className="product-category"> {product.category} </p>
                <Link to={`/products/single/${product.id}`}><p className="product-title"> {product.title} </p></Link>
              </div>
              <div className="product-bottom-details">
                <p className="product-price"> ${product.price} </p>
                <button 
                  className={"cart-btn " + (product.inCart ? "cart-active" : null)} 
                  onClick={() => addToCart(product.id)}
                  disabled={product.inCart ? true : false}
                  >
                  {product.inCart ? (
                            <p className="in-cart-sign" disabled>
                              In Cart
                            </p>
                          ) : (
                            <i className="fas fa-cart-plus"/>
                          )}  
                  </button>
              </div>
            </div>
          )
        }}
      </ProductConsumer>
    )
  }
}
