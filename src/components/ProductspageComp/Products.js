import React, { Component } from 'react';
import {ProductConsumer} from '../../context';
import {Route} from 'react-router-dom';
import Title from '../Title/Title';
import ProductCard from '../ProductCard';


export default class Products extends Component {
  render() {
    return (
      <React.Fragment>

        <Route path="/products/bras_classic" render={() =>   
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

      <Route path="/products/bras_pushup" render={() =>     
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

        <Route path="/products/bras_strapless" render={() =>     
          <ProductConsumer>
            {value => {
                  const {filteredProducts} = value;
                  return (
                      <div className="products-list">
                        <Title title="strapless bras" />
                        <div className="products-container">
                        {filteredProducts.map(product => product.category === "Bras, strapless" && 
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

        <Route path="/products/bras_wireless" render={() =>     
          <ProductConsumer>
            {value => {
                  const {filteredProducts} = value;
                  return (
                      <div className="products-list">
                        <Title title="wireless bras" />
                        <div className="products-container">
                        {filteredProducts.map(product => product.category === "Bras, wireless" && 
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

        <Route path="/products/panties_classic" render={() =>     
          <ProductConsumer>
            {value => {
                  const {filteredProducts} = value;
                  return (
                      <div className="products-list">
                        <Title title="Classic panties" />
                        <div className="products-container">
                        {filteredProducts.map(product => product.category === "Panties, classic" && 
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


        <Route path="/products/panties_thongs" render={() =>     
          <ProductConsumer>
            {value => {
                  const {filteredProducts} = value;
                  return (
                      <div className="products-list">
                        <Title title="Thongs" />
                        <div className="products-container">
                        {filteredProducts.map(product => product.category === "Panties, thongs" && 
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

        <Route path="/products/panties_slimming" render={() =>     
          <ProductConsumer>
            {value => {
                  const {filteredProducts} = value;
                  return (
                      <div className="products-list">
                        <Title title="Slimming panties" />
                        <div className="products-container">
                        {filteredProducts.map(product => product.category === "Panties, slimming" && 
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

        <Route path="/products/panties_brazilian" render={() =>     
          <ProductConsumer>
            {value => {
                  const {filteredProducts} = value;
                  return (
                      <div className="products-list">
                        <Title title="Brazilian panties" />
                        <div className="products-container">
                        {filteredProducts.map(product => product.category === "Panties, brazilian" && 
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

        <Route path="/products/sleepwear_bottoms" render={() =>     
          <ProductConsumer>
            {value => {
                  const {filteredProducts} = value;
                  return (
                      <div className="products-list">
                        <Title title="Sleepwear, bottoms" />
                        <div className="products-container">
                        {filteredProducts.map(product => product.category === "Sleepwear, bottoms" && 
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

        <Route path="/products/sleepwear_long" render={() =>     
          <ProductConsumer>
            {value => {
                  const {filteredProducts} = value;
                  return (
                      <div className="products-list">
                        <Title title="Sleepwear, long" />
                        <div className="products-container">
                        {filteredProducts.map(product => product.category === "Sleepwear, long" && 
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

        <Route path="/products/sleepwear_short" render={() =>     
          <ProductConsumer>
            {value => {
                  const {filteredProducts} = value;
                  return (
                      <div className="products-list">
                        <Title title="Sleepwear, short" />
                        <div className="products-container">
                        {filteredProducts.map(product => product.category === "Sleepwear, short" && 
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

        <Route path="/products/sleepwear_tops" render={() =>     
          <ProductConsumer>
            {value => {
                  const {filteredProducts} = value;
                  return (
                      <div className="products-list">
                        <Title title="Sleepwear, tops" />
                        <div className="products-container">
                        {filteredProducts.map(product => product.category === "Sleepwear, tops" && 
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

        <Route path="/products/accessories_bodysuits" render={() =>     
          <ProductConsumer>
            {value => {
                  const {filteredProducts} = value;
                  return (
                      <div className="products-list">
                        <Title title="Accessories, bodysuits" />
                        <div className="products-container">
                        {filteredProducts.map(product => product.category === "Accessories, bodysuits" && 
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

        <Route path="/products/accessories_tights" render={() =>     
          <ProductConsumer>
            {value => {
                  const {filteredProducts} = value;
                  return (
                      <div className="products-list">
                        <Title title="Accessories, tights" />
                        <div className="products-container">
                        {filteredProducts.map(product => product.category === "Accessories, tights" && 
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

        <Route path="/products/accessories_slippers" render={() =>     
          <ProductConsumer>
            {value => {
                  const {filteredProducts} = value;
                  return (
                      <div className="products-list">
                        <Title title="Accessories, slippers" />
                        <div className="products-container">
                        {filteredProducts.map(product => product.category === "Accessories, slippers" && 
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

        <Route path="/products/accessories_other" render={() =>     
          <ProductConsumer>
            {value => {
                  const {filteredProducts} = value;
                  return (
                      <div className="products-list">
                        <Title title="Accessories, other" />
                        <div className="products-container">
                        {filteredProducts.map(product => product.category === "Accessories, other" &&
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
