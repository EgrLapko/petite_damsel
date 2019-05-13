import React, { Component } from 'react';
import {ProductConsumer} from '../../context/context';
import {Link} from 'react-router-dom';

export default class SingleProductPage extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {singleProduct, addToCart, loading} = value;

          if(loading) {
            console.log('hello from loading');
            return (
              <h1>product loading...</h1>
            )}
              const {title, category, description, id, price, image, image2} = singleProduct;
              return (


                <div className="single-product-page">
                  <div className="details-content">
                    <div className="details-images-container">
                      <img src={image} alt="" />
                      <img src={image2} alt="" />
                    </div>
                    <div className="details-menu-container">
                      <div className="details-menu">
                        <p className="text-title details-title"> {title} </p>
                        <p className="details-price"> ${price} </p>
                        <div className="details-item-info">
                          <p className="details-note">Designer notes:</p>
                          <p className="details-description"> {description} </p>
                        </div>
                        <div className="details-filter">
                          <div className="size-filter-box">
                            <p>Select a size</p>
                            <ul className="size-list">
                              <li>32</li>
                              <li>34</li>
                              <li>36</li>
                              <li>38</li>
                            </ul>
                          </div>
                          <div className="cup-filter-box">
                            <p>Select Cup</p>
                            <ul className="cup-list">
                              <li>A</li>
                              <li>B</li>
                              <li>C</li>
                              <li>D</li>
                            </ul>
                          </div>
                        </div>
                        <div className="details-btn">
                          <Link to="/products/bras_classic"><button className="btn"> <span className="details-back"><i className="fas fa-angle-left"/></span> Back to bras</button></Link> 
                          <button className="cart-btn">
                            <span className="details-cart" onClick={() => addToCart(id)}><i className="fas fa-cart-plus" /></span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


              )
        }}
      </ProductConsumer>
    )
  }
}
