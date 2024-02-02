import React from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer'
import { Link } from 'react-router-dom';


function Macair({ addToCart }) {
  
  return (
    <div className='prodbody'>
        <NavBar/>
        <div className="small-container">
        <div className="prodrow">
            <div className="prodcol-2">
                <div className="prodimg">   
                    <img src="https://m.media-amazon.com/images/I/71f5Eu5lJSL._AC_UY327_FMwebp_QL65_.jpg"/>
                </div>
            </div>
            <div className="prodtext">
                <p>Laptops/Electronics</p><br /><br />
                <h3>Apple 2022 MacBook Air Laptop with M2 chip: 34.46 cm (13.6-inch) Liquid Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, 1080p FaceTime HD Camera. Works with iPhone/iPad; Space Grey</h3><br />
                <h4>Rs 1,14,900</h4><br />
                <input type="number" value="1" />
                <button id="addtocart" onClick={() => addToCart(7)}>
                    ADD TO CART
                    </button>
                
                <h5>Product details</h5><br />
                <p><b>Brand</b>- Apple<br /><b>Model Name</b> - Macbook Air<br /><b>Screen Size</b>- 13.6 inches<br /><b>Colour</b>- Space Grey<br /><b>Hard Disk Size</b>- 256GB<br /><b>OS</b>- MAC OS</p>
            </div>
        </div>
    </div>
        <Footer/>
      </div>
  )
}

export default Macair
