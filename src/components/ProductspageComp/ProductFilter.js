import React, { Component } from 'react';
import {ProductConsumer} from '../../context';

export default class ProductFilter extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {search, min, max, color, shipping, price, handleChange, storeProducts} = value;
          return (
            <div className="filter-wrapper">
              {/* Text search */}
              <div className="search-bar filter">
                <label htmlFor="search"><p>Search here</p></label>
                <input type="text"
                       name="search" 
                       id='search' 
                       onChange={handleChange} 
                       value={search} 
                       className="filter-item"/>
              </div>        
              {/* End of text search */}
              {/* Category search */}
              <div className="category-search filter">
                <label htmlFor="color"> <p>Color</p></label>
                <select name="color" 
                        id="color"onChange={handleChange} 
                        value={color} 
                        className="filter-item">
                  <option value="all">All</option>
                  <option value="black">Black</option>
                  <option value="white">White</option>
                  <option value="pink">Pink</option>
                  <option value="green">Green</option>
                </select>
              </div>
              {/* Category search ended */}
              {/* Price Range */}
              <div className="price-search filter">
                <label htmlFor="price">
                  <p>Price: ${price} </p>
                  <input 
                    type="range" 
                    name="price" 
                    id="price" 
                    min={min} 
                    max={max} 
                    value={price} 
                    className="range-price"
                    onChange = {handleChange}
                  />
                </label>
              </div>
              {/* End of price range */}
              {/* Free shipping */}
              <div className="shipping-search filter">
                <label htmlFor="shipping"><p> shipping</p></label>
                <input type="checkbox" name="shipping" id="shipping" onChange={handleChange} value={shipping && true}></input>
              </div>
              {/* End of Free shipping */}
            </div>
          )
        }}
      </ProductConsumer>
    )
  }
}
