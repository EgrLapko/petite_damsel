import React, { Component } from 'react';
import { ProductConsumer } from '../context/context';

export default class Alert extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const {alert} = value;
                    return (
                        <div className={"alert " + (alert ? "alert-active" : null)}>
                            <p className="alert-text">Please, choose the size</p>
                        </div>
                    )
                }}
            </ProductConsumer>
            
        )
    }
}
