import React from 'react';
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

    const addToCartHandler = (item) => {
        dispatch(addToCart(item));
    };

    // const cardItem = (item) => (
    //     <Card key={item.id}>
    //         <CardImage src={item.img} alt={item.title} />
    //         <CardBody>
    //             <Title>{item.title}</Title>
    //             <Price>${item.price}</Price>
    //             <BuyButton onClick={() => addToCartHandler(item)} to={`/cart`}>Buy Now</BuyButton>
    //         </CardBody>
    //     </Card>
    // );

    const cardItem = (item) => {
        return (
            <div class="card" key={item.id} style={{width: "18rem"}}>
                <img src={item.img} class="card-img-top" alt={item.title}/>
                    <div class="card-body text-center">
                        <h5 class="card-title">{item.title}</h5>
                        <p className="lead">${item.price}</p>
                        <NavLink to={'/cart'} 
                        onClick={() => addToCartHandler(item)}
                        class="btn btn-outline-primary">Buy Now</NavLink>
                    </div>
            </div>
                )};

    return (
        <div>
            <Navbar/>
            <Searchbar/>
            <div className='container py-5' >
                <div className="row">
                    <div className="col-12 text-center">
                        <h1 style={{ fontSize: 50}}>Products</h1>
                        <hr />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-around">
                    {popularProducts.map(cardItem)}
                </div>
            </div>
           <div style={{ marginTop: 300}}>
           <Footer/>
           </div>
        </div>
    );
};

export default Product;
