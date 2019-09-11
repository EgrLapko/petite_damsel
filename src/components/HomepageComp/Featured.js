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
      slidesToShow: 4,
      slidesToScroll: 4
    };

    var settings2 = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <ProductConsumer>
        {value => {
          const {featuredProducts} = value;
          return (
            <React.Fragment>
              <div className="slider-container">
                <Slider {...settings}>
                  {featuredProducts.map(product =>(<ProductCard 
                        key = {product.id}
                        product = {product}
                        cardSize = 'small'
                    />))}
                </Slider>
              </div>
              <div className="slider-container-small">
                <Slider {...settings2}>
                  {featuredProducts.map(product =>(<ProductCard 
                        key = {product.id}
                        product = {product}
                        cardSize = 'small'
                    />))}
                </Slider>
              </div>
            </React.Fragment>
          )
        }}
      </ProductConsumer>
    )
  }
}
