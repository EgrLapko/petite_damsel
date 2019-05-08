import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';

export default class Products extends Component {
  render() {

    return (
      <React.Fragment>
        <div className="product-list">
          <ul>
            <li><Link to='/products/bras/classic'>Bras classic</Link></li>
            <li><Link to='/products/bras/pushup'>Bras classic</Link></li>
          </ul>
    
          <Route path = '/products/bras/classic' render={() => <h3>Bras Classic</h3>} />
          <Route path = '/products/bras/pushup' render={() => <h3>Bras Pushup</h3>} />
        </div>

      </React.Fragment>
      
    )
  }
}
