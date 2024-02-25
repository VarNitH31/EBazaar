import React, { useState } from 'react';
import "../../cssfiles/paymentmode.css";
import { Navigate, useNavigate } from 'react-router-dom';

function Mcard() {
    const navigate = useNavigate();

    const [cardData, setCardData] = useState({
        cardNumber: "",
        expiryDate: "",
        cvv: "",
        mastercardSecureCode: ""
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCardData({
            ...cardData,
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

    const validateSecureCode = (secureCode) => {
        const regex = /^\d{6}$/;
        return regex.test(secureCode);
    };

    const processPayment = () => {
        const { cardNumber, expiryDate, cvv, mastercardSecureCode } = cardData;

        if (!cardNumber || !expiryDate || !cvv || !mastercardSecureCode) {
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

        if (!validateSecureCode(mastercardSecureCode)) {
            alert('Invalid MasterCard Secure Code!');
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
                <h2>MasterCard Payment</h2>
                <form class="payment-form">
                    <label for="cardNumber">Card Number:</label>
                    <input type="text" id="cardNumber" name="cardNumber" value={cardData.cardNumber} placeholder="Enter your MasterCard number" onChange={handleInputChange} required />

                    <label for="expiryDate">Expiry Date:</label>
                    <input type="text" id="expiryDate" name="expiryDate" value={cardData.expiryDate} placeholder="MM/YY" onChange={handleInputChange} required />

                    <label for="cvv">CVV:</label>
                    <input type="text" id="cvv" name="cvv" value={cardData.cvv} placeholder="Enter CVV" onChange={handleInputChange} required />

                    <label for="mastercardSecureCode">Secure Code:</label>
                    <input type="text" id="mastercardSecureCode" name="mastercardSecureCode" value={cardData.mastercardSecureCode} placeholder="Enter MasterCard secure code" onChange={handleInputChange} required />

                    <button type="button" id='processpaybtn' onClick={processPayment}>Process Payment</button>
                    <button type="button" id='cancelpaybtn' onClick={cancelPayment}>Cancel Payment</button>
                </form>
            </div>
        </div>
    );
}

export default Mcard;
