import React, { Component } from 'react'

export default class Title extends Component {
  render() {

    const {title, description} = this.props;

    return (
      <div className="main-title">
        <h2 className="title-main-text"> {title} </h2>
        <p className="title-main-desc"> {description} </p>
      </div>
    )
  }
}
