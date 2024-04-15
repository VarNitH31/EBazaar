import React from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer'



function Asuszephurs({ addToCart }) {
  
  return (
    <div className='prodbody'>
        <NavBar/>
          <div className="small-container">
          <div className="prodrow">
            <div className="prodcol-2">
              <div className="prodimg">
                <img src="https://m.media-amazon.com/images/I/81m-xYfxznL._AC_UY327_FMwebp_QL65_.jpg" alt='' />
              </div>
            </div>
            <div className="prodtext">
              <p>Laptops/Electronics</p>
              <br />
              <br />
              <h3>
              ASUS ROG Zephyrus G14 (2022), 14.0-inch (35.56 cm) FHD+ 16:10 144Hz/3ms, AMD Ryzen 9 6900HS, 8GB RX 6700S Graphics, Gaming Laptop (16GB/1TB SSD/Windows 11/Office 2021/Gray/1.65 Kg), GA402RJZ-L4136WS
              </h3>
              <br />
              <h4> Rs 1,49,999</h4>
              <br />
              <input type="number" value="1" />
              <button id="addtocart" onClick={() => addToCart(4)}>
                ADD TO CART
              </button>
              <br />
              <br />
              <h5>Product details</h5>
              <br />
              <p>
                <b>Brand</b>- ASUS
                <br />
                <b>Model Name</b>- ROG Zephyrus G14 (2022)
                <br />
                <b>Screen Size</b>- 35.56 Centimetres
                <br />
                <b>Colour</b>- Eclipse Gray
                <br />
                <b>Hard Disk Size</b>- 1 TB
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

export default Asuszephurs
