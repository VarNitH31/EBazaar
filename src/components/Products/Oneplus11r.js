import React from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer'
import { Link } from 'react-router-dom';


function Oneplus11r({ addToCart }) {
  
  return (
    <div className='prodbody'>
        <NavBar/>
          <div className="small-container">
          <div className="prodrow">
            <div className="prodcol-2">
              <div className="prodimg">
              <img src="https://m.media-amazon.com/images/I/613SAOPmLeL._AC_UY327_FMwebp_QL65_.jpg" />
                </div>
            </div>
            <div class="prodtext">
                <p>Laptops/Electronics</p><br /><br />
                <h3>OnePlus 11R 5G (Galactic Silver, 8GB RAM, 128GB Storage)
                </h3><br />
                <h4>&#8377 39,999</h4><br />
                <input type="number" value="1" />
                <button id="addtocart" onClick={() => addToCart(13)}>
                ADD TO CART
              </button>
           
                <h5>Product details</h5><br />
                <p><b>br /and</b>- OnePlus<br /><b>Model Name</b> - Oneplus 11R<br /><b>Screen Size</b>- 6.1 inches<br /><b>Colour</b>- Galactic Silver<br /><b>Cellular Technology</b>- 5G<br /><b>OS</b>- OxygenOS</p>
            </div>
        </div>
    </div>
        <Footer/>
      </div>
  )
}

export default Oneplus11r
