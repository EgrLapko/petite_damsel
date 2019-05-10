import React, { Component } from 'react';

export default class InstagramPhoto extends Component {

  render() {
    const {url, instalink} = this.props;
    const divstyle = {backgroundImage: `url(${url})`};

    return (
    <div className="insta-card" style={divstyle}>
        <div className="middle">
            <p className = "insta-link"> {instalink} </p>
        </div>           
    </div>
    )
  }
}
