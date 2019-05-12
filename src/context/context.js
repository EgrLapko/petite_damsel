import React, { Component } from 'react';
import {linkData} from './linkData';
import {items} from './productsData';
// Creating React Context
const ProductContext = React.createContext();
// Provider
// Consumer

class ProductProvider extends Component {

    state = {
        sidebarOpenBra: false,
        sidebarOpenPanty: false,
        sidebarOpenSleepwear: false,
        sidebarOpenAccs: false,
        cartOpen: false, 
        links: linkData,
        registerOpen: false,
        hamburgerOpen: false,
        cart: [],
        cartItems: 0,
        cartSubtotal: 0,
        cartTax: 0,
        cartTotal: 0,
        storeProducts: [],
        filteredProducts: [],
        featuredProducts: [],
        singleProduct: {},
        loading: false     
    };

componentDidMount() {
// --- from contentful items

    this.setProducts(items);
}

// ---------- set products
setProducts = (products) => {
    // Destructuring and grabbing items from
    // data base 
    let storeProducts = products.map(item => {
        const {id} = item.sys;
        const product = {id, ...item.fields};
        return product;
    });
    // grabbing featured items
let featuredProducts = storeProducts.filter(item => 
    item.featured === true);
    // assigning values to a state
this.setState({
    storeProducts: storeProducts,
    filteredProducts: storeProducts,
    featuredProducts: featuredProducts,
    cart: this.getStorageCart(),
    singleProduct: this.getStorageProduct(),
    loading: false
})
};

// Get cart from local storage
getStorageCart = () => {
    return []; 
}
// Get product from local storage
getStorageProduct = () => {
    return [];
}
// get totals
getTotals = () => {};
// add totals
addTotals = () => {};
// sync storage
syncStorage = () => {

};
// add to cart
addToCart = (id) => {
    console.log(`add to cart ${id}`);
}
//  set single product
setSingleProduct = (id) => {
    console.log(`set single product ${id}`);
}



// ---------- Open Sidebar menu
    handleSidebarBra = () => {
        this.setState({
            sidebarOpenBra: ! this.state.sidebarOpenBra,
            sidebarOpenPanty: false,
            sidebarOpenSleepwear: false,
            sidebarOpenAccs: false
        })

    }

    handleSidebarPanty = () => {
        this.setState({
            sidebarOpenPanty: ! this.state.sidebarOpenPanty,
            sidebarOpenBra: false,
            sidebarOpenSleepwear: false,
            sidebarOpenAccs: false,
         })
    }

    closeMenu = () => {
        this.setState({
            sidebarOpenBra: false,
            sidebarOpenPanty: false,
            sidebarOpenSleepwear: false,
            sidebarOpenAccs: false,
            sidebarOpenCol: false
        })
    }

    handleSidebarSleepwear = () => {
        this.setState({
            sidebarOpenSleepwear: ! this.state.sidebarOpenSleepwear,
            sidebarOpenPanty: false,
            sidebarOpenBra: false, 
            sidebarOpenAccs: false,
         })
    }

    handleSidebarAccs = () => {
        this.setState({
            sidebarOpenAccs: ! this.state.sidebarOpenAccs,
            sidebarOpenPanty: false,
            asidebarOpenBra: false, 
            sidebarOpenSleepwear: false
         })
    }

// ---------- Open hamburger menu
    handleHamburger = () => {
        this.setState({hamburgerOpen: ! this.state.hamburgerOpen })
    }

// ---------- Open sidecart menu
    handleCart = () => {
        this.setState({cartOpen: ! this.state.cartOpen })
    }

// ---------- Open sidecart menu
    handleRegister = () => {
        this.setState({registerOpen: ! this.state.registerOpen})
    }


// ---------- Closing Cart
    closeCart = () => {
        this.setState({cartOpen: false })
    }

// ---------- Opening Cart
    openCart = () => {
        this.setState({cartOpen: true })
    }

    render() {
        return(
            // Creating product provider
            // Here insert everything that wanted to be passed
            <ProductContext.Provider value={{
                // Passing all states with spread operator
                ...this.state,
                handleSidebarBra: this.handleSidebarBra,
                handleSidebarPanty: this.handleSidebarPanty,
                handleSidebarSleepwear: this.handleSidebarSleepwear,
                handleSidebarAccs: this.handleSidebarAccs,
                handleCart: this.handleCart,
                closeCart: this.closeCart,
                openCart: this.openCart,
                handleRegister: this.handleRegister,
                handleHamburger: this.handleHamburger,
                addToCart: this.addToCart,
                setSingleProduct: this.setSingleProduct                
            }}>
                {/* Super important stuff */}
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

// Creating product consumer which will pass shit
const ProductConsumer = ProductContext.Consumer;


export {ProductProvider, ProductConsumer};