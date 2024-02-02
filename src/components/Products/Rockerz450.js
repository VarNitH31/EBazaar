import React from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer'
import { Link } from 'react-router-dom';


function Rockerz450({ addToCart }) {
  
  return (
    <div className='prodbody'>
        <NavBar/>
          <div className="small-container">
          <div className="prodrow">
            <div className="prodcol-2">
              <div className="prodimg">
              <img src="https://m.media-amazon.com/images/I/51xxA+6E+xL._AC_UY327_FMwebp_QL65_.jpg" />
                </div>
            </div>
            <div className="prodtext">
                <p>Laptops/Electronics</p><br /><br />
                <h3>boAt Rockerz 450 Bluetooth On Ear Headphones with Mic, Upto 15 Hours Playback, 40MM Drivers, Padded Ear Cushions, Integrated Controls and Dual Modes(Luscious Black)</h3><br />
                <h4>&#8377 1,599</h4><br />
                <input type="number" value="1" />
              <button id="addtocart" onClick={() => addToCart(13)}>
                ADD TO CART
              </button>
               
                <h5>Product details</h5><br />
                <p><b>br /and</b>- Boat<br /><b>Model Name</b> - Rockerz 450<br /><b>Colour</b>- Luscious Black<br /><b>Form Factor</b>- Over Ear<br /><b>Connectivity Technology</b>- Wireless</p>
            </div>
        </div>
    </div>
        <Footer/>
      </div>
  )
}

export default Rockerz450
