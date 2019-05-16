import React, { Component } from 'react';
import {ProductConsumer} from '../../context';
import {Route} from 'react-router-dom';
import Title from '../Title/Title';
import ProductCard from '../ProductCard';
import ProductFilter from '../ProductspageComp/ProductFilter';


export default class Products extends Component {
  render() {

    return (
      <React.Fragment>

        <Route path="/products/bras_classic" render={() =>   
          <ProductConsumer>
            {value => {
                  const {filteredProducts} = value;
                  const brasClassic = filteredProducts.filter(product => product.category === "Bras, classic");
                  
                  return (
                      <div className="products-list">
                        <Title title="classic bras" />
                        <ProductFilter />
                        <div className="products-container">
                          <p> {brasClassic.length}Items </p>
                        </div>
                        <div className="products-container">
                          {brasClassic.length === 0 ? (
                            <div>
                              <Title title="No items matched" />
                            </div>
                          ) : (
                            brasClassic.map(product => (
                              <ProductCard 
                                key={product.id}
                                product = {product}
                              />
                          )))}
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
                const brasPushup = filteredProducts.filter(product => product.category === "Bras, push-up");
                return (
                    <div className="products-list">
                      <Title title="push-up bras" />
                      <div className="products-container">
                        {brasPushup.map(product => (
                            <ProductCard 
                              key={product.id}
                              product = {product}
                            />
                        ))}
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
                  const brasStrapless= filteredProducts.filter(product => product.category === "Bras, strapless");
                  return (
                      <div className="products-list">
                        <Title title="strapless bras" />
                        <div className="products-container">
                        {brasStrapless.map(product => (
                            <ProductCard 
                              key={product.id}
                              product = {product}
                            />
                        ))}
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
                  const brasWireless= filteredProducts.filter(product => product.category === "Bras, wireless");
                  return (
                      <div className="products-list">
                        <Title title="wireless bras" />
                        <div className="products-container">
                        {brasWireless.map(product => (
                            <ProductCard 
                              key={product.id}
                              product = {product}
                            />
                        ))}
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
                  const pantiesClassic= filteredProducts.filter(product => product.category === "Panties, classic");
                  return (
                      <div className="products-list">
                        <Title title="Classic panties" />
                        <div className="products-container">
                        {pantiesClassic.map(product => (
                            <ProductCard 
                              key={product.id}
                              product = {product}
                            />
                        ))}
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
                  const pantiesThongs= filteredProducts.filter(product => product.category === "Panties, thongs");
                  return (
                      <div className="products-list">
                        <Title title="Thongs" />
                        <div className="products-container">
                        {pantiesThongs.map(product => (
                            <ProductCard 
                              key={product.id}
                              product = {product}
                            />
                        ))}
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
                  const pantiesSlimming= filteredProducts.filter(product => product.category === "Panties, slimming");
                  return (
                      <div className="products-list">
                        <Title title="Slimming panties" />
                        <div className="products-container">
                        {pantiesSlimming.map(product => (
                            <ProductCard 
                              key={product.id}
                              product = {product}
                            />
                        ))}
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
                  const pantiesBrazilian= filteredProducts.filter(product => product.category === "Panties, brazilian");
                  return (
                      <div className="products-list">
                        <Title title="Brazilian panties" />
                        <div className="products-container">
                        {pantiesBrazilian.map(product => (
                            <ProductCard 
                              key={product.id}
                              product = {product}
                            />
                        ))}
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
                  const sleepBottoms= filteredProducts.filter(product => product.category === "Sleepwear, bottoms");
                  return (
                      <div className="products-list">
                        <Title title="Sleepwear, bottoms" />
                        <div className="products-container">
                        {sleepBottoms.map(product => (
                            <ProductCard 
                              key={product.id}
                              product = {product}
                            />
                        ))}
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
                  const sleepLong= filteredProducts.filter(product => product.category === "Sleepwear, long");
                  return (
                      <div className="products-list">
                        <Title title="Sleepwear, long" />
                        <div className="products-container">
                        {sleepLong.map(product => (
                            <ProductCard 
                              key={product.id}
                              product = {product}
                            />
                        ))}
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
                  const sleepShort= filteredProducts.filter(product => product.category === "Sleepwear, short");
                  return (
                      <div className="products-list">
                        <Title title="Sleepwear, short" />
                        <div className="products-container">
                        {sleepShort.map(product => (
                            <ProductCard 
                              key={product.id}
                              product = {product}
                            />
                        ))}
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
                  const sleepTops= filteredProducts.filter(product => product.category === "Sleepwear, tops");
                  return (
                      <div className="products-list">
                        <Title title="Sleepwear, tops" />
                        <div className="products-container">
                        {sleepTops.map(product => (
                            <ProductCard 
                              key={product.id}
                              product = {product}
                            />
                        ))}
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
                  const accsBody= filteredProducts.filter(product => product.category === "Accessories, bodysuits");
                  return (
                      <div className="products-list">
                        <Title title="Accessories, bodysuits" />
                        <div className="products-container">
                        {accsBody.map(product => (
                            <ProductCard 
                              key={product.id}
                              product = {product}
                            />
                        ))}
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
                  const accsTights= filteredProducts.filter(product => product.category === "Accessories, tights");
                  return (
                      <div className="products-list">
                        <Title title="Accessories, tights" />
                        <div className="products-container">
                        {accsTights.map(product => (
                            <ProductCard 
                              key={product.id}
                              product = {product}
                            />
                        ))}
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
                  const accsSlippers= filteredProducts.filter(product => product.category === "Accessories, slippers");
                  return (
                      <div className="products-list">
                        <Title title="Accessories, slippers" />
                        <div className="products-container">
                        {accsSlippers.map(product => (
                            <ProductCard 
                              key={product.id}
                              product = {product}
                            />
                        ))}
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
                  const accsOther= filteredProducts.filter(product => product.category === "Accessories, other");
                  return (
                      <div className="products-list">
                        <Title title="Accessories, other" />
                        <div className="products-container">
                        {accsOther.map(product => (
                            <ProductCard 
                              key={product.id}
                              product = {product}
                            />
                        ))}
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
