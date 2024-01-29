import React from 'react'
import "../../cssfiles/paymentmode.css"
import { Navigate, useNavigate } from 'react-router-dom';

function Upi() {
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
      <h2>UPI Payment</h2>

      <form class="payment-form">
      <label for="upiId">UPI ID:</label>
            <input type="text" id="upiId" placeholder="Enter your UPI ID" required/>

       
            <button type="button" id='processpaybtn' onClick={processPayment}>Process Payment</button>
          <button type="button" id='cancelpaybtn' onClick={cancelPayment}>Cancel Payment</button>
      </form>
     
  </div>
  </div>
  )
}

export default Upi