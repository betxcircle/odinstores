// import React from 'react'
// import { useSelector } from 'react-redux'

// const Checkout = () => {
//     const state = useSelector((state) => state.addToCart)

//     var total = 0;
//     const itemList = (item) => {
//         total = total + item.price;
//         return (
//             <li className="list-group-item d-flex justify-content-between lh-sm">
//                 <div>
//                     <h6 className="my-0">{item.title}</h6>
//                 </div>
//                 <span className="text-muted">${item.price}</span>
//             </li>
//         );
//     }

//     return (
//         <>
//             <div className="container my-5">
//                 <div className="row g-5">
//                     <div className="col-md-5 col-lg-4 order-md-last">
//                         <h4 className="d-flex justify-content-between align-items-center mb-3">
//                             <span className="text-primary">Your cart</span>
//                             <span className="badge bg-primary rounded-pill">{state.length}</span>
//                         </h4>
//                         <ul className="list-group mb-3">
//                             {state.map(itemList)}

//                             <li className="list-group-item d-flex justify-content-between">
//                                 <span>Total (USD)</span>
//                                 <strong>${total}</strong>
//                             </li>
//                         </ul>

//                         <form className="card p-2">
//                             <div className="input-group">
//                                 <input type="text" className="form-control" placeholder="Promo code" />
//                                 <button type="submit" className="btn btn-secondary">Redeem</button>
//                             </div>
//                         </form>
//                     </div>
//                     <div className="col-md-7 col-lg-8">
//                         <h4 className="mb-3">Billing address</h4>
//                         <form className="needs-validation" novalidate="">
//                             <div className="row g-3">
//                                 <div className="col-sm-6">
//                                     <label htmlFor="firstName" className="form-label">First name</label>
//                                     <input type="text" className="form-control" id="firstName" placeholder="" value="" required="" />
//                                     <div className="invalid-feedback">
//                                         Valid first name is required.
//                                     </div>
//                                 </div>

//                                 <div className="col-sm-6">
//                                     <label htmlFor="lastName" className="form-label">Last name</label>
//                                     <input type="text" className="form-control" id="lastName" placeholder="" value="" required="" />
//                                     <div className="invalid-feedback">
//                                         Valid last name is required.
//                                     </div>
//                                 </div>

//                                 <div className="col-12">
//                                     <label htmlFor="username" className="form-label">Username</label>
//                                     <div className="input-group has-validation">
//                                         <span className="input-group-text">@</span>
//                                         <input type="text" className="form-control" id="username" placeholder="Username" required="" />
//                                         <div className="invalid-feedback">
//                                             Your username is required.
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className="col-12">
//                                     <label htmlFor="email" className="form-label">Email <span className="text-muted">(Optional)</span></label>
//                                     <input type="email" className="form-control" id="email" placeholder="you@example.com" />
//                                     <div className="invalid-feedback">
//                                         Please enter a valid email address htmlFor shipping updates.
//                                     </div>
//                                 </div>

//                                 <div className="col-12">
//                                     <label htmlFor="address" className="form-label">Address</label>
//                                     <input type="text" className="form-control" id="address" placeholder="1234 Main St" required="" />
//                                     <div className="invalid-feedback">
//                                         Please enter your shipping address.
//                                     </div>
//                                 </div>

//                                 <div className="col-12">
//                                     <label htmlFor="address2" className="form-label">Address 2 <span className="text-muted">(Optional)</span></label>
//                                     <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
//                                 </div>

//                                 <div className="col-md-5">
//                                     <label htmlFor="country" className="form-label">Country</label>
//                                     <select className="form-select" id="country" required="">
//                                         <option value="">Choose...</option>
//                                         <option>United States</option>
//                                     </select>
//                                     <div className="invalid-feedback">
//                                         Please select a valid country.
//                                     </div>
//                                 </div>

//                                 <div className="col-md-4">
//                                     <label htmlFor="state" className="form-label">State</label>
//                                     <select className="form-select" id="state" required="">
//                                         <option value="">Choose...</option>
//                                         <option>California</option>
//                                     </select>
//                                     <div className="invalid-feedback">
//                                         Please provide a valid state.
//                                     </div>
//                                 </div>

//                                 <div className="col-md-3">
//                                     <label htmlFor="zip" className="form-label">Zip</label>
//                                     <input type="text" className="form-control" id="zip" placeholder="" required="" />
//                                     <div className="invalid-feedback">
//                                         Zip code required.
//                                     </div>
//                                 </div>
//                             </div>

//                             <hr className="my-4" />

//                             <div className="form-check">
//                                 <input type="checkbox" className="form-check-input" id="same-address" />
//                                 <label className="form-check-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
//                             </div>

//                             <div className="form-check">
//                                 <input type="checkbox" className="form-check-input" id="save-info" />
//                                 <label className="form-check-label" htmlFor="save-info">Save this information htmlFor next time</label>
//                             </div>

//                             <hr className="my-4" />

//                             <h4 className="mb-3">Payment</h4>

