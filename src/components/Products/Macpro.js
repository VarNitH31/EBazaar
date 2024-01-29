import React from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer'
import { Link } from 'react-router-dom';


function Macpro({ addToCart }) {
  
  return (
    <div className='prodbody'>
        <NavBar/>
        <div className="small-container">
        <div className="prodrow">
            <div className="prodcol-2">
                <div className="prodimg">      
                    <img src="https://m.media-amazon.com/images/I/618d5bS2lUL._SX679_.jpg" alt=""/>
                </div>
            </div>
            <div class="prodtext">
                <p>Laptops/Electronics</p><br /><br />
                <h3>Apple 2023 MacBook Pro (16-inch, M3 Max chip with 16-core CPU and 40-core GPU, 48GB Unified Memory, 1TB) - Space Black</h3><br />
                <h4>Rs 3,69,990</h4><br />
                <input type="number" value="1" />
                <button id="addtocart" onClick={() => addToCart(13)}>
                    ADD TO CART
                    </button>
                <a href="" class="btn">ADD TO CART</a><br /><br />
                <h5>Product details</h5><br />
                <p><b>Brand</b>- Apple<br /><b>Model Name</b> - Macbook Pro<br /><b>Screen Size</b>- 16 inches<br /><b>Colour</b>- Space black<br /><b>Hard Disk Size</b>- 1 TB<br /><b>OS</b>- MAC OS</p>
            </div>
        </div>
    </div>
        <Footer/>
      </div>
  )
}

export default Macpro
