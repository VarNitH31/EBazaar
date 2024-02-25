import React, { useEffect,useState } from 'react';
import "../cssfiles/address.css"
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Address(cart) {
    const navigate = useNavigate();

    const [addressData, setAddressData] = useState({
        fullName:"",
        city:"",
        address:"",
        zipCode:""
    });


    const handleInputChange=(event)=>{
        const{name,value} = event.target;

        setAddressData({
            ...addressData,
            [name]:value
        })

}

    const pay = async (event) => {
        event.preventDefault();
        console.log(cart);

        const {fullName,city,address,zipCode} = addressData;
        //  cart=JSON.stringify(cart);
   console.log(cart);
        if (!validateZipCode(zipCode)) {
            alert("zipcode must be 6 digit Integer");
            return false;
        }

        if (fullName.trim() === '' || city.trim() ===  '' || address.trim() === '' || zipCode.trim()==='') {
            alert('All fields must be filled out');
            return false;
          }
         
        const postData={...addressData,cart}  
           console.log(postData);
        try {
           
            await axios.post('http://localhost:3001/api/address',postData);
            console.log("address saved successfully");
            navigate('/payment');
           

        } catch (error) {
            console.log("error saving address")
        }
       
    }   

    const validateZipCode = (zip) => {
        const zipRegex = /^\d{6}$/;
        return zipRegex.test(zip);
    }
   
//    useEffect(() => {
//      console.log(cart);
   
//    })
   


    return (
        <div className="addbody">
            <div className="addcontainer">
                <h2>Please Enter Your Address</h2>
                <form className='addform' onSubmit={pay} id="purchaseForm">
                    <div>
                        <label htmlFor="fullName">Full Name:</label>
                        <input type="text" value={addressData.fullName} id="fullName" name="fullName"  onChange={(e)=>handleInputChange(e)}   required />
                    </div>
                    <div>
                        <label htmlFor="address">Address:</label>
                        <textarea id="address" value={addressData.address} name="address" rows="4"  onChange={(e)=>handleInputChange(e)}   required></textarea>
                    </div>
                    <div>
                        <label htmlFor="city">City:</label>
                        <input type="text" id="city" name="city"  onChange={(e)=>handleInputChange(e)}   value={addressData.city} required />
                    </div>
                    <div>
                        <label htmlFor="zipCode">Zip Code:</label>
                        <input type="text" id="zipCode" value={addressData.zipCode}  onChange={(e)=>handleInputChange(e)}   name="zipCode" required />
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