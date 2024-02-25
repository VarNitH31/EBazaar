import React from 'react'
import "../cssfiles/payment.css"
import { Link, useNavigate } from 'react-router-dom'



function Payments() {
   const Navigate=useNavigate();
    const cod =()=>{
        alert("Order is placed");
        Navigate("/")
}
  return (
    <div className='paymentbody'>
          <div className="payment-container">
        <h2 className='paymentheading' >Payment Options</h2>

        <div className="payment-options">
            <Link to="/visa">
                <div className="payment-option" id="visa">
                    <img src="/paymentimg/visa.jpg" alt="Visa"/>
                    <p>Visa Card</p>
                </div>
            </Link>

            <Link to="/mastercard">
                <div className="payment-option" id="mastercard">
                    <img src="/paymentimg/mastercard.jpg" alt="MasterCard"/>
                    <p>MasterCard</p>
                </div>
            </Link>

            <Link to="/upi">
                <div className="payment-option" id="upi">
                    <img src="/paymentimg/upi.webp" alt="UPI"/>
                    <p>UPI</p>
                </div>
            </Link>

            <div className='cod' onClick={cod}>
                    <div className="payment-option" id="cod">
                    <img src="/paymentimg/cod.jpg" alt="COD"/>
                    <p>Cash on delivery</p>
                </div>
            </div>
        </div>
    </div>

    </div>
  )
}

export default Payments
