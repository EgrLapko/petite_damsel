import React, { Component } from 'react';
import {ProductConsumer} from '../../context';

export default class MainPage extends Component {
  render() {
    return (
      <div>
      <ProductConsumer>
        {value => {
          return <h1>Hello from homepage context</h1>
          }}
      </ProductConsumer>
      </div>
    )
  }
}
