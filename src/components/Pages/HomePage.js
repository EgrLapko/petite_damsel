import React, { Component } from 'react';

import Trends from '../HomepageComp/Trends';

export default class MainPage extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <div className="trends-container">
          <Trends 
            url = './images/homepage_ads/trends1.jpg'
            title = 'segreto'
            description = 'take a look at our new special collection'
            btnName = 'discover'
            link = 'products/collections/segreto'
          />

          <Trends 
            url = './images/homepage_ads/trends2.jpg'
            title = 'feel the summer!'
            description = 'discover our new swimwear collection'
            btnName = 'discover'
            link = 'products/collections/swimwear'
          />
        </div>
      </React.Fragment>
    )
  }
}
