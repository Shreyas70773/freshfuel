import React, { useState } from 'react';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Footer } from './Components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Store from './Templates/Store';
import Product from './Templates/Product';
import Cart from './Templates/Cart';
import LoginSignup from './Templates/LoginSignup';
import ShopCategory from './Templates/ShopCategory';
import banner from './Components/Static/images/banner.png';


function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Store />} />
          <Route path="/ShopCategory" element={<ShopCategory banner={banner} category="basket" />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/Login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
