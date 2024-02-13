import React from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer'



function Iphone14pro({ addToCart }) {
  
  return (
    <div className='prodbody'>
        <NavBar/>
          <div className="small-container">
          <div className="prodrow">
            <div className="prodcol-2">
              <div className="prodimg">
              <img src="https://m.media-amazon.com/images/I/71ZDY57yTQL._SX679_.jpg"/>
                </div>
            </div>
            <div className="prodtext">
                <p>Laptops/Electronics</p><br /><br />
                <h3>Apple iPhone 14 Pro (128 GB) - Gold
                </h3><br />
                <h4>Rs1,29,999</h4><br />
                <input type="number" value="1"/>
                <button id="addtocart" onClick={() => addToCart(1)}>
                ADD TO CART
              </button>

                <h5>Product details</h5><br />
                <p><b>Brand</b>- Apple<br /><b>Model Name</b> - Iphone 14 pro<br /><b>Screen Size</b>- 6.2 inches<br /><b>Colour</b>- Gold<br /><b>Cellular Technology</b>- 5G<br /><b>OS</b>- iOS</p>
            </div>
        </div>
    </div>
        <Footer/>
      </div>    
  )
}

export default Iphone14pro
