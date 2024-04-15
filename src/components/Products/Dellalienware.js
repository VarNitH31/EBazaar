import React from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer'



function Dellalienware({ addToCart }) {
  
  return (
    <div className='prodbody'>
        <NavBar/>
        <div className="small-container">
        <div className="prodrow">
            <div className="prodcol-2">
                <div className="prodimg"> 
                    <img src="https://m.media-amazon.com/images/I/51dooiy0IvL._AC_UY327_FMwebp_QL65_.jpg"/>
                </div>
            </div>
            <div class="prodtext">
                <p>Laptops/Electronics</p><br /><br />
                <h3>Dell Alienware m15 R1 Gaming Laptop, Intel Core i7-11800H Processor/ 16GB/ 1TB SSD/Win 11 + MSO'21/ NVIDIA RTX 3060 6GB/ 15.6" (39.62cm) FHD 300 nits 360Hz + Alien FX/Lunar Light/ 2.27kg</h3><br />
                <h4>Rs 2,49,999</h4><br />
                <input type="number" value="1" />
                <button id="addtocart" onClick={() => addToCart(6)}>
                ADD TO CART
              </button>
                <h5>Product details</h5><br />
                <p><b>Brand</b>- Dell<br /><b>Model Name</b> - Alienware m15<br /><b>Screen Size</b>- 15.6  inches<br /><b>Colour</b>-	Lunar Silver<br /><b>Hard Disk Size</b>- 1 TB<br /><b>OS</b>- Windows 11 Home</p>
            </div>
        </div>
    </div>
        <Footer/>
      </div>
  )
}

export default Dellalienware