//                             <div className="my-3">
//                                 <div className="form-check">
//                                     <input id="credit" name="paymentMethod" type="radio" className="form-check-input" checked="" required="" />
//                                     <label className="form-check-label" htmlFor="credit">Credit card</label>
//                                 </div>
//                                 <div className="form-check">
//                                     <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required="" />
//                                     <label className="form-check-label" htmlFor="debit">Debit card</label>
//                                 </div>
//                                 <div className="form-check">
//                                     <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required="" />
//                                     <label className="form-check-label" htmlFor="paypal">PayPal</label>
//                                 </div>
//                             </div>

//                             <div className="row gy-3">
//                                 <div className="col-md-6">
//                                     <label htmlFor="cc-name" className="form-label">Name on card</label>
//                                     <input type="text" className="form-control" id="cc-name" placeholder="" required="" />
//                                     <small className="text-muted">Full name as displayed on card</small>
//                                     <div className="invalid-feedback">
//                                         Name on card is required
//                                     </div>
//                                 </div>

//                                 <div className="col-md-6">
//                                     <label htmlFor="cc-number" className="form-label">Credit card number</label>
//                                     <input type="text" className="form-control" id="cc-number" placeholder="" required="" />
//                                     <div className="invalid-feedback">
//                                         Credit card number is required
//                                     </div>
//                                 </div>

//                                 <div className="col-md-3">
//                                     <label htmlFor="cc-expiration" className="form-label">Expiration</label>
//                                     <input type="text" className="form-control" id="cc-expiration" placeholder="" required="" />
//                                     <div className="invalid-feedback">
//                                         Expiration date required
//                                     </div>
//                                 </div>

//                                 <div className="col-md-3">
//                                     <label htmlFor="cc-cvv" className="form-label">CVV</label>
//                                     <input type="text" className="form-control" id="cc-cvv" placeholder="" required="" />
//                                     <div className="invalid-feedback">
//                                         Security code required
//                                     </div>
//                                 </div>
//                             </div>

//                             <hr className="my-4" />

//                             <button className="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Checkout
import React, { useState, useEffect } from 'react';
import { useCart } from '../Home/CartContext'; // Adjust path based on your structure
import { useNavigate } from "react-router-dom"; // Import for navigation
import Navbar from '../Home/Navbar';


