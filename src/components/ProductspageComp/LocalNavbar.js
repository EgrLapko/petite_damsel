import React, { Component } from 'react';
import {ProductConsumer} from '../../context/context';
import {NavLink} from 'react-router-dom';

export default class LocalNavbar extends Component {

  render() {
      const {menu} = this.props
    return (
        <ProductConsumer>
            {value => {
                const {links, dropAllFilters} = value;
                return (
                    <React.Fragment>
                        <ul className={"local-nav " + (menu==="bra" ? "local-nav-bra" : null)}>
                            {links.map(link => link.type === "bra" && 
                                <li className="local-nav-item" key={link.id}>
                                    <NavLink to={link.path} activeClassName="link-active" className="slidebar-link" onClick={dropAllFilters}> {link.text} </NavLink>
                                </li>             
                                )
                            }
                        </ul>

                        <ul className={"local-nav " + (menu==="panties" ? "local-nav-panties" : null)}>
                            {links.map(link => link.type === "panty" && 
                                <li className="local-nav-item" key={link.id}>
                                    <NavLink to={link.path} activeClassName="link-active" className="slidebar-link" onClick={dropAllFilters}> {link.text} </NavLink>
                                </li>             
                                )
                            }
                        </ul>

                        <ul className={"local-nav " + (menu==="sleepwear" ? "local-nav-sleepwear" : null)}>
                            {links.map(link => link.type === "sleepwear" && 
                                <li className="local-nav-item" key={link.id}>
                                    <NavLink to={link.path} activeClassName="link-active" className="slidebar-link" onClick={dropAllFilters}> {link.text} </NavLink>
                                </li>             
                                )
                            }
                        </ul>

                        <ul className={"local-nav " + (menu==="accs" ? "local-nav-sleepwear" : null)}>
                            {links.map(link => link.type === "accs" && 
                                <li className="local-nav-item" key={link.id}>
                                    <NavLink to={link.path} activeClassName="link-active" className="slidebar-link" onClick={dropAllFilters}> {link.text} </NavLink>
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
