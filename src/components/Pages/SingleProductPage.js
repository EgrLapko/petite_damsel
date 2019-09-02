import React, { Component } from 'react';
import {ProductConsumer} from '../../context/context';
import {Link} from 'react-router-dom';
import Recent from '../ProductspageComp/Recent';
export default class SingleProductPage extends Component {

  state = {
    cupSize: '',
    usualSize: '',
    uniSize: '',
    shoeSize: '',
    tightsSize: ''
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  pickSizeCup = (cup) => {
    this.setState({
      cupSize: cup
      })
    }

  pickSize = (size) => {
    this.setState({
      usualSize: size
      })
    }

  render() {
    return (
      <ProductConsumer>
        {value => {
          const {singleProduct, addToCart, loading, recent} = value;

          if(loading) {
            console.log('hello from loading');
            return (
              <h1>product loading...</h1>
            )}
              const {title, category, description, id, price, image, image2, inCart, cup, sizes, type} = singleProduct;

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

              let itemsSizes = sizes.map(size => size);
              const index = itemsSizes.indexOf("all");
              if (index > -1) {
              itemsSizes.splice(index, 1)};

              let itemsCups = cup.map(cup => cup);
              if (index > -1) {
              itemsCups.splice(index, 1)};

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

                          {type === "Bras" || category === "Accessories, bodysuits" ?
                              <div className="size-filter-box">
                                <div className="size-box">
                                  <p>Select a cup:</p>
                                  <ul className="size-list">
                                    {itemsCups.map((cup, index) => {
                                      return (
                                        <li key={index} className={"filter-item " + (this.state.cupSize === cup ? "filter-active" : null)} onClick={() => {this.pickSizeCup(cup)}}> {cup}</li>
                                      )
                                    }
                                    )}
                                  </ul>
                                </div>
                                <div className="size-box">
                                  <p>Select a size:</p>
                                  <ul className="size-list">
                                    {itemsSizes.map((size, index) => {
                                      return (
                                        <li key={index} className={"filter-item " + (this.state.usualSize === size ? "filter-active" : null)} onClick={() => {this.pickSize(size)}}> {size} </li>
                                      )
                                    }
                                    )}
                                  </ul>
                                </div> 
                              </div>                  
                          : null}

                          {type === "Panties" || type === "Sleepwear" || category === "Accessories, tights" || category === "Accessories, slippers" ?
                            <div className="size-filter-box">
                              <div className="size-box">
                                <p>Select a size</p>
                                <ul className="size-list">
                                  {itemsSizes.map((size, index) => {
                                      return (
                                        <li key={index} className="filter-item"> {size} </li>
                                      )
                                    }
                                  )}
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
                  <div className={"recent-items-container " + (recent.length !== 0 ? "recent-visible" : null)}>
                    <Recent />
                  </div>         
                </div>
            )
          }
        }
      </ProductConsumer>
    )
  }
}
