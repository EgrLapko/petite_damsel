import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../../context';

export default class Sidebar extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {links, 
            sidebarOpenBra, sidebarOpenPanty, sidebarOpenSleepwear, sidebarOpenAccs, 
            handleSidebarBra, handleSidebarPanty, handleSidebarSleepwear, handleSidebarAccs} = value;
          return (
            <React.Fragment>
              <ul className={"slide-bar " + (sidebarOpenBra ? "bar-visible" : null)}>
                  {links.map(link => link.type === "bra" && 
                      <li className="slidebar-item" key={link.id}>
                        <img src={link.image} alt=""/>
                        <Link to={link.path} className="slidebar-link" onClick={handleSidebarBra} > {link.text} </Link>
                      </li>             
                    )
                  }
              </ul>

              <ul className={"slide-bar " + (sidebarOpenPanty ? "bar-visible" : null)}>
                  {links.map(link => link.type === "panty" && 
                      <li className="slidebar-item" key={link.id}>
                        <img src={link.image} alt=""/>
                        <Link to={link.path} className="slidebar-link" onClick={handleSidebarPanty} > {link.text} </Link>
                      </li>             
                    )
                  }
              </ul>

              <ul className={"slide-bar " + (sidebarOpenSleepwear ? "bar-visible" : null)}>
                  {links.map(link => link.type === "sleepwear" && 
                      <li className="slidebar-item" key={link.id}>
                        <img src={link.image} alt=""/>
                        <Link to={link.path} className="slidebar-link" onClick={handleSidebarSleepwear} > {link.text} </Link>
                      </li>             
                    )
                  }
              </ul>

              <ul className={"slide-bar " + (sidebarOpenAccs ? "bar-visible" : null)}>
                  {links.map(link => link.type === "accs" && 
                      <li className="slidebar-item" key={link.id}>
                        <img src={link.image} alt=""/>
                        <Link to={link.path} className="slidebar-link" onClick={handleSidebarAccs} > {link.text} </Link>
                      </li>             
                    )
                  }
              </ul>

              
            </React.Fragment>
            
          )
        }}
      </ProductConsumer>
    )
  }
}
