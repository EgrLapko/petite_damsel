import React, { Component } from 'react';
import {linkData} from '../components/linkData';
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
        recent: [],
        loading: true,  
        search: '',
        price: 0,
        min: 0,
        max: 0,
        color: 'all',
        sizes: 'all',
        cup: 'all', 
        priceFilter: false,
        cupFilter: false,
        colorFilter: false,
        sizeFilter: false,
        sizePanties: false,
    };

componentDidMount() {
// --- from contentful items
console.log(this.state.cart)
    this.setProducts(items);
}

// ---------- set products
setProducts = (products) => {
    // Destructuring and grabbing items from
    // data base 
    let storeProducts = products.map(item => {
        const {id} = item.sys; 
        const image = item.fields.image.fields.file.url;
        const image2 = item.fields.image2.fields.file.url;
        const imageSmall = item.fields.imageSmall.fields.file.url;
        const imageSmall2 = item.fields.imageSmall2.fields.file.url;
        const product = {id, ...item.fields, image, image2, imageSmall, imageSmall2};   
        return product;
    });
    // grabbing featured items
let featuredProducts = storeProducts.filter(item => 
    item.featured === true);
    // get max price
let maxPrice = Math.max(...storeProducts.map(item => item.price));
    // assigning values to a state
this.setState({
    storeProducts: storeProducts,
    filteredProducts: storeProducts,
    featuredProducts: featuredProducts,
    cart: this.getStorageCart(),
    singleProduct: this.getStorageProduct(),
    loading: false,
    price: maxPrice,
    max: maxPrice

}, () => {this.addTotals();
})
};

// Get cart from local storage
getStorageCart = () => {
    let cart;
    if(localStorage.getItem('cart')){
        cart = JSON.parse(localStorage.getItem('cart'))
    } else {
        cart = [];
    } 
    return cart;
};
// Get product from local storage
getStorageProduct = () => {
    return localStorage.getItem('singleProduct') 
        ? JSON.parse(localStorage.getItem('singleProduct'))
        : {};
}
// get totals
getTotals = () => {
    let subTotal = 0;
    let cartItems = 0;
    this.state.cart.forEach(item => {
        subTotal += item.total;
        cartItems += item.count;
    }) 
    subTotal = parseFloat(subTotal.toFixed(2));
    let tax = subTotal * 0.1;
    tax = parseFloat(tax.toFixed(2));
    let total = subTotal + tax;
    total = parseFloat(total.toFixed(2));
    return {
        cartItems,
        subTotal,
        tax,
        total
    }
};
// add totals
addTotals = () => {
    const totals = this.getTotals();
    this.setState({
        cartItems: totals.cartItems,
        cartSubtotal: totals.subTotal,
        cartTax: totals.tax,
        cartTotal: totals.total
    })
};

// sync storage
syncStorage = () => {
    localStorage.setItem('cart', JSON.stringify(this.state.cart));
};

// recently viewed Items
recentItems = (id) => {
    let tempRecent = [...this.state.recent];
    let tempProducts = [...this.state.storeProducts];
    let tempItem = tempRecent.find(item => item.id === id);
    if(!tempItem) {
        tempItem = tempProducts.find(item => item.id === id);
        let recentItem = {...tempItem};
        tempRecent = [...tempRecent, recentItem]
    }
    this.setState(() => {
        return {recent: tempRecent}
    }) 
}

// add to cart
addToCart = (id) => {
    let tempCart = [...this.state.cart];
    let tempProducts = [...this.state.storeProducts];
    let tempItem = tempCart.find(item => item.id === id);
    let product = tempProducts[id];
    product.inCart = true;
    if(!tempItem) {
        tempItem = tempProducts.find(item => item.id === id);
        let total = tempItem.price;
        let cartItem = {...tempItem, count:1, total};
        tempCart = [...tempCart, cartItem]
    } else {
        tempItem.count++;
        tempItem.total = tempItem.price * tempItem.count;
        tempItem.total = parseFloat(tempItem.total.toFixed(2));
    }
    this.setState(() => {
        return {cart: tempCart}
    }, () => {
        this.addTotals();
        this.syncStorage();
        this.openCart();
        console.log(product.inCart);
        this.setSingleProduct(product.id);
    })
};

//  set single product
setSingleProduct = (id) => {
    let product = this.state.storeProducts.find(item => item.id
        === id);
    localStorage.setItem('singleProduct', JSON.stringify(product));
    this.setState({
        singleProduct: {...product},
        loading: false
    });
};



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

// ---------- Open price filter
    handlePriceFilter = () => {
        this.setState({priceFilter: ! this.state.priceFilter})
    }

// ---------- Open size filter
    handleCupFilter = () => {
        this.setState({cupFilter: ! this.state.cupFilter})
    }

// ---------- Open color filter
    handleColorFilter = () => {
        this.setState({colorFilter: ! this.state.colorFilter})
    }

// ---------- Open size filter
    handleSizeFilter = () => {
        this.setState({sizeFilter: ! this.state.sizeFilter})
    }

