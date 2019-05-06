import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {FaCartPlus} from 'react-icons/fa';
import {ProductConsumer} from '../../context';

export default class Navbar extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {cartItems, handleSidebar, handleCart} = value;
          return (
            <div className="navbar-container">
              <div className="navbar-logo">
              <Link to="/"> <img src="./images/logo.png" alt="" /> </Link>
              </div>
              <ul className="navbar-menu">
                <li className="menu-element">Bras</li>
                <li className="menu-element">Panties</li>
                <li className="menu-element">Sleepwear</li>
                <li className="menu-element">Accessories</li>
                <li className="menu-element">Swimwear</li>
                <li className="menu-element">Collections</li>
                <Link to="/login"><li className="menu-element">Login</li></Link>
              </ul>
              <div className="navbar-cart">
                <p> <FaCartPlus/> </p>
              </div>
            </div>
            )          
        }}
      </ProductConsumer>


      
    )
  }
}
