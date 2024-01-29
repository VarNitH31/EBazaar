import React from 'react'
import "../cssfiles/payment.css"
import "../paymentimg/mastercard.jpg"

function Payments() {
  return (
    <div className='paymentbody'>
          <div className="payment-container">
        <h2 className='paymentheading' >Payment Options</h2>

        <div className="payment-options">
            <a href="/visa">
                <div className="payment-option" id="visa">
                    <img src="/paymentimg/visa.jpg" alt="Visa"/>
                    <p>Visa Card</p>
                </div>
            </a>

            <a href="/mastercard">
                <div className="payment-option" id="mastercard">
                    <img src="/paymentimg/mastercard.jpg" alt="MasterCard"/>
                    <p>MasterCard</p>
                </div>
            </a>

            <a href="/upi">
                <div className="payment-option" id="upi">
                    <img src="/paymentimg/upi.webp" alt="UPI"/>
                    <p>UPI</p>
                </div>
            </a>

            <a href="/cod">
                    <div className="payment-option" id="cod">
                    <img src="/paymentimg/cod.jpg" alt="COD"/>
                    <p>Cash on delivery</p>
                </div>
            </a>
        </div>
    </div>

    </div>
  )
}

export default Payments
