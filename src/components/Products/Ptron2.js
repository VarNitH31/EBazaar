import React from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer'
import { Link } from 'react-router-dom';


function Ptron2({ addToCart }) {
  
  return (
    <div className='prodbody'>
        <NavBar/>
          <div className="small-container">
          <div className="prodrow">
            <div className="prodcol-2">
              <div className="prodimg">
                <img src="https://m.media-amazon.com/images/I/71m7XVxRD-L._AC_UY327_FMwebp_QL65_.jpg" />
              </div>
            </div>
            <div className="prodtext">
              <p>Laptops/Electronics</p>
              <br />
              <br />
              <h3>
                ASUS Rog Strix G15, AMD Ryzen 7 6800H, (Include - Rog Impact Mouse & Mat), 15.6"(39.62 Cm) Fhd
                144Hz, 4Gb RTX 3050 Gpu, Gaming Laptop (16Gb/1Tb Ssd/Win11/Office 21/2.1 Kg),G513Rc-Hn085Ws
              </h3>
              <br />
              <h4> Rs 96,990</h4>
              <br />
              <input type="number" value="1" />
              <button id="addtocart" onClick={() => addToCart(13)}>
                ADD TO CART
              </button>
              <br />
              <br />
              <h5>Product details</h5>
              <br />
              <p>
                <b>Brand</b>- ASUS
                <br />
                <b>Model Name</b> - ROG Strix G 15
                <br />
                <b>Screen Size</b>- 15.6 inches
                <br />
                <b>Colour</b>- Eclipse Gray
                <br />
                <b>Hard Disk Size</b>- 1 TB
                <br />
                <b>OS</b>- Windows 11
              </p>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
  )
}

export default Ptron2
