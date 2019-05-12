import React, { Component } from 'react';
import Product from '../Product';
import {Link} from 'react-router-dom';
import Title from '../Title/Title';
import {ProductConsumer} from '../../context';

export default class Featured extends Component {
  render() {

    return (
      <div className="featured-section">
        <Title title="our featured items" />
        <div className="featured-items">
            <ProductConsumer>
                {value  => {
                    const {featuredProducts} = value;
                    return featuredProducts.map(product =>(<Product 
                        key = {product.id}
                        product = {product}
                        cardSize = 'small'
                    />))
                }}
            </ProductConsumer>
        </div>
      </div>
    )
  }
}
