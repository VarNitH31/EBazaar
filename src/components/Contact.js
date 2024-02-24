import React, { useState } from 'react'
import "../cssfiles/contact.css"
import NavBar from './NavBar'
import Footer from './Footer'
import axios from 'axios';

function Contact() {
   
    const [contactData, setContactData] = useState({
        fullName:"",
        email:"",
        message:"",
    });


   const handleContact=async (event)=>{
    event.preventDefault();
    const { fullName, email, message } = contactData;

    if (fullName.trim() === '' || email.trim() ===  '' || message.trim() === '') {
        alert('All fields must be filled out');
        return false;
      }

    
    try {
        await axios.post('http://localhost:3001/api/contact',contactData);
        console.log("message sent successfully")
    } catch (error) {
        console.error('Error Sending message:', error);
    }
    
    setContactData({
        fullName:"",
        email:"",
        message:"",
    })

  
   console.log(contactData);
   }

    const handleInputChange=(event)=>{
        const{name,value}=event.target;
         setContactData({
            ...contactData,
            [name]:value
         })
    }

  return (
    <div>
        <NavBar/>
          <section className="contact">
        <div className="contact-content">
            <h2>Welcome to E-Bazaar Customer Service</h2><br/>
            <p>What would you like help with today? You can quickly take care of most things here, or connect with us when needed.
            </p>
        </div>
        <div className="contact-container">
            <div className="contact-info">
                <div className="contact-box">
                    <div className="contact-icon"><ion-icon name="navigate-outline"></ion-icon></div>
                    <div className="contact-text">
                        <h3>Address</h3>
                        <p>Bull Temple Road,<br/>Bengaluru, Karnataka, India, 560019</p>
                    </div>
                </div>
                <div className="contact-box">
                    <div className="contact-icon"><ion-icon name="call-outline"></ion-icon></div>
                    <div className="contact-text">
                        <h3>Phone</h3>
                        <p>1800-3000-9456</p>
                    </div>
                </div>
                <div className="contact-box">
                    <div className="contact-icon"><ion-icon name="mail-outline"></ion-icon></div>
                    <div className="contact-text">
                        <h3>Email</h3>
                        <p>ebazaar2024@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="contactform" onSubmit={handleContact}>
                <form>
                    <h2>Send Message</h2>
                    <div className="contact-inputbox">
                        <input type="text" name="fullName" value={contactData.fullName} onChange={(e)=>handleInputChange(e)}  required="required" />
                        <span>Full Name</span>
                    </div>
                    <div className="contact-inputbox">
                        <input type="email" name="email" value={contactData.email} onChange={(e)=>handleInputChange(e)} required="required"/>
                        <span>Email</span>
                    </div>
                    <div className="contact-inputbox">
                        <textarea required="required" name='message' onChange={(e)=>handleInputChange(e)} value={contactData.message} ></textarea>
                        <span>Type your message......</span>
                    </div>
                        <button className='contact-send' type='submit'>Send</button>
                </form>
            </div>
        </div>
    </section>
    <Footer/>
    </div>
  )
}

export default Contact