const Checkout = () => {
    const { cart } = useCart();
    const [paymentMethod, setPaymentMethod] = useState('');
    const [deliveryMethod, setDeliveryMethod] = useState('');

    // Billing Address State
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [address2, setAddress2] = useState('');
    const [country, setCountry] = useState('');
    const [state, setState] = useState([]);
    const [phone, setPhone] = useState('');
    const [selectedState, setSelectedState] = useState("");
    const [zip, setZip] = useState('');
    const [sameAddress, setSameAddress] = useState(false);
    const [saveInfo, setSaveInfo] = useState(false);
    const [accountName, setAccountName] = useState('');
    const [accountNumber, setAccountNumber] = useState('');

    // Fetch Nigerian states from API
  // Fetch Nigerian states from an API
  const nigeriaStates = [
    "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa",
    "Benue", "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti",
    "Enugu", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina",
    "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun",
    "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba",
    "Yobe", "Zamfara", "FCT (Abuja)"
];

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

 
    const navigate = useNavigate();
    
    const handleCheckout = async (e) => {
        e.preventDefault();
        
        const checkoutData = {
            cart,
            billingDetails: { firstName, lastName, email, address, state, phone },
            paymentMethod,
            accountName,
            accountNumber,
            deliveryMethod,
            adminEmail: "odincirclex@gmail.com",
        };
    
        try {
            const response = await fetch("http://localhost:5000/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(checkoutData),
            });
    
            const result = await response.json();
            if (response.ok) {
                // ✅ Show a success message
                alert("Order submitted successfully! Check your email.");
                
                // ✅ Clear form fields and cart
                setFirstName("");
                setLastName("");
                setEmail("");
                setPhone("");
                setAddress("");
                setState("");
                setPaymentMethod("");
                setAccountName("");
                setAccountNumber("");
                setDeliveryMethod("");
                //clearCart(); // If you have a function to reset cart
    
                // ✅ Navigate to the order confirmation page
                navigate("/order-confirmation");
            } else {
                alert("Error: " + result.message);
            }
        } catch (error) {
            alert("Failed to send email: " + error.message);
        }
    };
    


    return (
        <div className="container my-5">
            <Navbar/>
            <div className="row g-5">
                {/* Cart Summary */}
                <div className="col-md-5 col-lg-4 order-md-last">
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <span className="text-primary">Your cart</span>
                        <span className="badge bg-primary rounded-pill">
                        {cart.reduce((sum, item) => sum + item.quantity, 0)}
                        </span>
                    </h4>
                    <ul className="list-group mb-3">
                        {cart.map((item) => (
                            <li key={item.id} className="list-group-item d-flex justify-content-between lh-sm">
                                <div>
                                    <h6 className="my-0">{item.title} × {item.quantity}</h6>
                                </div>
                                <span className="text-muted">₦{(item.price * item.quantity).toFixed(2)}</span>
                            </li>
                        ))}
                        <li className="list-group-item d-flex justify-content-between">
                            <span>Total (NGN)</span>
                            <strong>₦{total.toFixed(2)}</strong>
                        </li>
                    </ul>
                </div>

                {/* Checkout Form */}
                <div className="col-md-7 col-lg-8">
                    <h4 className="mb-3">Billing Address</h4>
                    <form onSubmit={handleCheckout}>
                        {/* Billing Address Fields */}
                        <div className="row g-3">
                            <div className="col-sm-6">
                                <label htmlFor="firstName" className="form-label">First Name</label>
                                <input type="text" className="form-control" id="firstName" required 
                                    value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                            </div>

                            <div className="col-sm-6">
                                <label htmlFor="lastName" className="form-label">Last Name</label>
                                <input type="text" className="form-control" id="lastName" required 
                                    value={lastName} onChange={(e) => setLastName(e.target.value)} />
                            </div>

                            <div className="col-12">
                                <label htmlFor="email" className="form-label">Email (Optional)</label>
                                <input type="email" className="form-control" id="email" 
                                    value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="col-12">
                                <label htmlFor="phone" className="form-label">Phone</label>
                                <input type="text" className="form-control" id="phone" required 
                                    value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </div>

                            <div className="col-12">
                                <label htmlFor="address" className="form-label">Address</label>
                                <input type="text" className="form-control" id="address" required 
                                    value={address} onChange={(e) => setAddress(e.target.value)} />
                            </div>

                            <div className="col-md-5">
                                <label htmlFor="country" className="form-label">Country</label>
                                <select className="form-select" id="country" required 
                                    value={country} onChange={(e) => setCountry(e.target.value)}>
                                    <option value="">Choose...</option>
                                    <option>Nigeria</option>
                                </select>
                            </div>

                            {/* <div className="col-md-4">
                                <label htmlFor="state" className="form-label">State</label>
                                <select className="form-select" id="state" required 
                                    value={state} onChange={(e) => setState(e.target.value)}>
                                    <option value="">Choose...</option>
                                    <option>Lagos</option>
                                    <option>Abuja</option>
                                    <option>Anambra</option>
                                    <option>California</option>
                                    <option>California</option>
                                    <option>California</option>
                                </select>
                            </div> */}
                             <div className="col-md-4">
            <label htmlFor="state" className="form-label">State</label>
            <select className="form-select" value={selectedState} onChange={(e) => setSelectedState(e.target.value)}>
    <option value="">Choose...</option>
    {nigeriaStates.map((state, index) => (
        <option key={index} value={state}>{state}</option>
    ))}
</select>
            <div className="invalid-feedback">Please select a valid state.</div>
        </div>

                            <div className="col-md-3">
                                <label htmlFor="zip" className="form-label">Zip</label>
                                <input type="text" className="form-control" id="zip" required 
                                    value={zip} onChange={(e) => setZip(e.target.value)} />
                            </div>
                        </div>

                        <hr className="my-4" />

                        {/* Payment Options */}
                        <h4 className="mb-3">Payment Method</h4>
                        <div className="my-3">
                            <div className="form-check">
                                <input id="paystack" name="paymentMethod" type="radio" className="form-check-input"
                                    value="Paystack" checked={paymentMethod === 'Paystack'}
                                    onChange={(e) => setPaymentMethod(e.target.value)} />
                                <label className="form-check-label" htmlFor="paystack">Use Paystack</label>
                            </div>

                            <div className="form-check">
                                <input id="moniepoint" name="paymentMethod" type="radio" className="form-check-input"
                                    value="MoniePoint" checked={paymentMethod === 'MoniePoint'}
                                    onChange={(e) => setPaymentMethod(e.target.value)} />
                                <label className="form-check-label" htmlFor="moniepoint">Use MoniePoint</label>
                            </div>
                        </div>

                        {/* Account Details (Text, Not Inputs) */}
                        {paymentMethod === 'MoniePoint' && (
                            <div className="mt-3">
                                <p><strong>Account Name:</strong> MoniePoint Payment</p>
                                <p><strong>Account Number:</strong> 9052792796</p>
                                
                                {/* Delivery Method */}
                                <label className="form-label">Delivery Method</label>
                                <select className="form-select" value={deliveryMethod}
                                    onChange={(e) => setDeliveryMethod(e.target.value)} required>
                                    <option value="">Select</option>
                                    <option value="Pickup">Pickup</option>
                                    <option value="Delivery">Delivery</option>
                                </select>

                                {/* Instruction for MoniePoint */}
                                <div className="alert alert-info mt-3">
                                    <strong>Important:</strong> After making payment, please kindly share your receipt with customer care for quick confirmation.
                                </div>
                             {deliveryMethod === 'Pickup' && (
                                   <div className="alert alert-info mt-3">
                                   <strong>Pick Up: At 12, EYO STREET, PALMGROOVE, SHOMOLU LAGOS.</strong> .
                               </div>
                             )}
                            </div>
                        )}

                        <hr className="my-4" />

                        <button className="w-100 btn btn-primary btn-lg" type="submit" onClick={handleCheckout}>
                         Continue to checkout
                        </button>
    
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;



