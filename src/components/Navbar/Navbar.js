import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {FaShoppingBag} from 'react-icons/fa';
import {ProductConsumer} from '../../context';

export default class Navbar extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {cartItems, handleSidebarBra, handleSidebarPanty, handleSidebarSleepwear, handleSidebarAccs, handleCart} = value;
          return (
            <div className="navbar-container">
              <div className="navbar-logo">
              <Link to="/"> <img src="./images/logo.png" alt="" /> </Link>
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
            )          
        }}
      </ProductConsumer>


      
    )
  }
}
