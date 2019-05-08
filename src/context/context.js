import React, { Component } from 'react';
import {linkData} from './linkData';

// Creating React Context
const ProductContext = React.createContext();
// Provider
// Consumer

class ProductProvider extends Component {

    state = {
        sidebarOpen: false,
        cartOpen: false,
        cartItems: 0,
        links: linkData,
        cart: [],
        registerOpen: false
    }

// ---------- Open Sidebar menu
    handleSidebar = () => {
        this.setState({sidebarOpen: ! this.state.sidebarOpen })
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
                handleSidebar: this.handleSidebar,
                handleCart: this.handleCart,
                closeCart: this.closeCart,
                openCart: this.openCart,
                handleRegister: this.handleRegister                
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