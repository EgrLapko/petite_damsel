import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {FaShoppingBag} from 'react-icons/fa';
import {ProductConsumer} from '../../context';
import logoPD from './logo.png'

export default class Navbar extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {cartItems, handleSidebarBra, handleSidebarPanty, 
          handleSidebarSleepwear, handleSidebarAccs, handleCart, handleHamburger, hamburgerOpen} = value;
          return (
            <React.Fragment>
              <div className="navbar-container">
                <div className="navbar-logo">     
                <Link to="/"> <img src={logoPD} alt="" /> </Link>               
                </div>
                <ul className="navbar-menu">
                  <li className="menu-element" onClick={handleSidebarBra}>Bras</li>
                  <li className="menu-element" onClick={handleSidebarPanty}>Panties</li>
                  <li className="menu-element" onClick={handleSidebarSleepwear} >Sleepwear</li>
                  <li className="menu-element" onClick={handleSidebarAccs} >Accessories</li>
                  <li className="menu-element">Collections</li>
                  <Link to="/login"><li className="menu-element">Log in</li></Link>
                </ul>
                <div className="navbar-cart">
                  <p className="cart-logo" onClick={handleCart} > <FaShoppingBag/> </p>
                  <div className="cart-items"> {cartItems} </div>
                </div>
              </div>

              <div className="navbar-small">
                <div className="navbar-container-small">
                  <div className="navbar-logo">
                  <Link to="/"> <img src="./images/logo.png" alt="" /> </Link>
                  </div>
                  <div className = "hamburger-container">
                    <p className="hamburger-menu " onClick={handleHamburger}><i className ="fas fa-bars"></i></p>
                  </div>
                  <div className="navbar-cart">
                    <p className="cart-logo" onClick={handleCart} > <FaShoppingBag/> </p>
                    <div className="cart-items"> {cartItems} </div>
                  </div>
                </div>
                <ul className={"navbar-menu-small " + (hamburgerOpen ? "visible" : null)} >
                    <li className="menu-element" onClick={handleSidebarBra}>Bras</li>
                    <li className="menu-element" onClick={handleSidebarPanty}>Panties</li>
                    <li className="menu-element" onClick={handleSidebarSleepwear} >Sleepwear</li>
                    <li className="menu-element" onClick={handleSidebarAccs} >Accessories</li>
                    <li className="menu-element">Collections</li>
                    <Link to="/login"><li className="menu-element">Log in</li></Link>
                </ul>
              </div>
              
            </React.Fragment>
            
            )          
        }}
      </ProductConsumer>


      
    )
  }
}
