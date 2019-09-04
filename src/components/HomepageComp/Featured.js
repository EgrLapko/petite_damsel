import React, { Component } from 'react';
import Slider from "react-slick";
import {ProductConsumer} from '../../context';
import ProductCard from '../ProductCard';


export default class Featured extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5
    };
    return (
      // <div className="featured-items">
          // <ProductConsumer>
          //     {value  => {
          //         const {featuredProducts} = value;
          //         return featuredProducts.map(product =>(<ProductCard 
          //             key = {product.id}
          //             product = {product}
          //             cardSize = 'small'
          //         />))
          //     }}
          // </ProductConsumer>
      // </div>
      <ProductConsumer>
        {value => {
          const {featuredProducts} = value;
          return (
            <div className="slider-container">
              <Slider {...settings}>
                {featuredProducts.map(product =>(<ProductCard 
                      key = {product.id}
                      product = {product}
                      cardSize = 'small'
                  />))}
              </Slider>
            </div>
          )
        }}
      </ProductConsumer>
    )
  }
}
