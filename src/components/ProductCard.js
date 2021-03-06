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
          const {setSingleProduct, recentItems, cart} = value;
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
                <Link to={`/products/single/${product.id}`}>
                  <p className="product-title"> {product.title}</p>
                </Link>

              </div>
              <div className="product-bottom-details">
                <div className="prices-wrapper">
                  <p className={"product-price " + (product.featured ? "price-crossed" : null)}> ${product.price} </p>
                  <p className={"featured-price " + (product.featured ? "featured-visible" : null)}> ${(product.price - (product.price/100)*60).toFixed(2)} </p>
                </div>
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
                  {cart.find(item => item.id === product.id)  
                      ? 
                      <div className="card-in-cart-sign">
                        <i className="fas fa-shopping-bag"/>
                      </div> 
                      :
                      null
                  }
              </div>
            </div>
          )
        }}
      </ProductConsumer>
    )
  }
}
