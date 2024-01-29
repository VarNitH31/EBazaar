import React from 'react';
import "../cssfiles/address.css"
import { Link, useNavigate } from 'react-router-dom';

function Address() {
    const navigate = useNavigate();

    const pay = (event) => {
        event.preventDefault();
        navigate('/payment');
    }

    return (
        <div className="addbody">
            <div className="addcontainer">
                <h2>Please Enter Your Address</h2>
                <form className='addform' onSubmit={pay} id="purchaseForm">
                    <div>
                        <label htmlFor="fullName">Full Name:</label>
                        <input type="text" id="fullName" name="fullName" required />
                    </div>
                    <div>
                        <label htmlFor="address">Address:</label>
                        <textarea id="address" name="address" rows="4" required></textarea>
                    </div>
                    <div>
                        <label htmlFor="city">City:</label>
                        <input type="text" id="city" name="city" required />
                    </div>
                    <div>
                        <label htmlFor="zipCode">Zip Code:</label>
                        <input type="text" id="zipCode" name="zipCode" required />
                    </div>
                    <div>
                        <button type="submit">Pay</button>
                    </div>
                </form>
                <Link to="/cart"><button className="cancelbtn">Cancel</button></Link>
            </div>
        </div>
    )
}

export default Address;