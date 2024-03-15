import React from 'react';
import Navbar from '../Home/Navbar';
import Searchbar from '../Home/Searchbar';
import { useSelector, useDispatch } from 'react-redux';
import { delItem } from '../redux/action/actions';
import { Link, NavLink } from 'react-router-dom';
import './cart.css';
import Footer from '../Home/Footer';

const Cart = () => {
    const cartItems = useSelector(state => state.addToCart);
    const dispatch = useDispatch();

    const handleClose = (item) => {
        dispatch(delItem(item));
    }

    const emptyCart = () => {
        return (
          <div>
            <Navbar/>
            <Searchbar/>
              <div className="cart-empty">
                <h3
                 style={{
                    marginLeft: '600px',
                    marginTop: '60px',
                    fontSize: '30px',
                   }}
                >Your Cart is Empty</h3>

              <Link to='/products'>
              <button 
               style={{
                marginLeft: '650px',
                marginTop: '60px',
                padding: '10px',
                backgroundColor: 'white',
                borderRadius: '20px',
               }}
              >Continue Shopping</button>
              </Link>
            </div>
          </div>
        );
    }

    const button = () => {
        return (
            <div 
            className="cart-buttons"
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
            }}
            >
            <NavLink to="/checkout"
             style={{
                padding: 10,
                fontWeight: 'bold',
                fontSize: 15,
              
             }}
             className="btn btn-primary">Proceed To Checkout</NavLink>
        </div>
        );
    }

    return (
       <div>
         <div className="cart-container">
        {cartItems.length === 0 && emptyCart()}
        {cartItems.length !== 0 && cartItems.map(cartItem => (
            <div className="cart-item" key={cartItem.id}>
                <button onClick={() => handleClose(cartItem)} className="close-btn">
                    <h1 style={{ fontSize: 20}}>X</h1>
                </button>
                <div className="item-info">
                    <img src={cartItem.img} alt={cartItem.title} className='img' />
                    <div className="item-details">
                        <h3>{cartItem.title}</h3>
                        <p>${cartItem.price}</p>
                    </div>
                    <div className="item-details">
                        <button className='buttonplus'>+</button>
                        <h3 className='count'>0</h3>
                        <button className='buttonminus'>-</button>
                    </div>
                    <div className="item-details">
                        <button
                        onClick={() => handleClose(cartItem)}
                         className='buttonremove'>Remove</button>
                    </div>
                </div>
                
            </div>
        ))}
        {cartItems.length !== 0 && button()}
    </div>
  <div style={{ marginTop: 400}}>
  <Footer/>
  </div>
       </div>
    );
}

export default Cart;

