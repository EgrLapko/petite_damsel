import React from 'react';
import Routes from './Routes';
import './style.css'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import SideBar from './components/Sidebar/Sidebar';
import SideCart from './components/SideCart/SideCart';
import Alert from './components/Alert';



function App() {
  return (
    <div className="App">
      <Navbar />
      <SideBar />
      <Alert />
      <SideCart />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
