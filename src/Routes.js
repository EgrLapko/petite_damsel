import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './components/Pages/HomePage';
import LoginPage from './components/Pages/LoginPage';
import AboutPage from './components/Pages/AboutPage';
import ContactPage from './components/Pages/ContactPage';
import ProductsPage from './components/Pages/ProductsPage';
import DefaultPage from './components/Pages/DefaultPage';
import SingleProductPage from './components/Pages/SingleProductPage';
import CartPage from './components/Pages/CartPage';

export default class Routes extends Component {
  render() {
    return (
    <Switch>
        <Route exact path = '/' component={HomePage} />
        <Route path = '/login' component={LoginPage} />
        <Route path = '/about' component={AboutPage} />
        <Route path = '/contact' component={ContactPage} />
        <Route path = '/products/:category' exact component={ProductsPage} />
        <Route path = {`/products/single/:id`} component={SingleProductPage} />
        <Route path = '/cart' component={CartPage} />
        <Route component={DefaultPage} />
      </Switch>
    )
  }
}
