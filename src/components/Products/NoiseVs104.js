import React from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer'
import { Link } from 'react-router-dom';


function NoiseVs104({ addToCart }) {
  
  return (
    <div className='prodbody'>
        <NavBar/>
          <div className="small-container">
          <div className="prodrow">
            <div className="prodcol-2">
              <div className="prodimg">
              <img src="https://m.media-amazon.com/images/I/51apXDsv2CL._AC_UY327_FMwebp_QL65_.jpg" />
                </div>
            </div>
            <div class="prodtext">
                <p>Laptops/Electronics</p><br /><br />
                <h3>Noise Buds VS104 Max Truly Wireless in-Ear Earbuds with ANC(Up to 25dB),Up to 45H Playtime, Quad Mic with ENC, Instacharge(10 min=180 min), 13mm Driver, BT v5.3 (Jet Black)</h3><br />
                <h4>Rs 799</h4><br />
                <input type="number" value="1" />
                <button id="addtocart" onClick={() => addToCart(10)}>
                ADD TO CART
              </button>
                <a href="" class="btn">ADD TO CART</a><br /><br />
                <h5>Product details</h5><br />
                <p><b>Brand</b>- Noise<br /><b>Model Name</b> - Buds VS104 Max<br /><b>Colour</b>- Jet Black<br />
                <b>Form Factor</b>- IN Ear<br /><b>Connectivity Technology</b>- Bluetooth 4.2</p>
            </div>
        </div>
    </div>
        <Footer/>
      </div>
  )
}

export default NoiseVs104
