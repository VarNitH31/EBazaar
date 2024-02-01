import React from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer'



function SamsungZ({ addToCart }) {
  
  return (
    <div className='prodbody'>
        <NavBar/>
          <div className="small-container">
          <div className="prodrow">
            <div className="prodcol-2">
              <div className="prodimg">
              <img src="https://m.media-amazon.com/images/I/714QNdK8BWL._AC_UY327_FMwebp_QL65_.jpg" />
                </div>
            </div>
            <div class="text">
                <p>Laptops/Electronics</p><br /><br />
                <h3>Samsung Galaxy Z Fold4 5G (Gold, 12GB RAM, 128GB Storage)``
                </h3><br />
                <h4>Rs 1,29,999</h4><br />
                <input type="number" value="1"/>
                <button id="addtocart" onClick={() => addToCart(3)}>
                ADD TO CART
              </button>
               <br /><br />
                <h5>Product details</h5><br />
                <p><b>Brand</b>- Samsung<br /><b>Model Name</b> - Samsung Galaxy Z Fold4 <br /><b>Screen Size</b>- 6.2 inches<br /><b>Colour</b>- Gold<br /><b>Cellular Technology</b>- 5G<br /><b>OS</b>- Android 12.0</p>
            </div>
        </div>
    </div>
        <Footer/>
      </div>
  )
}

export default SamsungZ
