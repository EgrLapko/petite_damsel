import React, { Component } from 'react';
import Title from '../Title/Title';
import {ProductConsumer} from '../../context';
import ProductCard from '../ProductCard';

export default class Featured extends Component {
  render() {

    return (
      <div className="featured-section">
        <Title title="our featured items" />
        <div className="featured-items">
            <ProductConsumer>
                {value  => {
                    const {featuredProducts} = value;
                    return featuredProducts.map(product =>(<ProductCard 
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
