import React from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer'
import { Link } from 'react-router-dom';


function Fastreflex({ addToCart }) {
  
  return (
    <div className='prodbody'>
        <NavBar/>
          <div className="small-container">
          <div className="prodrow">
            <div className="prodcol-2">
              <div className="prodimg">
              <img src="https://m.media-amazon.com/images/I/613-tICaGQL._AC_UY327_FMwebp_QL65_.jpg" />
                </div>
            </div>
            <div class="prodtext">
                <p><b>Fastrack FS1 Pro Smartwatch with AOD|World's First 1.96" Super AMOLED Arched Display with Highest Resolution of 410x502|SingleSync BT Calling|NitroFast Charging|110+ Sports Modes|200+ Watchfaces</b></p><br /><br />
                <h4>Rs 2,799</h4><br />
                <input type="number" value="1"/>
                <button id="addtocart" onClick={() => addToCart(12)}>
                ADD TO CART
              </button>
               <br /><br />
                <h5>Product details</h5><br />
                <p><b>Brand</b>- Fastrack<br /><b>Model Name</b> - Fastrack FS1 Pro<br /><b>Style</b>- Modern inches<br /><b>Colour</b>- Teal<br /><b>Screen Size</b>- 1.96 Inches<br /></p>
            </div>
        </div>
    </div>
        <Footer/>
      </div>
  )
}

export default Fastreflex
