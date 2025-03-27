import React, { useState } from 'react';
import Navbar from '../Home/Navbar';
import Searchbar from '../Home/Searchbar';
import { useSelector, useDispatch } from 'react-redux';
import { delItem } from '../redux/action/actions';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from "../Home/CartContext";
import Footer from '../Home/Footer';
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import products from "../assets/Data/dataproducts"; // Import product data

const Cart = () => {
    const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

    // Calculate Total Price
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  

    // const cartItems = useSelector(state => state.addToCart);
    // const dispatch = useDispatch();
    // const [itemQuantities, setItemQuantities] = useState({});

    // const handleClose = (item) => {
    //     dispatch(delItem(item));
    // }

    // const handleIncrement = (item) => {
    //     setItemQuantities(prevQuantities => ({
    //         ...prevQuantities,
    //         [item.id]: (prevQuantities[item.id] || 0) + 1
    //     }));
    // }

    // const handleDecrement = (item) => {
    //     if (itemQuantities[item.id] > 0) {
    //         setItemQuantities(prevQuantities => ({
    //             ...prevQuantities,
    //             [item.id]: prevQuantities[item.id] - 1
    //         }));
    //     }
    // }

    const emptyCart = () => {
        return (
            <div>
                <Navbar />
                {/* <Searchbar /> */}
                <div className="cart-empty">
                    <h3 style={{
                        marginLeft: '600px',
                        marginTop: '60px',
                        fontSize: '30px',
                    }}>Your Cart is Empty</h3>
                    <Link to='/products'>
                        <button style={{
                            marginLeft: '650px',
                            marginTop: '60px',
                            padding: '10px',
                            backgroundColor: 'white',
                            borderRadius: '20px',
                        }}>Continue Shopping</button>
                    </Link>
                </div>
            </div>
        );
    }

    const button = () => {
        return (
            <div className="cart-buttons" style={{
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
            }}>
                <NavLink to="/checkout" style={{
                    padding: 10,
                    fontWeight: 'bold',
                    fontSize: 15,
                }} className="btn btn-primary">Proceed To Checkout</NavLink>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4">
            <Navbar/>
        <h1 className="text-3xl font-bold mb-6 text-center">Shopping Cart</h1>
  
        {cart.length === 0 ? (
          <p className="text-gray-600 text-lg text-center">Your cart is empty.</p>
        ) : (
          <div className="bg-white shadow-lg rounded-lg p-4 md:p-6">
            {/* Table for larger screens */}
            <div className="hidden md:grid grid-cols-5 font-semibold border-b pb-3 text-gray-700 text-center">
              <span>Product</span>
              <span>Price</span>
              <span>Quantity</span>
              <span>Total</span>
              <span>Action</span>
            </div>
  
            {/* Cart Items */}
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:grid md:grid-cols-5 items-center py-4 border-b gap-4 md:gap-0"
              >
                {/* Product Image & Title */}
                <div className="flex items-center gap-4 w-full md:w-auto">
                  <img src={item.image} alt={item.title} className="w-20 h-20 rounded-lg" />
                  <span className="text-lg font-medium">{item.title}</span>
                </div>
  
                {/* Price */}
                <p className="text-gray-600 w-full md:text-center">₦{item.price}</p>
  
                {/* Quantity Controls */}
                <div className="flex items-center justify-center gap-3 w-full">
                  <button
                    className="p-2 bg-gray-300 rounded-md hover:bg-gray-400"
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    <FaMinus />
                  </button>
                  <span className="text-lg">{item.quantity}</span>
                  <button
                    className="p-2 bg-gray-300 rounded-md hover:bg-gray-400"
                    onClick={() => increaseQuantity(item.id)}
                  >
                    <FaPlus />
                  </button>
                </div>
  
                {/* Total Price for Item */}
                <p className="text-gray-700 font-semibold w-full md:text-center">
                ₦{item.price * item.quantity}
                </p>
  
                {/* Remove Button */}
                <button
  className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition w-full md:w-auto flex items-center justify-center"
  onClick={() => removeFromCart(item.id)}
>
  <FaTrash className="text-lg" />
</button>

              </div>
            ))}
  
            {/* Cart Summary */}
            <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-4">
              <p className="text-xl font-semibold">Subtotal: ₦{totalPrice.toFixed(2)}</p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition w-full md:w-auto">
             <Link to="/checkout" className="w-full h-full block text-center text-white">
             Proceed to Checkout
          </Link>
          </button>

            </div>
            <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-4">
              {/* <p className="text-xl font-semibold">Subtotal: ${totalPrice.toFixed(2)}</p> */}
              <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-black-700 transition w-full md:w-auto">
        <Link to="/" className="w-full h-full block text-center text-white">
    Continue Shopping 
        </Link>
       </button>

            </div>
          </div>
        )}
      </div>
    );
}

export default Cart;


