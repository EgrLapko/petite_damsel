import React, { Component } from 'react';
import {ProductConsumer} from '../../context/context';
import {Link} from 'react-router-dom';
import Recent from '../ProductspageComp/Recent';
export default class SingleProductPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <ProductConsumer>
        {value => {
          const {singleProduct, addToCart, recent, brasToCart, chooseBraCup, chooseBraSize, chooseUniSize, uniSizeToCart, setAlert, cart} = value;

          const {title, category, description, id, price, image, image2, cup, sizes, type, featured} = singleProduct;

          let daLink;

          switch (category) {
            case "Bras, classic":
              daLink = "/products/bras_classic";
              break;
            case "Bras, push-up":
              daLink = "/products/bras_pushup";
              break;
            case "Bras, strapless":
              daLink = "/products/bras_strapless";
              break;
            case "Bras, wireless":
              daLink = "/products/bras_wireless";
              break;
            case "Panties, classic":
              daLink = "/products/panties_classic";
              break;
            case "Panties, thongs":
              daLink = "/products/panties_thongs";
              break;
            case "Panties, slimming":
              daLink = "/products/panties_slimming";
              break;
            case "Panties, brazilian":
              daLink = "/products/panties_brazilian";
              break;
            case "Sleepwear, bottoms":
              daLink = "/products/sleep_bottoms";
              break;
            case "Sleepwear, long":
              daLink = "/products/sleep_long";
              break;
            case "Sleepwear, short":
              daLink = "/products/sleep_short";
              break;
            case "Sleepwear, tops":
              daLink = "/products/sleep_tops";
              break;
            case "Accessories, bodysuits":
              daLink = "/products/accessories_bodysuits";
              break;
            case "Accessories, tights":
              daLink = "/products/accessories_tights";
              break;
            case "Accessories, slippers":
              daLink = "/products/accessories_slippers";
              break;
            case "Accessories, other":
              daLink = "/products/accessories_other";
              break;
            default:
              return null
          };

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
                      <div className="prices-wrapper">
                        <p className={"product-price " + (featured ? "price-crossed" : null)}> ${price} </p>
                        <p className={"featured-price " + (featured ? "featured-visible" : null)}> ${(price - (price/100)*60).toFixed(2)} </p>
                      </div>
                      <div className="details-item-info">
                        <p className="details-note">Item description:</p>
                        <p className="details-description"> {description} </p>
                      </div>
                      <div className="details-filter">

                        {type === "Bras" || category === "Accessories, bodysuits" ?
                          <section className="single-personal-container">
                            <div className="size-filter-box">
                              <div className="size-box">
                                <p>cup: <span className="chosen-size">{brasToCart.chosenCup}</span> </p>
                                <ul className="size-list">
                                  {itemsCups.map((cup, index) => {
                                    return (
                                      <li key={index} className={"filter-item " + (brasToCart.chosenCup === cup ? "filter-active" : null)} onClick={() => {chooseBraCup(cup)}}> {cup}</li>
                                    )
                                  }
                                  )}
                                </ul>
                              </div>
                              <div className="size-box">
                                <p>size: <span className="chosen-size">{brasToCart.chosenSize}</span></p>
                                <ul className="size-list">
                                  {itemsSizes.map((size, index) => {
                                    return (
                                      <li key={index} className={"filter-item " + (brasToCart.chosenSize === size ? "filter-active" : null)} onClick={() => {chooseBraSize(size)}}> {size} </li>
                                    )
                                  }
                                  )}
                                </ul>
                              </div> 
                            </div>
                            <div className="details-btn">
                              <Link to={daLink}>          
                              <button className="btn btn-details-back">
                                to <span>{category}</span>
                              </button></Link> 
                              <button className={"cart-btn " + (brasToCart.chosenCup !== '' & brasToCart.chosenSize !== '' && "cart-active")}>
                                {!cart.find(item => item.id === id) 
                                  ? 
                                  <i className="fas fa-cart-plus" onClick={() => brasToCart.chosenCup === '' || brasToCart.chosenSize === '' ? setAlert() : addToCart(id)}/> 
                                  :
                                  <p className="in-cart-sign">In Cart</p>
                                }                                                         
                              </button>
                            </div>
                          </section>                  
                        : null}

                        {type === "Panties" || type === "Sleepwear" || category === "Accessories, tights" || category === "Accessories, slippers" ?
                          <section className="single-personal-container">
                            <div className="size-filter-box">
                              <div className="size-box">
                                <p>size: <span className="chosen-size">{uniSizeToCart}</span></p>
                                <ul className="size-list">
                                  {itemsSizes.map((size, index) => {
                                      return (
                                        <li key={index} 
                                          className={"filter-item " + (uniSizeToCart === size ? "filter-active" : null)}
                                          onClick={() => {chooseUniSize(size)}}
                                        > 
                                          {size} 
                                        </li>
                                      )
                                    }
                                  )}
                                </ul>
                              </div>
                            </div>
                            <div className="details-btn">
                              <Link to={daLink}>          
                              <button className="btn btn-details-back">
                                to <span>{category}</span>
                              </button></Link> 
                              <button className={"cart-btn " + (uniSizeToCart !== '' && "cart-active")}>
                                {!cart.find(item => item.id === id) 
                                  ? 
                                  <i className="fas fa-cart-plus" onClick={() => uniSizeToCart === '' ? setAlert() : addToCart(id)}/> 
                                  :
                                  <p className="in-cart-sign">In Cart</p>
                                }                                                         
                              </button>
                            </div> 
                          </section>
                        : null}

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
