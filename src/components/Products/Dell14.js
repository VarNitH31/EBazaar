import React from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer'




function Dell14({ addToCart }) {
  
  return (
    <div className='prodbody'>
        <NavBar/>
        <div className="small-container">
        <div className="prodrow">
            <div className="prodcol-2">
                <div className="prodimg">      
                <img src="https://m.media-amazon.com/images/I/617yvpfxOpL._AC_UY327_FMwebp_QL65_.jpg" />
                </div>
            </div>
            <div class="prodtext">
                <p>Laptops/Electronics</p><br /><br />
                <h3>Dell 14 Laptop, 12th Gen Intel Core i3-1215U Processor/8GB/512GB SSD/Intel UHD Graphics/14.0"(35.56cm) FHD/Windows 11 + MSO'21/15 Month McAfee/Spill-Resistant Keyboard/Dark Silver/Thin & Light 1.48kg</h3><br />
                <h4>Rs 39,990</h4><br />
                <input type="number" value="1" />
                <button id="addtocart" onClick={() => addToCart(16)}>
                ADD TO CART
              </button>
                <h5>Product details</h5><br />
                <p><b>Brand</b>- Dell<br /><b>Model Name</b> - Vostro 3420<br /><b>Screen Size</b>- 14 inches<br /><b>Colour</b>- Dark Silver<br /><b>Hard Disk Size</b>- 512 GB<br /><b>OS</b>- Windows 11</p>
            </div>
        </div>
    </div>
        <Footer/>
      </div>
  )
}

export default Dell14
