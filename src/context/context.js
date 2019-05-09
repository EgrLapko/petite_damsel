import React, { Component } from 'react';
import {linkData} from './linkData';

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
        cartItems: 0,
        links: linkData,
        cart: [],
        registerOpen: false
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