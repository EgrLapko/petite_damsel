import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context/context';

export default class ProductCard extends Component {
  render() {

    const {product, cardSize} = this.props;
    let itemSizes = product.sizes.map(size => size);
    const index = itemSizes.indexOf("all");
      if (index > -1) {itemSizes.splice(index, 1)};
    let itemsCup = product.cup.map(item => item);
      if (index > -1) {itemsCup.splice(index, 1)};

    return (
      <ProductConsumer>
        {value => {
          const {addToCart, setSingleProduct, recentItems} = value;
          return (
            <div className={"product-card " + (cardSize === "small" ? "card-small" : "card-normal")}>
              <div className="image-container">
                <Link to={`/products/single/${product.id}`} onClick={() => {setSingleProduct(product.id); recentItems(product.id);}}>
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
                <ul className="card-sizes-list">
                  {itemSizes.map((size, index) => {
                    return (
                      <li className="card-sizes-item" key={index}> {size} </li>
                    )
                  })}
                </ul>
                <ul className="card-cups-list">
                  {product.type === "Bras" || product.category === "Accessories, bodysuits" ? 
                  itemsCup.map((cup, index) => {
                    return (
                      <li className="card-cups-item" key={index}> {cup} </li>
                    )
                  }) : null}

                </ul>
                
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
