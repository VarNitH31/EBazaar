import React from 'react'
import "../cssfiles/contact.css"
import NavBar from './NavBar'
import Footer from './Footer'

function Contact() {
  return (
    <div>
        <NavBar/>
          <section class="contact">
        <div class="contact-content">
            <h2>Welcome to E-Bazaar Customer Service</h2><br/>
            <p>What would you like help with today? You can quickly take care of most things here, or connect with us when needed.
            </p>
        </div>
        <div class="contact-container">
            <div class="contact-info">
                <div class="contact-box">
                    <div class="contact-icon"><ion-icon name="navigate-outline"></ion-icon></div>
                    <div class="contact-text">
                        <h3>Address</h3>
                        <p>Bull Temple Road,<br/>Bengaluru, Karnataka, India, 560019</p>
                    </div>
                </div>
                <div class="contact-box">
                    <div class="contact-icon"><ion-icon name="call-outline"></ion-icon></div>
                    <div class="contact-text">
                        <h3>Phone</h3>
                        <p>1800-3000-9456</p>
                    </div>
                </div>
                <div class="contact-box">
                    <div class="contact-icon"><ion-icon name="mail-outline"></ion-icon></div>
                    <div class="contact-text">
                        <h3>Email</h3>
                        <p>ebazaar2024@gmail.com</p>
                    </div>
                </div>
            </div>
            <div class="contactform">
                <form>
                    <h2>Send Message</h2>
                    <div class="contact-inputbox">
                        <input type="text" name="" required="required"/>
                        <span>Full Name</span>
                    </div>
                    <div class="contact-inputbox">
                        <input type="text" name="" required="required"/>
                        <span>Email</span>
                    </div>
                    <div class="contact-inputbox">
                        <textarea required="required"></textarea>
                        <span>Type your message......</span>
                    </div>
                    <div class="contact-inputbox">
                        <input type="submit" name="" value="Send"/>
                    </div>
                </form>
            </div>
        </div>
    </section>
    <Footer/>
    </div>
  )
}

export default Contact
