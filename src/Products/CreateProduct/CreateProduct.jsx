import React, { useState } from 'react';
import axios from 'axios';
import ProductList from './ProductList';
import '../../createproduct.css'

function CreateProduct() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('image', image);
        try {
            console.log('Form data:', formData); // Check if formData is correct
            await axios.post('http://localhost:5000/api/products', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Product added successfully');
        // Clear form fields
        setName('');
        setDescription('');
        setPrice('');
        setImage('');
        } catch (err) {
            console.error('Error adding product:', err);
            // Handle error
        }
    };

    return (
        <div className="create-product-container">
            <h2 className="add-new-product">Create New Product</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className="form-group">
                    <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div className="form-group">
                    <input type="file" onChange={(e) => setImage(e.target.files[0])} />
                </div>
                <div className="form-group">
                    <button type="submit">Add Product</button>
                </div>
            </form>
            <ProductList/>
        </div>
    );
}

export default CreateProduct;
