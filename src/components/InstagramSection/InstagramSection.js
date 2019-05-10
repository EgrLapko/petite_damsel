import React, { Component } from 'react';
import InstagramPhoto from './InstagramPhoto';

export default class InstagramSection extends Component {
  render() {
    return (
      <div className = "insta-container">
        <InstagramPhoto 
             url = './images/instagram_section/1.jpg'
             instalink = '@somelinkhere'
        />
        <InstagramPhoto 
             url = './images/instagram_section/2.jpg'
             instalink = '@somelinkhere'
        />
        <InstagramPhoto 
             url = './images/instagram_section/3.jpg'
             instalink = '@somelinkhere'
        />
        <InstagramPhoto 
             url = './images/instagram_section/4.jpg'
             instalink = '@somelinkhere'
        />
        <InstagramPhoto 
             url = './images/instagram_section/5.jpg'
             instalink = '@somelinkhere'
        />
        <InstagramPhoto 
             url = './images/instagram_section/6.jpg'
             instalink = '@somelinkhere'
        />
      </div>
    )
  }
}
