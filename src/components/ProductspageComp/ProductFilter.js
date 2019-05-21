import React, { Component } from 'react';
import {ProductConsumer} from '../../context';

export default class ProductFilter extends Component {


  // checkItemCup = (arr, value) => {
  //   const filteredItems = arr.filter(item => item.cup.includes(value))
  //   return (
  //     filteredItems.map(item => (
  //       <ProductCard 
  //         key={item.id}
  //         product = {item}
  //       />
  //     ))
  //   )
  // }

  logItems = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    return (
      console.log(`the name is ${name}, the value is ${value}`)
    )
  }

  render() {
    return (
      <ProductConsumer>
        {value => {
          const {search, min, max, color, shipping,cup, price, handleChange, storeProducts, handlePriceFilter, priceFilter,
          handleCupFilter, cupFilter} = value;


          let brasAll = storeProducts.filter(item => item.category === "Bras, classic");
          let takeCup = brasAll.map(item => item.cup);
          console.log(takeCup);

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

              <div className="category-search filter">
                <select name="cup" 
                        id="cup"
                        onChange={handleChange} 
                        className="filter-item select">
                  <option value="all" >all</option>
                  <option value="A" >A</option>
                  <option value="B" >B</option>
                  <option value="C" >C</option>
                  <option value="D" >D</option>
                </select>
              </div>

              
              {/* Search by cup */}

              {/* <div className="cup-filter filter"><p className="filter-title" onClick={handleCupFilter}>Cup <i className="fas fa-sort-down"></i></p>
                <div className={"cup-container " + (cupFilter ? "cup-visible" : null)}>
                  <ul className="cup-filter-list">
                    <li className="cup-item">
                      <p className="cup-filter-item">all</p>
                    </li>
                    <li className="cup-item">
                      <p className="cup-filter-item" name="A" value="A" onChange={handleChange}>A</p>
                    </li>
                    <li className="cup-item">
                      <p className="cup-filter-item">B</p>
                    </li>
                    <li className="cup-item">
                      <p className="cup-filter-item">C</p>
                    </li>     
                    <li className="cup-item">
                      <p className="cup-filter-item">D</p>
                    </li>
                  </ul>        
                </div>
              </div> */}

              {/* Category search ended */}
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
