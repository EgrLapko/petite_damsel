import React from 'react';
import Routes from './Routes';
import './style.css'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import SideCart from './components/SideCart/SideCart';
import Alert from './components/Alert';
import Sidebar from './components/Sidebar/Sidebar';
import ScrollTop from 'react-scrolltop-button';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Alert />
      <SideCart />
      <Routes />
      <ScrollTop 
        text="to top"
        className="scroll-to-top"
        style={{ 
            backgroundColor: "rgba(241, 106, 123, .8)",
            border: "none",
            borderRadius: "10px",
            fontFamily: "'Roboto', sans-serif",
          }}
      />
      <Footer />
    </div>
  );
}

export default App;
