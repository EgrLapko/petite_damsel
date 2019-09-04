import React, { Component } from 'react';

import Trends from '../HomepageComp/Trends';
import { Parallax } from 'react-parallax';
import Title from '../Title/Title';
import Selection from '../HomepageComp/Selection';
import InstagramSection from '../InstagramSection/InstagramSection';
import Featured from '../HomepageComp/Featured';
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
            description = 'tender, intimate, made special for you'
            btnName = 'discover'
            btnName2 = 'browse'
            link = 'products/collections/segreto'
            titleBottom = 'segreto collection'
            descBottom = 'take a look at our new special collection'
          />

          <Trends 
            url = './images/homepage_ads/trends2.jpg'
            title = 'hello, summer!'
            description = 'new day - new discounts, it`s that easy'
            btnName = 'shop featured'
            btnName2 = 'shop'
            link = 'products/collections/swimwear'
            titleBottom = 'summer sale!'
            descBottom = 'up to 60% discount on featured items'
          />
        </div>

        {/* <Parallax
          blur={0}
          bgImage={require('../images/parallax/parallax-banner1.jpg')}
          bgImageAlt="parallax-1"
          strength={800}
          contentClassName="parallax-background"
        >   
          <div className="parallax-content-section">
            <h2 className="parallax-title">swim season 2019</h2>
            <p className="parallax-description">Check out our brand new swimwear collection</p>
            <Link to="/gallery/images_compart"><button className="btn pink-btn btn-parallax">Browse Gallery</button></Link>
          </div>             
        </Parallax> */}

        
        <div className="selections">
          <Title 
            title = "meet Segreto"
            description= "(Our new lingerie collection. Made to be your special secret)"
          />
          <div className = "selections-container">
            <Selection 
              url = "./images/selections/sel1.jpg"
              title = "segreto. bridal"
              description = "for something special"
              btnName = "open"
              titleBottom = "segreto. bridal"
              btnNameBottom = "discover"
            />
            <Selection 
              url = "./images/selections/sel2.jpg"
              title = "segreto. lingerie"
              description = "for something personal"
              btnName = "open"
              titleBottom = "segreto. lingerie"
              btnNameBottom = "discover"
            />
            <Selection 
              url = "./images/selections/sel3.jpg"
              title = "segreto. hosiery"
              description = "for something tender"
              btnName = "open"
              titleBottom = "segreto. hosiery"
              btnNameBottom = "discover"
            />
          </div>
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

      
        <div className="insta-section">
          <Title 
            title = "show us your pd look"
            description= "share your look with us, add #iampd to your image and watch yourself on our main page!"
          />
          <InstagramSection />
        </div>
        
        <div className="featured-section">
          <Title 
            title="todays featured" 
            description= "Our todays discounts! Check the full page for more!"
          />
          <Featured />
        </div>
        

      </React.Fragment>
    )
  }
}
