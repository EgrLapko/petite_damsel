import React, { Component } from 'react';
import {ProductConsumer} from '../../context';

export default class ProductFilter extends Component {

  render() {

    const {cupSize, brasSize, uniSize, tightsSize, shoesSize, colorsBra} = this.props;

    return (
      <ProductConsumer>
        {value => {
          const {search, min, max, price, color, cup, sizes, handleChange, storeProducts, handlePriceFilter, priceFilter,
          handleCupFilter, cupFilter, handleColorFilter, colorFilter, handleSizeFilter, sizeFilter, handleFilter} = value;

          // ------------------ Fetching colors by category
          let allBras = storeProducts.filter(item => item.type === "Bras");
          let allBrasColors = allBras.map(item => item.color);
          let brasColorSet = [...new Set(allBrasColors.flat())];

          let allPanties = storeProducts.filter(item => item.type === "Panties");
          let allPantiesColors = allPanties.map(item => item.color);
          let pantiesColorSet = [...new Set(allPantiesColors.flat())];

          let allSleepwear = storeProducts.filter(item => item.type === "Sleepwear");
          let allSleepwearColors = allSleepwear.map(item => item.color);
          let sleepwearColorSet = [...new Set(allSleepwearColors.flat())];

          let allAccessories = storeProducts.filter(item => item.type === "Accessories");
          let allAccessoriesColors = allAccessories.map(item => item.color);
          let accessoriesColorSet = [...new Set(allAccessoriesColors.flat())];

          // ----------------------------------------------

          let brasAllCups = allBras.map(item => item.cup);
          let allCups = [...new Set(brasAllCups.flat())]

          let allColors = storeProducts.map(item => item.color);
          let colorSet = [...new Set(allColors.flat())];

          let allBrasSizes = allBras.map(item => item.sizes);
          let brasSizesSet = [...new Set(allBrasSizes.flat())];

          let allSleepwearSizes = allSleepwear.map(item => item.sizes);
          let uniSizesSet = [...new Set(allSleepwearSizes.flat())];

          let allTights = storeProducts.filter(item => item.category === "Accessories, tights");
          let allTightsSizes = allTights.map(item => item.sizes);
          let tightsSizeSet = [...new Set(allTightsSizes.flat())];

          let allSlippers = storeProducts.filter(item => item.category === "Accessories, slippers");
          let slipSizes = allSlippers.map(item => item.sizes);
          let slippersSizeSet = [...new Set(slipSizes.flat())];

          return (
            <div className="filter-wrapper">
              {/* ----- Text search */}
              <div className="filter search-filter">
                <input type="text" name="search" id='search' onChange={handleChange} value={search} placeholder = "Enter a title" className="filter-item"/>
              </div>     
              {/* Search by color */}
              <div className="filter color-filter">
                <p className="filter-title" onClick={handleColorFilter}>Color <i className="fas fa-sort-down"></i></p>
                  <ul className = {"filter-list colors-list " + (colorFilter ? "color-container-visible" : null)}>
                    {colorSet.map((colour, index) => {
                      return (
                        <li className={"filter-item " + (color === colour ? "active-item" : null)} key={index} onClick={() => handleFilter("color", colour)}> {colour} </li>
                      )
                    })}
                  </ul>
              </div>
              {/* Search by BRAS size */}
              <div className={"filter size-filter " + (brasSize ? "bra-size-filter-visible" : null)}>
                <p className="filter-title" onClick={handleSizeFilter}>Size <i className="fas fa-sort-down"></i></p>
                  <ul className = {"filter-list size-list " + (sizeFilter ? "size-container-visible" : null)}>
                    {brasSizesSet.map((size, index) => {
                      return (
                        <li className={"filter-item " + (size === sizes ? "active-item" : null)} key={index} onClick={() => handleFilter("sizes", size)}> {size} </li>
                      )
                    })}
                  </ul>
              </div>

              {/* Search by CUP size */}
              <div className={"filter size-filter " + (cupSize ? "cup-size-filter-visible" : null)}>
                <p className="filter-title" onClick={handleCupFilter}>Cup <i className="fas fa-sort-down"></i></p>
                  <ul className = {"filter-list size-list " + (cupFilter ? "size-container-visible" : null)}>
                    {allCups.map((cupSize, index) => {
                      return (
                        <li className={"filter-item " + (cupSize === cup ? "active-item" : null)} key={index} onClick={() => handleFilter("cup", cupSize)}> {cupSize} </li>
                      )
                    })}
                  </ul>
              </div>

              {/* Search by PANTIES and SLEEPWEAR size */}
              <div className={"filter size-filter " + (uniSize ? "size-filter-visible" : null)}>
                <p className="filter-title" onClick={handleSizeFilter}>Size <i className="fas fa-sort-down"></i></p>
                  <ul className = {"filter-list size-list " + (sizeFilter ? "size-container-visible" : null)}>
                    {uniSizesSet.map((uniSizes, index) => {
                      return (
                        <li className={"filter-item " + (uniSizes === sizes ? "active-item" : null)} key={index} onClick={() => handleFilter("sizes", uniSizes)}> {uniSizes} </li>
                      )
                    })}
                  </ul>
              </div>

              {/* Search by TIGHTS size */}
              <div className={"filter size-filter " + (tightsSize ? "tights-size-filter-visible" : null)}>
                <p className="filter-title" onClick={handleSizeFilter}>Size <i className="fas fa-sort-down"></i></p>
                  <ul className = {"filter-list tights-list " + (sizeFilter ? "tights-container-visible" : null)}>
                    {tightsSizeSet.map((tightsSize, index) => {
                      return (
                        <li className={"filter-item tights-item " + (tightsSize === sizes ? "active-item" : null)} key={index} onClick={() => handleFilter("sizes", tightsSize)}> {tightsSize} </li>
                      )
                    })}
                  </ul>
              </div>

              {/* Search by SHOES size */}
              <div className={"filter size-filter " + (shoesSize ? "shoes-size-filter-visible" : null)}>
                <p className="filter-title" onClick={handleSizeFilter}>Size <i className="fas fa-sort-down"></i></p>
                  <ul className = {"filter-list shoes-list " + (sizeFilter ? "shoes-container-visible" : null)}>
                    {slippersSizeSet.map((shoeSizes, index) => {
                      return (
                        <li className={"filter-item shoes-item " + (shoeSizes === sizes ? "active-item" : null)} key={index} onClick={() => handleFilter("sizes", shoeSizes)}> {shoeSizes} </li>
                      )
                    })}
                  </ul>
              </div>

              {/* Search by PRICE */}
              <div className="filter price-filter">
                <p className="filter-title" onClick={handlePriceFilter}>Price <i className="fas fa-sort-down"></i></p>
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
            </div>
          )
        }}
      </ProductConsumer>
    )
  }
}
