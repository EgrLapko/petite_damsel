import React, { Component } from 'react';
import {ProductConsumer} from '../../context';
import {Route} from 'react-router-dom';
import Title from '../Title/Title';
import ProductCard from '../ProductCard';
import ProductFilter from '../ProductspageComp/ProductFilter';
import LocalNavbar from './LocalNavbar';


export default class Products extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

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
                        <LocalNavbar menu="bra"/>
                        <ProductFilter cupSize brasSize classicBrasColors />
                        <div className="filters-display">
                          <p className="filters-display-item"> {brasClassic.length} items </p>
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
                        <LocalNavbar menu="bra"/>
                        <ProductFilter cupSize brasSize pushupBrasColors />
                        <div className="filters-display">
                          <p className="filters-display-item"> {brasPushup.length} items </p>
                        </div>
                        <div className="products-container">
                          {brasPushup.length === 0 ? (
                            <div>
                              <Title title="No items matched" />
                            </div>
                          ) : (
                            brasPushup.map(product => (
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

        <Route path="/products/bras_strapless" render={() =>     
          <ProductConsumer>
            {value => {
                  const {filteredProducts} = value;
                  const brasStrapless= filteredProducts.filter(product => product.category === "Bras, strapless");
                  return (
                      <div className="products-list">
                        <Title title="strapless bras" />
                        <LocalNavbar menu="bra"/>
                        <ProductFilter cupSize brasSize straplessBrasColors/>
                        <div className="filters-display">
                          <p className="filters-display-item"> {brasStrapless.length} items </p>
                        </div>
                        <div className="products-container">
                          {brasStrapless.length === 0 ? (
                            <div>
                              <Title title="No items matched" />
                            </div>
                          ) : (
                            brasStrapless.map(product => (
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

        <Route path="/products/bras_wireless" render={() =>     
          <ProductConsumer>
            {value => {
                  const {filteredProducts} = value;
                  const brasWireless= filteredProducts.filter(product => product.category === "Bras, wireless");
                  return (
                      <div className="products-list">
                        <Title title="wireless bras" />
                        <LocalNavbar menu="bra"/>
                        <ProductFilter cupSize brasSize wirelessBrasColors/>
                        <div className="filters-display">
                          <p className="filters-display-item"> {brasWireless.length} items </p>
                        </div>
                        <div className="products-container">
                          {brasWireless.length === 0 ? (
                            <div>
                              <Title title="No items matched" />
                            </div>
                          ) : (
                            brasWireless.map(product => (
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

        <Route path="/products/bras" render={() =>     
          <ProductConsumer>
            {value => {
                  const {filteredProducts} = value;
                  const brasAll = filteredProducts.filter(product => product.type === "Bras");

                  return (
                      <div className="products-list">
                        <Title title="bras. all-in" />
                        <LocalNavbar menu="bra"/>
                        <ProductFilter cupSize brasSize colorsBra />
                        <div className="filters-display">
                          <p className="filters-display-item"> {brasAll.length} items </p>
                        </div>
                        <div className="products-container">
                          {brasAll.length === 0 ? (
                            <div>
                              <Title title="No items matched" />
                            </div>
                          ) : (
                            brasAll.map(product => (
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

        <Route path="/products/panties_classic" render={() =>     
          <ProductConsumer>
            {value => {
                  const {filteredProducts} = value;
                  const pantiesClassic= filteredProducts.filter(product => product.category === "Panties, classic");
                  return (
                      <div className="products-list">
                        <Title title="classic panties" />
                        <LocalNavbar menu="panties"/>
                        <ProductFilter uniSize colorsClassicPanties />
                        <div className="filters-display">
                          <p className="filters-display-item"> {pantiesClassic.length} items </p>
                        </div>
                        <div className="products-container">
                          {pantiesClassic.length === 0 ? (
                            <div>
                              <Title title="No items matched" />
                            </div>
                          ) : (
                            pantiesClassic.map(product => (
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


        <Route path="/products/panties_thongs" render={() =>     
          <ProductConsumer>
            {value => {
                  const {filteredProducts} = value;
                  const pantiesThongs= filteredProducts.filter(product => product.category === "Panties, thongs");
                  return (
                      <div className="products-list">
                        <Title title="thongs" />
                        <LocalNavbar menu="panties"/>
                        <ProductFilter uniSize colorsThongsPanties/>
                        <div className="filters-display">
                          <p className="filters-display-item"> {pantiesThongs.length} items </p>
                        </div>
                        <div className="products-container">
                          {pantiesThongs.length === 0 ? (
                            <div>
                              <Title title="No items matched" />
                            </div>
                          ) : (
                            pantiesThongs.map(product => (
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

        <Route path="/products/panties_slimming" render={() =>     
          <ProductConsumer>
            {value => {
                  const {filteredProducts} = value;
                  const pantiesSlimming= filteredProducts.filter(product => product.category === "Panties, slimming");
                  return (
                      <div className="products-list">
                        <Title title="slimming panties" />
                        <LocalNavbar menu="panties"/>
                        <ProductFilter uniSize colorsSlimmingPanties/>
                        <div className="filters-display">
                          <p className="filters-display-item"> {pantiesSlimming.length} items </p>
                        </div>
                        <div className="products-container">
                          {pantiesSlimming.length === 0 ? (
                            <div>
                              <Title title="No items matched" />
                            </div>
                          ) : (
                            pantiesSlimming.map(product => (
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

        <Route path="/products/panties_brazilian" render={() =>     
          <ProductConsumer>
            {value => {
                  const {filteredProducts} = value;
                  const pantiesBrazilian= filteredProducts.filter(product => product.category === "Panties, brazilian");
                  return (
                      <div className="products-list">
                        <Title title="brazilian panties" />
                        <LocalNavbar menu="panties"/>
                        <ProductFilter uniSize colorsBrazilianPanties/>
                        <div className="filters-display">
                          <p className="filters-display-item"> {pantiesBrazilian.length} items </p>
                        </div>
                        <div className="products-container">
                          {pantiesBrazilian.length === 0 ? (
                            <div>
                              <Title title="No items matched" />
                            </div>
                          ) : (
                            pantiesBrazilian.map(product => (
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

        <Route path="/products/panties_all" render={() =>     
          <ProductConsumer>
            {value => {
                  const {filteredProducts} = value;
                  const pantiesAll = filteredProducts.filter(product => product.type === "Panties");
                  return (
                      <div className="products-list">
                        <Title title="panties. all-in" />
                        <LocalNavbar menu="panties"/>
                        <ProductFilter uniSize colorsPanties/>
                        <div className="filters-display">
                          <p className="filters-display-item"> {pantiesAll.length} items </p>
                        </div>
                        <div className="products-container">
                          {pantiesAll.length === 0 ? (
                            <div>
                              <Title title="No items matched" />
                            </div>
                          ) : (
                            pantiesAll.map(product => (
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

        <Route path="/products/sleepwear_bottoms" render={() =>     
          <ProductConsumer>
            {value => {
                  const {filteredProducts} = value;
                  const sleepBottoms= filteredProducts.filter(product => product.category === "Sleepwear, bottoms");
                  return (
                      <div className="products-list">
                        <Title title="sleepwear. bottoms" />
                        <LocalNavbar menu="sleepwear"/>
                        <ProductFilter uniSize colorsSleepwearBottoms/>
                        <div className="filters-display">
                          <p className="filters-display-item"> {sleepBottoms.length} items </p>
                        </div>
                        <div className="products-container">
                          {sleepBottoms.length === 0 ? (
                            <div>
                              <Title title="No items matched" />
                            </div>
                          ) : (
                            sleepBottoms.map(product => (
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

        <Route path="/products/sleepwear_long" render={() =>     
          <ProductConsumer>
            {value => {
                  const {filteredProducts} = value;
                  const sleepLong= filteredProducts.filter(product => product.category === "Sleepwear, long");
                  return (
                      <div className="products-list">
                        <Title title="sleepwear. long" />
                        <LocalNavbar menu="sleepwear"/>
                        <ProductFilter uniSize colorsSleepwearLong/>
                        <div className="filters-display">
                          <p className="filters-display-item"> {sleepLong.length} items </p>
                        </div>
                        <div className="products-container">
                          {sleepLong.length === 0 ? (
                            <div>
                              <Title title="No items matched" />
                            </div>
                          ) : (
                            sleepLong.map(product => (
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

        <Route path="/products/sleepwear_short" render={() =>     
          <ProductConsumer>
            {value => {
                  const {filteredProducts} = value;
                  const sleepShort= filteredProducts.filter(product => product.category === "Sleepwear, short");
                  return (
                      <div className="products-list">
                        <Title title="sleepwear. short" />
                        <LocalNavbar menu="sleepwear"/>
                        <ProductFilter uniSize colorsSleepwearShort/>
                        <div className="filters-display">
                          <p className="filters-display-item"> {sleepShort.length} items </p>
                        </div>
                        <div className="products-container">
                          {sleepShort.length === 0 ? (
                            <div>
                              <Title title="No items matched" />
                            </div>
                          ) : (
                            sleepShort.map(product => (
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

        <Route path="/products/sleepwear_tops" render={() =>     
          <ProductConsumer>
            {value => {
                  const {filteredProducts} = value;
                  const sleepTops= filteredProducts.filter(product => product.category === "Sleepwear, tops");
                  return (
                      <div className="products-list">
                        <Title title="sleepwear. tops" />
                        <LocalNavbar menu="sleepwear"/>
                        <ProductFilter uniSize colorsSleepwearTops/>
                        <div className="filters-display">
                          <p className="filters-display-item"> {sleepTops.length} items </p>
                        </div>
                        <div className="products-container">
                          {sleepTops.length === 0 ? (
                            <div>
                              <Title title="No items matched" />
                            </div>
                          ) : (
                            sleepTops.map(product => (
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

        <Route path="/products/sleepwear_all" render={() =>     
          <ProductConsumer>
            {value => {
                  const {filteredProducts} = value;
                  const allSleep= filteredProducts.filter(product => product.type === "Sleepwear");
                  return (
                      <div className="products-list">
                        <Title title="sleepwear. all-in" />
                        <LocalNavbar menu="sleepwear"/>
                        <ProductFilter uniSize colorsSleepwear/>
                        <div className="filters-display">
                          <p className="filters-display-item"> {allSleep.length} items </p>
                        </div>
                        <div className="products-container">
                          {allSleep.length === 0 ? (
                            <div>
                              <Title title="No items matched" />
                            </div>
                          ) : (
                            allSleep.map(product => (
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

        <Route path="/products/accessories_bodysuits" render={() =>     
          <ProductConsumer>
            {value => {
                  const {filteredProducts} = value;
                  const accsBody= filteredProducts.filter(product => product.category === "Accessories, bodysuits");
                  return (
                      <div className="products-list">
                        <Title title="bodysuits" />
                        <LocalNavbar menu="accs"/>
                        <ProductFilter uniSize cupSize colorsBodysuits/>
                        <div className="filters-display">
                          <p className="filters-display-item"> {accsBody.length} items </p>
                        </div>
                        <div className="products-container">
                          {accsBody.length === 0 ? (
                            <div>
                              <Title title="No items matched" />
                            </div>
                          ) : (
                            accsBody.map(product => (
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

        <Route path="/products/accessories_tights" render={() =>     
          <ProductConsumer>
            {value => {
                  const {filteredProducts} = value;
                  const accsTights= filteredProducts.filter(product => product.category === "Accessories, tights");
                  return (
                      <div className="products-list">
                        <Title title="Accessories, tights" />
                        <LocalNavbar menu="accs"/>
                        <ProductFilter tightsSize colorsTights/>
                        <div className="filters-display">
                          <p className="filters-display-item"> {accsTights.length} items </p>
                        </div>
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
                        <LocalNavbar menu="accs"/>
                        <ProductFilter shoesSize colorsSlippers/>
                        <div className="filters-display">
                          <p className="filters-display-item"> {accsSlippers.length} items </p>
                        </div>
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
                        <LocalNavbar menu="accs"/>
                        <div className="filters-display">
                          <p className="filters-display-item"> {accsOther.length} items </p>
                        </div>
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
