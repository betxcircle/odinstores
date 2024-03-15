import './App.css';
import React from 'react';
import { BrowserRouter ,Route, Routes } from 'react-router-dom';
import Home from '../src/Home/Home';
import TopbarHeader from './Home/TopbarHeader';
import Navbar from './Home/Navbar';
import Searchbar from './Home/Searchbar';
import Register from './auth/Register'; 
import Login from '../src/auth/Login';
import Slider from './Home/Slider';
import CategoriesTab from './Home/CategoriesTab';
import Cart from './Products/Cart';
import Footer from './Home/Footer';
import Product from './Products/Product';
import Checkout from './auth/Checkout';

function App() {
  return (
        <div>
          <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/products' element={<Product/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
        </div>
  );
}

export default App;

