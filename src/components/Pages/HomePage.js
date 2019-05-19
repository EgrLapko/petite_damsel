import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Trends from '../HomepageComp/Trends';
import { Parallax } from 'react-parallax';
import Title from '../Title/Title';
import Selection from '../HomepageComp/Selection';
import InstagramSection from '../InstagramSection/InstagramSection';
import Featured from '../HomepageComp/Featured';
export default class MainPage extends Component {
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
            title = 'summer sale!'
            description = 'up to 60% discount on featured items'
            btnName = 'discover'
            link = 'products/collections/swimwear'
          />
        </div>

        <Parallax
          blur={0}
          bgImage={require('../images/parallax/parallax-banner1.jpg')}
          bgImageAlt="parallax-1"
          strength={300}
          contentClassName="parallax-background"
        >   
          <div className="parallax-content-section">
            <h2 className="parallax-title">swim season 2019</h2>
            <p className="parallax-description">Check out our brand new swimwear collection</p>
            <Link to="/gallery/images_compart"><button className="btn pink-btn btn-parallax">Browse Gallery</button></Link>
          </div>             
        </Parallax>

        <Title 
          title = "meet Segreto"
          description= "Our brand new, highly intimate lingerie collection"
        />

        <div className = "selections-container">
          <Selection 
            url = "./images/selections/sel1.jpg"
            title = "segreto bridal"
            description = "for something special"
            btnName = "browse"
          />
          <Selection 
            url = "./images/selections/sel2.jpg"
            title = "segreto lingerie"
            description = "for something personal"
            btnName = "browse"
          />
          <Selection 
            url = "./images/selections/sel3.jpg"
            title = "segreto hosiery"
            description = "for something tender"
            btnName = "browse"
          />
        </div>

        <Parallax
          blur={0}
          bgImage={require('../images/parallax/parallax-banner2.png')}
          bgImageAlt="parallax-1"
          strength={300}
          contentClassName="parallax-background"
        >   
          <div className="parallax-content-section">
            <h2 className="parallax-title">we`re on instagram!</h2>
            <p className="parallax-description">come find us and become 
            a part of our cozy community</p>
            <button className="btn pink-btn btn-parallax-2"><i className="fab fa-instagram"></i></button>
          </div>             
        </Parallax>

        <Title 
          title = "show us your #pd look"
          description= "share your look with us, add #iampd to your image"
        />

        <InstagramSection />

        <Featured />

      </React.Fragment>
    )
  }
}
