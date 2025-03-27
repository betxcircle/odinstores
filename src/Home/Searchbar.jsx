import { useState } from "react";
import { useNavigate } from "react-router-dom";
import categoryproducts from "../assets/Data/categoryproducts";
import dataproducts from "../assets/Data/dataproducts";
import limitedproducts from "../assets/Data/limitedproducts";
import newArrivalsproducts from "../assets/Data/newArrivalsproducts";
import tvproducts from "../assets/Data/tvproducts";
import Navbar from "./Navbar";
import { useCart } from "./CartContext";

const SearchPage = () => {
  const { addToCart } = useCart();


  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState([]);

  // Combine all product data
  const allProducts = [
    ...categoryproducts,
    ...dataproducts,
    ...limitedproducts,
    ...newArrivalsproducts,
    ...tvproducts,
  ];

  // Filter products based on search term
  const filteredProducts = allProducts.filter((product) =>
    product.title && product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  

  return (
    <div className="p-6">
      <Navbar/>
      <h1 className="text-2xl font-bold text-center mb-4">Search Products</h1>
      
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search for products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />

      {/* Display Results */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg shadow">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-cover rounded-lg"
              />
              <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-xl font-bold text-green-500">{product.price}</p>
              {product.slashedPrice && (
                <p className="text-red-500 line-through">{product.slashedPrice}</p>
              )}
              <button
                onClick={() => addToCart(product)}
                className="mt-2 bg-blue-500 text-white py-1 px-4 rounded"
              >
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p className="text-center col-span-2 md:col-span-4">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;

