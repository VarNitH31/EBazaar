import React from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer'
import { Link } from 'react-router-dom';


function Pebblecosmos({ addToCart }) {
  
  return (
    <div className='prodbody'>
        <NavBar/>
          <div className="small-container">
          <div className="prodrow">
            <div className="prodcol-2">
              <div className="prodimg">
              <img src="https://m.media-amazon.com/images/I/61Jayni-kPL._AC_UY327_FMwebp_QL65_.jpg" />
                </div>
            </div>
            <div class="prodtext">
                <p>Laptops/Electronics</p><br /><br />
                <h3>Pebble Cosmos Prime Bluetooth Calling Smart Watch,Largest 1.91" Bezel-less Edge-to-Edge Display,600 Nits br /ightness,Sleek Metallic Body, Wireless Charging, Health Suite(Moon light Blue)</h3><br />
                <h4>&#8377 899</h4><br />
                <input type="number" value="1" />
              <button id="addtocart" onClick={() => addToCart(13)}>
                ADD TO CART
              </button>

                <h5>Product details</h5><br />
                <p /><b>br /and</b>- Pebble<br /><b>Model Name</b> - Cosmos Prime<br /><b>Screen Size</b>- 1.9 inches<br /><b>Colour</b>- Moon Light Blue<br /><b>Style</b>- Classic<br />
            </div>
        </div>
    </div>
        <Footer/>
      </div>
  )
}

export default Pebblecosmos
