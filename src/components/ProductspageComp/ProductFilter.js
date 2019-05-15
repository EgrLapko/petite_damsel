import React, { Component } from 'react';
import {ProductConsumer} from '../../context';

export default class ProductFilter extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {search, min, max, color, shipping, price, handleChange, storeProducts} = value;
          
          let colors = new Set()
          colors.add('all');
          for (let product in storeProducts) {
            colors.add(storeProducts[product]["color"])
          }
          colors = [...colors];

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
                       placeholder = "Enter a title"
                       className="filter-item"/>
              </div>        
              {/* End of text search */}
              {/* Category search */}
              <div className="category-search filter">
                <label htmlFor="color"> <p>Color</p></label>
                <select name="color" 
                        id="color"onChange={handleChange} 
                        value={color} 
                        className="filter-item select">
                    {
                    colors.map((color, index) => {
                      return (
                        <option key={index} value={color}> {color} </option>
                      )
                    })
                  }
                </select>
              </div>
              {/* Category search ended */}
              {/* Price Range */}
              <div className="price-search filter">
                <label htmlFor="price"><p>Price: ${price}</p></label>
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
                
              </div>
              {/* End of price range */}
              {/* Free shipping */}
              <div className="shipping-search filter">
                <label htmlFor="shipping"><p> shipping</p></label>
                <input className="checkmark" type="checkbox" name="shipping" id="shipping" onChange={handleChange} checked={shipping && true} ></input>
              </div>
              {/* End of Free shipping */}
            </div>
          )
        }}
      </ProductConsumer>
    )
  }
}
