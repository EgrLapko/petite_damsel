import React, { Component } from 'react';
import {ProductConsumer} from '../../context';
import {Route} from 'react-router-dom';
import Title from '../Title/Title';
import ProductCard from '../ProductCard';


export default class Products extends Component {
  render() {
    return (
      <React.Fragment>

        <Route path="/products/bras/classic" render={() =>   
          <ProductConsumer>
            {value => {
                  const {filteredProducts} = value;
                  return (
                      <div className="products-list">
                        <Title title="classic bras" />
                        <div className="products-container">
                        {filteredProducts.map(product => product.category === "Bras, classic" && 
                          <ProductCard 
                            key={product.id}
                            product = {product}
                          />
                        )}
                        </div>
                      </div>
                  )  
              }}
          </ProductConsumer>  
        }/>

      <Route path="/products/bras/pushup" render={() =>     
        <ProductConsumer>
          {value => {
                const {filteredProducts} = value;
                return (
                    <div className="products-list">
                      <Title title="push-up bras" />
                      <div className="products-container">
                      {filteredProducts.map(product => product.category === "Bras, push-up" && 
                        <ProductCard 
                          key={product.id}
                          product = {product}
                        />
                      )}
                      </div>
                    </div>
                )  
            }}
        </ProductConsumer>   
        }/>

      

      </React.Fragment>
    )
  }
}
