import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';

export default class ProductCategoriesPage extends Component {
  render() {
    return (
      <div>
        <Route path = '/products/bras/classic' render={() => <h3>Classic Bras</h3>} />
        <Route path = '/products/bras/pushup' render={() => <h3>Push Up Bras</h3>} />  
      </div>
    )
  }
}
