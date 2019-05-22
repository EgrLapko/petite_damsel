import React, { Component } from 'react';
import {ProductConsumer} from '../../context';

export default class ProductFilter extends Component {

  render() {

    const {cupSize, brasSize} = this.props;

    return (
      <ProductConsumer>
        {value => {
          const {search, min, max, shipping, price, handleChange, storeProducts, handlePriceFilter, priceFilter,
          handleCupFilter, cupFilter, handleColorFilter, colorFilter, handleSizeFilter, sizeFilter, handleFilter} = value;

          let allBras = storeProducts.filter(item => item.type === "Bras");
          let allPanties = storeProducts.filter(item => item.type === "Panties");
          let allSleepwear = storeProducts.filter(item => item.type === "Sleepwear");

          
          let brasCups = allBras.map(item => item.cup);
          let allCups = [...new Set(brasCups.flat())]

          let allColors = storeProducts.map(item => item.color);
          let colorSet = [...new Set(allColors.flat())];

          let allBrasSizes = allBras.map(item => item.sizes);
          let brasSizesSet = [...new Set(allBrasSizes.flat())];

          let allPantiesSizes = allPanties.map(item => item.sizes);
          let pantiesSizesSet = [...new Set(allPantiesSizes.flat())];

          let allSleepwearSizes = allSleepwear.map(item => item.sizes);
          let sleepwearSizesSet = [...new Set(allSleepwearSizes.flat())];
          

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

              {/* Search by color */}

              <div className="color-search color-filter filter ">
                <p className="filter-title" onClick={handleColorFilter}>Color <i className="fas fa-sort-down"></i></p>
                <div className={"color-container " + (colorFilter ? "color-window-visible" : null)}>
                  <ul className="color-filter-list">
                    {colorSet.map((color, index) => {
                      return (
                        <li className="color-item" key={index} onClick={() => handleFilter("color", color)}> {color} </li>
                      )
                    }
                    )}
                  </ul>        
                </div>
              </div>

              {/* color search ended */}

              {/* Search by size for BRAS */}

              <div className={"size-search size-filter filter " + (brasCups ? "size-filter-visible" : null)}>
                <p className="filter-title" onClick={handleSizeFilter}>Size <i className="fas fa-sort-down"></i></p>
                <div className={"size-container " + (sizeFilter ? "size-window-visible" : null)}>
                  <ul className="size-filter-list">
                    {brasSizesSet.map((sizes, index) => {
                      return (
                        <li className="size-item" key={index} onClick={() => handleFilter("sizes", sizes)}> {sizes} </li>
                      )
                    }
                    )}
                  </ul>        
                </div>
              </div>

              {/* size search ended */}
              
              {/* Search by cup */}

              <div className={"cup-search cup-filter filter " + (cupSize ? "cup-filter-visible" : null)}><p className="filter-title" onClick={handleCupFilter}>Cup <i className="fas fa-sort-down"></i></p>
                <div className={"cup-container " + (cupFilter ? "cup-window-visible" : null)}>
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
                <div className={"price-container " + (priceFilter ? "price-window-visible" : null)}>
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
