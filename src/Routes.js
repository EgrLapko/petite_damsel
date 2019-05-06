import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import MainPage from './components/Main_page/MainPage';
import Login from './components/Login/Login';

export default class Routes extends Component {
  render() {
    return (
    <Switch>
        <Route exact path = '/' component={MainPage} />
        <Route path = '/login' component={Login} />
      </Switch>
    )
  }
}
