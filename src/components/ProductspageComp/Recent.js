import React, { Component } from 'react';
import Title from '../Title/Title';
import {ProductConsumer} from '../../context/context'
import ProductCard from '../ProductCard';

export default class Recent extends Component {
  render() {

    return (
      <div className="recent-items-section">
        <Title title="recently watched" />
        <div className="recent-items">
            <ProductConsumer>
                {value  => {
                    const {recent} = value;
                    return recent.map(product =>(<ProductCard 
                        key = {product.id}
                        product = {product}
                        cardSize = 'small'
                        onClick = {window.scrollTo(0, 0)}
                    />))
                }}
            </ProductConsumer>
        </div>
      </div>
    )
  }
}
