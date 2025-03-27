import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/action/actions';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'; // Import styled-components
import { popularProducts } from '../../data';
import Searchbar from '../Home/Searchbar';
import Navbar from '../Home/Navbar';
import Footer from '../Home/Footer';
import '../../products.css';

const Product = () => {
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState('');

    const addToCartHandler = (item) => {
        dispatch(addToCart(item));
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredProducts = popularProducts.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const cardItem = (item) => {
        return (
            <div className="card" key={item.id} style={{ width: "18rem" }}>
                <img src={item.img} className="card-img-top" alt={item.title} />
                <div className="card-body text-center">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="lead">${item.price}</p>
                    <NavLink to={'/cart'}
                        onClick={() => addToCartHandler(item)}
                        className="btn btn-outline-primary">Buy Now</NavLink>
                </div>
            </div>
        );
    };

    return (
        <div>
            <Navbar />
            {/* <Searchbar onChange={handleSearchChange} /> */}
            <div className='container py-5' >
                <div className="row">
                    <div className="col-12 text-center">
                        <h1 style={{ fontSize: 50 }}>Products</h1>
                        <hr />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-around">
                    {filteredProducts.map(cardItem)}
                </div>
            </div>
            <div style={{ marginTop: 300 }}>
                <Footer />
            </div>
        </div>
    );
};

export default Product;

