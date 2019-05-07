import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ProductConsumer, ProductProvider} from '../../context';

export default class Sidebar extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {links, sidebarOpen, handleSideBar} = value;
          return (
            <ul className={"slide-bar " + (sidebarOpen ? "bar-visible" : null)}>
                {links.map(link => {
                  return (
                    <li className="slidebar-item" key={link.id}>
                      <img src={link.image} alt=""/>
                      <Link to={link.path} className="slidebar-link" onClick={handleSideBar} > {link.text} </Link>
                    </li>             
                  )
                })}
            </ul>
          )
        }}
      </ProductConsumer>
    )
  }
}
