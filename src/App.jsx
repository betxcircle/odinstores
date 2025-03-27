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
import CreateProduct from './Products/CreateProduct/CreateProduct';
import Laptops from './Home/Laptops';
import Phones from './Home/Phones';
import ProductDetails from './Home/ProductDetails';
import { CartProvider } from './Home/CartContext';
import CategoryPage from './Home/CategoryPage';
import SearchPage from './Home/Searchbar';
import OrderConfirmation from './Home/OrderConfirmation';

function App() {
  return (
        <div>
          <CartProvider>
          <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path="/laptops" element={<Laptops />} />
          <Route path="/phones" element={<Phones />}/>
          <Route  path='/category/:category' element={<CategoryPage/>}/>
          <Route path="/product/:productId" element={<ProductDetails />}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/products' element={<Product/>}/>
          <Route  path='/searchpage'   element={<SearchPage/>}/>
          <Route path='/createproducts' element={<CreateProduct/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
        </Routes>
          </CartProvider>
        </div>
  );
}

export default App;

