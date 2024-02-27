import React from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer'



function Dellg15({ addToCart }) {
  
  return (
    <div className='prodbody'>
        <NavBar/>
        <div className="small-container">
        <div className="prodrow">
            <div className="prodcol-2">
                <div className="prodimg"> 
                    <img src="https://m.media-amazon.com/images/I/51rEPuvNYFL._SX425_.jpg"/>
                </div>
            </div>
            <div class="prodtext">
                <p>Laptops/Electronics</p><br /><br />
                <h3>Dell G15 5520 Gaming Laptop, Intel i5-12500H, 16GB DDR5, 512GB SSD, NVIDIA RTX 3050 (4GB GDDR6), 15.6"(39.62cm) FHD 120Hz 250 nits Display, Backlit KB Orange, Win 11 + MSO'21, Dark Shadow Grey, 2.81kg</h3><br />
                <h4>Rs 74,490</h4><br />
                <input type="number" value="1" />
                <button id="addtocart" onClick={() => addToCart(13)}>
                ADD TO CART
              </button>
                <h5>Product details</h5><br />
                <p><b>Brand</b>- Dell<br /><b>Model Name</b> - G15-5520<br /><b>Screen Size</b>- 15.6  inches<br /><b>Colour</b>- Dark Shadow Grey<br /><b>Hard Disk Size</b>- 512 GB<br /><b>OS</b>- Windows 11</p>
            </div>
        </div>
    </div>
        <Footer/>
      </div>
  )
}

export default Dellg15
