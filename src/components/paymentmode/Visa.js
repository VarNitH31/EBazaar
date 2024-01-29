import React from 'react'
import "../../cssfiles/paymentmode.css"
import { Navigate, useNavigate } from 'react-router-dom';

function Visa() {
    const navigate=useNavigate();
    const processPayment = () => {
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
            <input type="text" id="cardNumber" placeholder="Enter your Visa card number" required/>

            <label for="expiryDate">Expiry Date:</label>
            <input type="text" id="expiryDate" placeholder="MM/YY" required/>

            <label for="cvv">CVV:</label>
            <input type="text" id="cvv" placeholder="Enter CVV" required/>

         
            <label for="visaSecurityCode">Security Code:</label>
            <input type="text" id="visaSecurityCode" placeholder="Enter Visa security code" required/>


            <button type="button" id='processpaybtn' onClick={processPayment}>Process Payment</button>
          <button type="button" id='cancelpaybtn' onClick={cancelPayment}>Cancel Payment</button>
      </form>
     
  </div>
  </div>
  )
}

export default Visa