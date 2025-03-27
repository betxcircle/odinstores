import { useParams } from "react-router-dom";
import { useCart } from "./CartContext";
import products from "../assets/Data/categoryproducts";
import Navbar from "./Navbar";

const CategoryPage = () => {
    const { addToCart } = useCart();

  const { category } = useParams();
  const filteredProducts = products.filter((product) => product.category === category);

  return (
    <div className="p-6">
        <Navbar/>
      <h1 className="text-3xl font-bold mb-4">{category} Products</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg shadow">
              <img src={product.image} alt={product.title} className="w-full h-40 object-cover rounded-lg" />
              <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-xl font-bold text-green-500">₦{product.price.toLocaleString()}</p>
              <p className="text-red-500 line-through">₦{product.slashedPrice.toLocaleString()}</p>
              <button 
                onClick={() => addToCart(product)} 
                className="mt-2 bg-blue-500 text-white py-1 px-4 rounded"
              >
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
