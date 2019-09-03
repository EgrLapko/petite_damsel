import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Trends extends Component {
  render() {

    const {title, description, btnName, btnName2, url, link, titleBottom, descBottom} = this.props;

    const divstyle = {backgroundImage: `url(${url})`};

    return (
      <section className="trends">
        <div className="trends-card" style={divstyle}>     
            <div  className="trends-text-wrapper">              
                <h2 className="trends-title" > {title}</h2>
                <p className="trends-description">{description}</p> 
                <Link to = {link}> <button className="btn pink-btn">{btnName}</button></Link>                            
            </div>                                           
        </div>
        <h1 className="trends-bottom-title">{titleBottom}</h1>
        <h3 className="trends-bottom-description">{descBottom}</h3>
        <button className="btn">{btnName2}</button>
      </section>    
    )
  }
}


