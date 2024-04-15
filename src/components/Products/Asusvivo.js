import React from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer'



function Asusvivo({ addToCart }) {
  
  return (
    <div className='prodbody'>
        <NavBar/>
          <div className="small-container">
          <div className="prodrow">
            <div className="prodcol-2">
              <div className="prodimg">
                <img src="https://m.media-amazon.com/images/I/71O7BvBJc8L._AC_UY327_FMwebp_QL65_.jpg" alt='' />
              </div>
            </div>
            <div className="prodtext">
              <p>Laptops/Electronics</p>
              <br />
              <br />
              <h3>
              ASUS Vivobook 16X, AMD Ryzen 7 5800HS, 16" (40.64 cm) WUXGA, Thin & Light Laptop (16GB/512GB SSD/Integrated Graphics/Windows 11/Office 2021/Backlit/Fingerprint/Silver/1.88 kg), M1603QA-MB742WS
              </h3>
              <br />
              <h4> Rs 59,999</h4>
              <br />
              <input type="number" value="1" />
              <button id="addtocart" onClick={() => addToCart(15)}>
                ADD TO CART
              </button>
              <br />
              <br />
              <h5>Product details</h5>
              <br />
              <p>
                <b>Brand</b>- ASUS
                <br />
                <b>Model Name</b>- Vivobook 16X
                <br />
                <b>Screen Size</b>- 16 Inches
                <br />
                <b>Colour</b>- 	Transparent Silver
                <br />
                <b>Hard Disk Size</b>- 5122 GB
                <br />
                <b>OS</b>- Windows 11 Home
              </p>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
  )
}

export default Asusvivo
