import React from 'react';
import Routes from './Routes';

import './style.css'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import SideBar from './components/Sidebar/Sidebar';
import SideCart from './components/SideCart/SideCart';



function App() {
  return (
    <div className="App">
      <Navbar />
      <SideBar />
      <SideCart />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
