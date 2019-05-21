import React, { Component } from 'react';
import {ProductConsumer} from '../../context';
import { Route } from 'react-router-dom';

export default class ProductFilter extends Component {

  render() {

    const {cupSize} = this.props;

    return (
      <ProductConsumer>
        {value => {
          const {search, min, max, color, shipping, price, handleChange, storeProducts, handlePriceFilter, priceFilter,
          handleCupFilter, cupFilter, handleColorFilter, colorFilter, handleFilter} = value;

          let allBras = storeProducts.filter(item => item.type === "Bras");
          let brasCups = allBras.map(item => item.cup);
          let allCups = [...new Set(brasCups.flat())]

          let allColors = storeProducts.map(item => item.color);
          let colorSet = [...new Set(allColors.flat())]

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
                <select name="color" 
                        id="color"
                        onChange={handleChange} 
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

              {/* Search by color */}

              <div className="color-search color-filter filter "><p className="filter-title" onClick={handleColorFilter}> Color <i className="fas fa-sort-down"></i></p>
                <div className={"color-container " + (colorFilter ? "cup-visible" : null)}>
                  <ul className="color-filter-list">
                    {colorSet.map((color, index) => {
                      return (
                        <li className="cup-item" key={index} onClick={() => handleFilter("color", color)}> {color} </li>
                      )
                    }
                    )}
                  </ul>        
                </div>
              </div>

              {/* color search ended */}
              
              {/* Search by cup */}

              <div className={"cup-search cup-filter filter " + (cupSize ? "cup-filter-visible" : null)}><p className="filter-title" onClick={handleCupFilter}>Cup <i className="fas fa-sort-down"></i></p>
                <div className={"cup-container " + (cupFilter ? "cup-visible" : null)}>
                  <ul className="cup-filter-list">
                    {allCups.map((cup, index) => {
                      return (
                        <li className="cup-item" key={index} onClick={() => handleFilter("cup", cup)}> {cup} </li>
                      )
                    }
                    )}
                  </ul>        
                </div>
              </div>

              {/* Cup search ended */}
              {/* Price Range */}

              <div className="price-filter filter"><p className="filter-title" onClick={handlePriceFilter}>Price <i className="fas fa-sort-down"></i></p>
                <div className={"price-container " + (priceFilter ? "price-visible" : null)}>
                  <label htmlFor="price"><p className="price-screen">${price}</p></label>
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
              </div>

              {/* End of price range */}
              {/* Free shipping */}
              {/* <div className="shipping-search filter">
                <label htmlFor="shipping"><p> shipping</p></label>
                <input className="checkmark" type="checkbox" name="shipping" id="shipping" onChange={handleChange} checked={shipping && true} ></input>
              </div> */}
              {/* End of Free shipping */}
            </div>
          )
        }}
      </ProductConsumer>
    )
  }
}