// ---------- Open size filter
    handlePantiesFilter = () => {
        this.setState({sizePanties: ! this.state.sizePanties})
    }

// ---------- Cart functionality
increment = (id) =>{
    let tempCart = [...this.state.cart];
    const cartItem = tempCart.find(item => item.id === id);
    cartItem.count++;
    cartItem.total = cartItem.count * cartItem.price;
    cartItem.total = parseFloat(cartItem.total.toFixed(2));
    this.setState(() => {
        return {
            cart: [...tempCart]
        };
    }, () => {
        this.addTotals();
        this.syncStorage();
    })
}

decrement = id => {
    let tempCart = [...this.state.cart];
    const cartItem = tempCart.find(item => item.id  === id);
    cartItem.count = cartItem.count - 1;

    if (cartItem.count === 0) {
        this.removeItem(id);
    } else {
        cartItem.total = cartItem.count * cartItem.price;
        cartItem.total = parseFloat(cartItem.total.toFixed(2));
        this.setState(() => {
            return {
                cart: [...tempCart]
            };
        }, () => {
            this.addTotals();
            this.syncStorage();
        });
    }  
};

removeItem = (id) =>{
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter(item => item.id !== id);
    this.setState({
        cart: [...tempCart]
    }, () => {
        this.addTotals();
        this.syncStorage();
    }, );
};

clearCart = () => {
   this.setState({
       cart: []
   }, () => {
    this.addTotals();
    this.syncStorage();
});
};

// handle filtering
handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.type === "checkbox" 
        ? event.target.checked 
        : event.target.value;
    this.setState({
        [name]: value
    },
    this.sortData
    );
};

// handle filtering
handleFilter = (name, value) => {
    this.setState ({
        [name]: value
    }, this.sortData)
}

sortData = () => {
    const {storeProducts, price, color, cup, sizes, search} = this.state;
    let tempProducts = [...storeProducts];
    let tempPrice = parseInt(price);

    // ---------- Filter by price
    tempProducts = tempProducts.filter(item => item.price <= tempPrice);
    
    // ---------- Filter by colors
    if (color) {
        tempProducts = tempProducts.filter(item => item.color.includes(color))
    }
    // ---------- Filter by Cup
    if (cup) {
        tempProducts = tempProducts.filter(item => item.cup.includes(cup))
    }
    // ---------- Filter by Size
    if (sizes) {
        tempProducts = tempProducts.filter(item => item.sizes.includes(sizes))
    }

    if(search.length > 0) {
        tempProducts = tempProducts.filter(item => {
            let tempSearch = search.toLowerCase();
            let tempTitle = item.title.toLowerCase().slice(0, search.length);
            if (tempSearch === tempTitle) {
                 return item;
            }
        });
    }
    this.setState ({
        filteredProducts: tempProducts
    })
}

    displayColors = (colorSet) => {
        return colorSet.map((color, index) => (
          <li
            className={`filter-item ${this.state.color === color ? 'active-item' : null}`}
            key={index}
            onClick={() => this.handleFilter('color', color)}
          > {color} </li>
        ));
      }

    dropAllFilters = () => {
        let itemsPrice = this.state.storeProducts.map(item => item.price);
        let maxPrice = Math.max(...itemsPrice);
        this.setState({
            color: 'all',
            sizes: 'all',
            cup: 'all',
            search: '',
            priceFilter: false,
            cupFilter: false,
            colorFilter: false,
            sizeFilter: false,
            sizePanties: false,
            price: maxPrice,
            max: maxPrice
        }, this.sortData)
    }
    
    dropColorFilter = () => {
        this.setState({
            color: 'all'
        }, this.sortData)
    }

    dropSizeFilter = () => {
        this.setState({
            sizes: 'all'
        }, this.sortData)
    }

    dropCupFilter = () => {
        this.setState({
            cup: 'all'
        }, this.sortData)
    }

    dropPriceFilter = () => {
        let itemsPrice = this.state.storeProducts.map(item => item.price);
        let maxPrice = Math.max(...itemsPrice);
        this.setState({
            price: maxPrice,
            max: maxPrice
        }, this.sortData)
    }

    render() {

        return (
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
                setSingleProduct: this.setSingleProduct,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart,
                handleChange: this.handleChange,
                handleFilter: this.handleFilter,
                handlePriceFilter: this.handlePriceFilter,
                handleCupFilter: this.handleCupFilter,
                handleColorFilter: this.handleColorFilter,                
                handleSizeFilter: this.handleSizeFilter, 
                handlePantiesFilter: this.handlePantiesFilter,
                displayColors: this.displayColors,
                dropColorFilter: this.dropColorFilter,
                dropAllFilters: this.dropAllFilters,
                dropSizeFilter: this.dropSizeFilter,
                dropCupFilter: this.dropCupFilter,
                dropPriceFilter: this.dropPriceFilter,
                recentItems: this.recentItems
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