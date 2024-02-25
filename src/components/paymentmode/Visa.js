import React, { useState } from 'react';
import "../../cssfiles/paymentmode.css";
import { Navigate, useNavigate } from 'react-router-dom';

function Visa() {
    const navigate = useNavigate();

    const [visaData, setVisaData] = useState({
        cardNumber: "",
        expiryDate: "",
        cvv: "",
        visaSecurityCode: ""
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setVisaData({
            ...visaData,
            [name]: value
        });
    };

    const validateCardNumber = (cardNumber) => {
        const regex = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
        return regex.test(cardNumber);
    };

    const validateExpiryDate = (expiryDate) => {
        const regex = /^(0[1-9]|1[0-2])\/\d{2}$/;
        return regex.test(expiryDate);
    };

    const validateCVV = (cvv) => {
        const regex = /^\d{3}$/;
        return regex.test(cvv);
    };

    const validateSecurityCode = (securityCode) => {
        const regex = /^\d{6}$/;
        return regex.test(securityCode);
    };

    const processPayment = () => {
        const { cardNumber, expiryDate, cvv, visaSecurityCode } = visaData;

        if (!cardNumber || !expiryDate || !cvv || !visaSecurityCode) {
            alert('Please fill in all fields!');
            return;
        }

        if (!validateCardNumber(cardNumber)) {
            alert('Invalid Card Number!');
            return;
        }

        if (!validateExpiryDate(expiryDate)) {
            alert('Invalid Expiry Date!');
            return;
        }

        if (!validateCVV(cvv)) {
            alert('Invalid CVV!');
            return;
        }

        if (!validateSecurityCode(visaSecurityCode)) {
            alert('Invalid Visa Security Code!');
            return;
        }

        alert('Order Placed Successfully');
        navigate("/");
    };

    const cancelPayment = () => {
        alert('Payment Cancelled');
        navigate("/payment");
    };

    return (
        <div>
            <div class="payment-details-container">
                <h2>Visa Payment</h2>
                <form class="payment-form">
                    <label for="cardNumber">Card Number:</label>
                    <input type="text" id="cardNumber" name="cardNumber" value={visaData.cardNumber} placeholder="Enter your Visa card number" onChange={handleInputChange} required />

                    <label for="expiryDate">Expiry Date:</label>
                    <input type="text" id="expiryDate" name="expiryDate" value={visaData.expiryDate} placeholder="MM/YY" onChange={handleInputChange} required />

                    <label for="cvv">CVV:</label>
                    <input type="text" id="cvv" name="cvv" value={visaData.cvv} placeholder="Enter CVV" onChange={handleInputChange} required />

                    <label for="visaSecurityCode">Security Code:</label>
                    <input type="text" id="visaSecurityCode" name="visaSecurityCode" value={visaData.visaSecurityCode} placeholder="Enter Visa security code" onChange={handleInputChange} required />

                    <button type="button" id='processpaybtn' onClick={processPayment}>Process Payment</button>
                    <button type="button" id='cancelpaybtn' onClick={cancelPayment}>Cancel Payment</button>
                </form>
            </div>
        </div>
    );
}

export default Visa;
