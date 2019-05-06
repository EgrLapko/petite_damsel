import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar-container">
        <div className="navbar-logo">
        <Link to="/"><h3>logo here</h3></Link>
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
          <h3>Cart icon here</h3>
        </div>
      </div>
    )
  }
}
