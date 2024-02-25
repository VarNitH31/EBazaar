import React, { useState } from 'react';
import "../../cssfiles/paymentmode.css";
import { useNavigate } from 'react-router-dom';

function Upi() {
    const navigate = useNavigate();
    const [upiId, setUpiId] = useState("");

    const processPayment = () => {
        if (!upiId) {
            alert('Please fill in the UPI ID field!');
            return;
        }

        if (!validateUpiId(upiId)) {
            alert('Invalid UPI ID!');
            return;
        }

        alert('Order Placed Successfully');
        navigate("/");
    };

    const cancelPayment = () => {
        alert('Payment Cancelled');
        navigate("/payment");
    };

    const validateUpiId = (id) => {
        const regex = /@/;
        return regex.test(id);
    };

    const handleInputChange = (event) => {
        setUpiId(event.target.value);
    };

    return (
        <div>
            <div class="payment-details-container">
                <h2>UPI Payment</h2>
                <form class="payment-form">
                    <label for="upiId">UPI ID:</label>
                    <input type="text" id="upiId" placeholder="Enter your UPI ID" value={upiId} onChange={handleInputChange} required />

                    <button type="button" id='processpaybtn' onClick={processPayment}>Process Payment</button>
                    <button type="button" id='cancelpaybtn' onClick={cancelPayment}>Cancel Payment</button>
                </form>
            </div>
        </div>
    );
}

export default Upi;
