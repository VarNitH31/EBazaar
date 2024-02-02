import React from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer'
import { Link } from 'react-router-dom';


function Zebronicthunder({ addToCart }) {
  
  return (
    <div className='prodbody'>
        <NavBar/>
          <div className="small-container">
          <div className="prodrow">
            <div className="prodcol-2">
              <div className="prodimg">
              <img src="https://m.media-amazon.com/images/I/61smYWXWx9L._AC_UY327_FMwebp_QL65_.jpg" />
                </div>
            </div>
            <div class="prodtext">
                <p>Laptops/Electronics</p><br /><br />
                <h3>ZEbr /ONICS Thunder 60 hrs Playback time Bluetooth Wireless Headphone with FM, mSD, Playback with Mic (Sea Green)</h3><br />
                <h4>&#8377 799</h4><br />
                <input type="number" value="1" />
              <button id="addtocart" onClick={() => addToCart(13)}>
                ADD TO CART
              </button>
           
                <h5>Product details</h5><br />
                <p><b>br /and</b>- ZEbr /ONICS<br /><b>Model Name</b> - ZEB-THUNDER<br /><b>Colour</b>- Sea Green<br /><b>Form Factor</b>- Over Ear<br /><b>Connectivity Technology</b>- Bluetooth 4.2</p>
            </div>
        </div>
    </div>
        <Footer/>
      </div>
  )
}

export default Zebronicthunder
