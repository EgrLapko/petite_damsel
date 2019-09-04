import React, { Component } from 'react';
import {ProductConsumer} from '../../context';

export default class ProductFilter extends Component {

  render() {

    const {cupSize, brasSize, uniSize, tightsSize, shoesSize, colorsBra, classicBrasColors, pushupBrasColors, straplessBrasColors, wirelessBrasColors ,
      colorsPanties, colorsClassicPanties, colorsThongsPanties, colorsSlimmingPanties, colorsBrazilianPanties, colorsSleepwear, colorsSleepwearBottoms,
      colorsSleepwearLong, colorsSleepwearShort, colorsSleepwearTops, colorsBodysuits, colorsTights, colorsSlippers} = this.props;

    return (
      <ProductConsumer>
        {value => {
          const {search, min, max, price, color, cup, sizes, handleChange, storeProducts, handlePriceFilter, priceFilter,
          handleCupFilter, cupFilter, handleColorFilter, colorFilter, handleSizeFilter, sizeFilter, handleFilter, displayColors,
          dropColorFilter, dropCupFilter, dropSizeFilter, dropPriceFilter} = value;
          

          // ------------------ Fetching colors by category
          let brasColors = [...new Set(storeProducts.filter(item => item.type === "Bras").map(item => item.color).flat())];
          let brasClassicColors = [...new Set(storeProducts.filter(item => item.category === "Bras, classic").map(item => item.color).flat())];
          let brasPushupColors = [...new Set(storeProducts.filter(item => item.category === "Bras, push-up").map(item => item.color).flat())];
          let brasStraplessColors = [...new Set(storeProducts.filter(item => item.category === "Bras, strapless").map(item => item.color).flat())];
          let brasWirelessColors = [...new Set(storeProducts.filter(item => item.category === "Bras, wireless").map(item => item.color).flat())];

          let pantiesColors = [...new Set(storeProducts.filter(item => item.type === "Panties").map(item => item.color).flat())];
          let pantiesClassicColors = [...new Set(storeProducts.filter(item => item.category === "Panties, classic").map(item => item.color).flat())];
          let pantiesThongsColors = [...new Set(storeProducts.filter(item => item.category === "Panties, thongs").map(item => item.color).flat())];
          let pantiesSlimmingColors = [...new Set(storeProducts.filter(item => item.category === "Panties, slimming").map(item => item.color).flat())];
          let pantiesBrazilianColors = [...new Set(storeProducts.filter(item => item.category === "Panties, brazilian").map(item => item.color).flat())];

          let sleepwearColors = [...new Set(storeProducts.filter(item => item.type === "Sleepwear").map(item => item.color).flat())];
          let sleepwearBottomsColors = [...new Set(storeProducts.filter(item => item.category === "Sleepwear, bottoms").map(item => item.color).flat())];
          let sleepwearLongColors = [...new Set(storeProducts.filter(item => item.category === "Sleepwear, long").map(item => item.color).flat())];
          let sleepwearShortColors = [...new Set(storeProducts.filter(item => item.category === "Sleepwear, short").map(item => item.color).flat())];
          let sleepwearTopsColors = [...new Set(storeProducts.filter(item => item.category === "Sleepwear, tops").map(item => item.color).flat())];

          let accsBodysuitsColors = [...new Set(storeProducts.filter(item => item.category === "Accessories, bodysuits").map(item => item.color).flat())];
          let accsTightsColors = [...new Set(storeProducts.filter(item => item.category === "Accessories, tights").map(item => item.color).flat())];
          let accsSlippersColors = [...new Set(storeProducts.filter(item => item.category === "Accessories, slippers").map(item => item.color).flat())];

          // ------------------ Fetching sizes by category
          let braCups = [...new Set(storeProducts.filter(item => item.type === "Bras").map(item => item.cup).flat())];
          let braSize = [...new Set(storeProducts.filter(item => item.type === "Bras").map(item => item.sizes).flat())];
          let uniSizeSet = [...new Set(storeProducts.filter(item => item.type === "Sleepwear").map(item => item.sizes).flat())];
          let tightsSizeSet = [...new Set(storeProducts.filter(item => item.category === "Accessories, tights").map(item => item.sizes).flat())];
          let slippersSizeSet = [...new Set(storeProducts.filter(item => item.category === "Accessories, slippers").map(item => item.sizes).flat())];


          return (
            <div className="filter-wrapper">
              {/* ----- Text search */}
              {/* <div className="filter search-filter">
                <input type="text" name="search" id='search' onChange={handleChange} value={search} placeholder = "Enter a title" className="filter-item"/>
              </div>      */}
              {/* Search by color */}
              <div className="filter color-filter">
                <p className="filter-title" onClick={(t) => { handleColorFilter(); ;}}>Color <i className="fas fa-sort-down"></i></p>
                  <ul className = {"filter-list colors-list " + (colorFilter ? "color-container-visible" : null)}>
                    {(classicBrasColors ? displayColors(brasClassicColors, color) : null )}
                    {(pushupBrasColors ? displayColors(brasPushupColors, color) : null )}
                    {(straplessBrasColors ? displayColors(brasStraplessColors, color) : null )}
                    {(wirelessBrasColors ? displayColors(brasWirelessColors, color) : null )}
                    {(colorsBra ? displayColors(brasColors, color) : null )}
                    {(colorsClassicPanties ? displayColors(pantiesClassicColors, color) : null )}
                    {(colorsThongsPanties ? displayColors(pantiesThongsColors, color) : null )}
                    {(colorsSlimmingPanties ? displayColors(pantiesSlimmingColors, color) : null )}
                    {(colorsBrazilianPanties ? displayColors(pantiesBrazilianColors, color) : null )}
                    {(colorsPanties ? displayColors(pantiesColors, color) : null )}
                    {(colorsSleepwearBottoms ? displayColors(sleepwearBottomsColors, color) : null )}
                    {(colorsSleepwearLong ? displayColors(sleepwearLongColors, color) : null )}
                    {(colorsSleepwearShort ? displayColors(sleepwearShortColors, color) : null )}
                    {(colorsSleepwearTops ? displayColors(sleepwearTopsColors, color) : null )}
                    {(colorsSleepwear ? displayColors(sleepwearColors, color) : null )}
                    {(colorsBodysuits ? displayColors(accsBodysuitsColors, color) : null )}
                    {(colorsTights ? displayColors(accsTightsColors, color) : null )}
                    {(colorsSlippers ? displayColors(accsSlippersColors, color) : null )}
                    <div className="filter-btns">
                      <button className="btn apply-btn" onClick={handleColorFilter}>Apply</button>
                      <button className="btn remove-btn" onClick={dropColorFilter}>Remove</button>
                    </div>
                  </ul>
              </div>
              {/* Search by BRAS size */}
              <div className={"filter size-filter " + (brasSize ? "bra-size-filter-visible" : null)}>
                <p className="filter-title" onClick={handleSizeFilter}>Size <i className="fas fa-sort-down"></i></p>
                  <ul className = {"filter-list size-list " + (sizeFilter ? "size-container-visible" : null)}>
                    {braSize.map((size, index) => {
                      return (
                        <li className={"filter-item " + (size === sizes ? "active-item" : null)} key={index} onClick={() => {handleFilter("sizes", size)}}> {size} </li>
                      )
                    })}
                    <div className="filter-btns size-btns">
                      <button className="btn apply-btn" onClick={handleSizeFilter}>Apply</button>
                      <button className="btn remove-btn" onClick={dropSizeFilter}>Remove</button>
                    </div>
                  </ul>
                  
              </div>

              {/* Search by CUP size */}
              <div className={"filter size-filter " + (cupSize ? "cup-size-filter-visible" : null)}>
                <p className="filter-title" onClick={handleCupFilter}>Cup <i className="fas fa-sort-down"></i></p>
                  <ul className = {"filter-list size-list " + (cupFilter ? "size-container-visible" : null)}>
                    {braCups.map((cupSize, index) => {
                      return (
                        <li className={"filter-item " + (cupSize === cup ? "active-item" : null)} key={index} onClick={() => handleFilter("cup", cupSize)}> {cupSize} </li>
                      )
                    })}
                    <div className="filter-btns size-btns">
                      <button className="btn apply-btn" onClick={handleCupFilter}>Apply</button>
                      <button className="btn remove-btn" onClick={dropCupFilter}>Remove</button>
                    </div>
                  </ul>
              </div>

              {/* Search by PANTIES and SLEEPWEAR size */}
              <div className={"filter size-filter " + (uniSize ? "size-filter-visible" : null)}>
                <p className="filter-title" onClick={handleSizeFilter}>Size <i className="fas fa-sort-down"></i></p>
                  <ul className = {"filter-list size-list " + (sizeFilter ? "size-container-visible" : null)}>
                    {uniSizeSet.map((uniSizes, index) => {
                      return (
                        <li className={"filter-item " + (uniSizes === sizes ? "active-item" : null)} key={index} onClick={() => handleFilter("sizes", uniSizes)}> {uniSizes} </li>
                      )
                    })}
                    <div className="filter-btns size-btns">
                      <button className="btn apply-btn" onClick={handleSizeFilter}>Apply</button>
                      <button className="btn remove-btn" onClick={dropSizeFilter}>Remove</button>
                    </div>
                  </ul>
              </div>

              {/* Search by TIGHTS size */}
              <div className={"filter size-filter " + (tightsSize ? "tights-size-filter-visible" : null)}>
                <p className="filter-title" onClick={() =>handleSizeFilter}>Size <i className="fas fa-sort-down"></i></p>
                  <ul className = {"filter-list tights-list " + (sizeFilter ? "tights-container-visible" : null)}>
                    {tightsSizeSet.map((tightsSize, index) => {
                      return (
                        <li className={"filter-item tights-item " + (tightsSize === sizes ? "active-item" : null)} key={index} onClick={() => handleFilter("sizes", tightsSize)}> {tightsSize} </li>
                      )
                    })}
                    <div className="filter-btns size-btns">
                      <button className="btn apply-btn" onClick={handleSizeFilter}>Apply</button>
                      <button className="btn remove-btn" onClick={dropSizeFilter}>Remove</button>
                    </div>
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
                    <div className="filter-btns size-btns">
                      <button className="btn apply-btn" onClick={handleSizeFilter}>Apply</button>
                      <button className="btn remove-btn" onClick={dropSizeFilter}>Remove</button>
                    </div>
                  </ul>
              </div>

              {/* Search by PRICE */}
              <div className="filter price-filter">
                <p className="filter-title" onClick={handlePriceFilter}>Price <i className="fas fa-sort-down"></i></p>
                <div className={"price-container " + (priceFilter ? "price-window-visible" : null)}>
                  <label htmlFor="price"><p className="price-screen">under ${price}</p></label>
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
                  <div className="filter-btns">
                      <button className="btn apply-btn" onClick={handlePriceFilter}>Apply</button>
                      <button className="btn remove-btn" onClick={dropPriceFilter}>Remove</button>
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
