import React, { Component } from 'react';
import CollectionBanner from '../CollectionsComponents/CollectionBanner';

export default class Collections extends Component {
    render() {
        return (
            <div className="collections-page">
                <div className="collections-container">
                    <CollectionBanner
                        url = './images/collections/segreto.jpg'
                        title = 'segreto'
                        description = 'open the essence of yours'
                        btnName = 'open'
                        link = 'products/collections/segreto'
                     />
                     <CollectionBanner
                        url = './images/collections/swimwear.jpg'
                        title = 'swim 2019'
                        description = 'see you at the beach!'
                        btnName = 'open'
                        link = 'products/collections/swimwear'
                     />
                </div>        
            </div>
        )
    }
}
