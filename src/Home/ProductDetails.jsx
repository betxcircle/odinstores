import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar, FaShoppingCart, FaHeart } from "react-icons/fa";
import { useCart } from "./CartContext"; // Import Cart Context
import "../productdetail.css"; // Add styles
import products from "../assets/Data/dataproducts"; // Import product data
import productts from "../assets/Data/limitedproducts";
import tvproducts from "../assets/Data/tvproducts";
import Navbar from "./Navbar";
import newArrivalsproducts from "../assets/Data/newArrivalsproducts";

// Sample Product Data (Replace with API data)
// const products = [
//   {
//     id: 1,
//     title: "Nike Air Max 270",
//     price: 150,
//     slashedPrice: 120,
//     images: [
//       "https://via.placeholder.com/400.png/09f/fff",
//       "https://via.placeholder.com/400.png/f90/fff",
//     ],
//     description: "The Nike Air Max 270 delivers visible cushioning under every step.",
//     rating: 4.5,
//     reviews: 120,
//   },
// ];

const ProductDetails = () => {
  const { productId } = useParams();
  const { addToCart } = useCart();

  // Convert productId to a number for proper comparison
  const product = productts.find((p) => p.id === parseInt(productId)) || 
  products.find((p) => p.id === parseInt(productId)) || 
  tvproducts.find((p) => p.id === parseInt(productId)) ||
  newArrivalsproducts.find((p) => p.id === parseInt(productId))
   ;


  if (!product) return <h2 className="text-center text-red-500">Product not found</h2>;

  return (
    <div className="flex flex-col">
    <Navbar />

    <div className="container mx-auto p-4 flex flex-col md:flex-row gap-8">
      {/* Left: Product Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="w-full max-w-md h-96 object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Right: Product Info */}
      <div className="w-full md:w-1/2 space-y-4">
        <h1 className="text-3xl font-bold">{product.title}</h1>

        <p className="text-xl text-gray-600">
          <span className="line-through text-red-500">   ₦{product.slashedPrice}</span>
          <span className="ml-2 font-semibold text-black">   ₦{product.price}</span>
        </p>

        <p className="flex items-center text-lg">
          <FaStar className="text-yellow-500 mr-2" />
          {product.rating} ({product.reviews} reviews)
        </p>

        <p className="text-gray-700">{product.description}</p>

        {/* Buttons */}
        <div className="flex gap-4 mt-4">
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition"
            onClick={() => addToCart(product)}
          >
            <FaShoppingCart /> Add to Cart
          </button>
          <button className="bg-gray-300 text-gray-800 px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-400 transition">
            <FaHeart /> Wishlist
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default ProductDetails;

