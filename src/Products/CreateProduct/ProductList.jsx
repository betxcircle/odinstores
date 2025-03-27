import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../productlist.css';

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/products');
                setProducts(response.data);
            } catch (err) {
                // Handle error
            }
        };

        fetchProducts();
    }, []);

    const deleteProduct = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/products/${id}`);
            // After deletion, fetch updated product list
            const response = await axios.get('http://localhost:5000/api/products');
            setProducts(response.data);
        } catch (err) {
            // Handle error
        }
    };

    return (
        <div className="product-list-container">
            <h2>Product List</h2>
            <ul>
                {products.map((product) => (
                    <li key={product._id} className="product-item">
                        <img src={`http://localhost:5000/${product.imageUrl}`} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p className="price">Price: ${product.price}</p>
                        <button onClick={() => deleteProduct(product._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;

