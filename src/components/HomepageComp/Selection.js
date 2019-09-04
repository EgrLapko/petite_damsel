import React, { Component } from 'react'

export default class Selections extends Component {
  render() {

    const {url, description, title, btnName, titleBottom, descBottom, btnNameBottom} = this.props;
    const divstyle = {backgroundImage: `url(${url})`};

    return (
      <div className="sel-wrapper">
        <div className="sel-card">  
          <div className="sel-image" style={divstyle}>
            <div  className="sel-text-wrapper">
              <p className="sel-description" > {description} </p>
              <h2 className="sel-title" > {title} </h2>   
              <button className="btn white-btn" > {btnName} </button>            
            </div>        
          </div>                        
        </div>
        <div className="sel-bottom-container">
          <h2 className="sel-bottom-title">{titleBottom}</h2>
          <h4 className="sel-bottom-desc">{descBottom}</h4>
          <button className="btn" > {btnNameBottom} </button>  
        </div>
      </div>    
    )
  }
}
