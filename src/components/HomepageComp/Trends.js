import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Trends extends Component {
  render() {

    const {title, description, btnName, url, link} = this.props;

    const divstyle = {backgroundImage: `url(${url})`};

    return (
        <div className="trends-card" style={divstyle}>     
            <div  className="trends-text-wrapper">              
                <h2 className="trends-title" > {title}</h2>
                <p className="trends-description">{description}</p> 
                <Link to = {link}> <h4 className="trends-btn">{btnName}</h4></Link>                            
            </div>                                             
        </div>
    )
  }
}


