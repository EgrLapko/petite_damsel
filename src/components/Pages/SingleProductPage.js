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
              const {title, category, description, id, price, image, image2, inCart, color} = singleProduct;
              console.log(title, inCart);

              let daLink;

              if (category === "Bras, classic"){daLink = "/products/bras_classic"} 
              else if (category === "Bras, push-up"){daLink = "/products/bras_pushup"}
              else if (category === "Bras, strapless"){daLink = "/products/bras_strapless"}
              else if (category === "Bras, wireless"){daLink = "/products/bras_wireless"}
              else if (category === "Panties, classic"){daLink = "/products/panties_classic"}
              else if (category === "Panties, thongs"){daLink = "/products/panties_thongs"}
              else if (category === "Panties, slimming"){daLink = "/products/panties_slimming"}
              else if (category === "Panties, brazilian"){daLink = "/products/panties_brazilian"}
              else if (category === "Sleepwear, bottoms"){daLink = "/products/sleep_bottoms"}
              else if (category === "Sleepwear, long"){daLink = "/products/sleep_long"}
              else if (category === "Sleepwear, short"){daLink = "/products/sleep_short"}
              else if (category === "Sleepwear, tops"){daLink = "/products/sleep_tops"}
              else if (category === "Accessories, bodysuits"){daLink = "/products/accessories_bodysuits"}
              else if (category === "Accessories, tights"){daLink = "/products/accessories_tights"}
              else if (category === "Accessories, slippers"){daLink = "/products/accessories_slippers"}
              else if (category === "Accessories, other"){daLink = "/products/accessories_other"};

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
                        <p className="text-title details-category"> {category} </p>
                        <p className="details-price"> ${price} </p>
                        <div className="details-item-info">
                          <p className="details-note">Item description:</p>
                          <p className="details-description"> {description} </p>
                        </div>
                        <div className="details-filter">
                          {category === "Bras, classic" || category === "Bras, push-up" || category === "Bras, strapless" || category === "Bras, wireless" ?
                              <div className="size-filter-box">
                                <div className="size-box">
                                  <p>Select a cup:</p>
                                  <ul className="size-list">
                                    <li className="filter-item">A</li>
                                    <li className="filter-item">B</li>
                                    <li className="filter-item">C</li>
                                    <li className="filter-item">D</li>
                                  </ul>
                                </div>
                                <div className="size-box">
                                  <p>Select a size:</p>
                                  <ul className="size-list">
                                    <li className="filter-item">70</li>
                                    <li className="filter-item">75</li>
                                    <li className="filter-item">80</li>
                                    <li className="filter-item">85</li>
                                  </ul>
                                </div> 
                              </div>                  
                          : null}
                          {category === "Panties, classic" || category === "Panties, thongs" || category === "Panties, slimming" || category === "Panties, brazilian" ?
                            <div className="size-filter-box">
                              <div className="size-box">
                                <p>Select a size</p>
                                <ul className="size-list">
                                  <li className="filter-item">XS</li>
                                  <li className="filter-item">S</li>
                                  <li className="filter-item">M</li>
                                  <li className="filter-item">L</li>
                                </ul>
                              </div>
                            </div> 
                          : null}
                        </div>
                        <div className="details-btn">
                          <Link to={daLink}>          
                          <button className="btn btn-details-back">to <span>{category}</span></button></Link> 
                          <button 
                            className={"cart-btn " + (inCart ? "cart-active" : null)} 
                            onClick={() => addToCart(id)}
                            disabled={inCart ? true : false}
                            >
                            {inCart ? (
                                      <p className="in-cart-sign" disabled>
                                        In Cart
                                      </p>
                                    ) : (
                                      <i className="fas fa-cart-plus"/>
                                    )}  
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            )
          }
        }
      </ProductConsumer>
    )
  }
}
