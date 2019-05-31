import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class CollectionBanner extends Component {
    render() {

        const {title, description, btnName, url, link} = this.props;

        const divstyle = {backgroundImage: `url(${url})`};

        return (
            <div className="collection-banner" style={divstyle}>     
                <div  className="collection-text-wrapper">              
                    <p className="collection-title" > {title}</p>
                    <p className="collection-description">{description}</p> 
                    <Link to = {link}> <button className="btn white-btn">{btnName}</button></Link>                            
                </div>                                             
            </div>
        )
    }
}
