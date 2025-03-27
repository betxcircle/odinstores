import { Link } from "react-router-dom";

const OrderConfirmation = () => {
    return (
        <div className="container text-center my-5">
            <h2 className="text-success">✅ Order Placed Successfully!</h2>
            <p>We've received your order and sent the details to your email.</p>
            <p>Thank you for shopping with us! 🎉</p>
            
            <Link to="/" className="btn btn-primary mt-3">Back to Home</Link>
        </div>
    );
};

export default OrderConfirmation;
