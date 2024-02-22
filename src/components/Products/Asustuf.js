import React from 'react'
import Footer from '../Footer'
import NavBar from '../NavBar'
import '../../cssfiles/productpage.css'
import { Link } from 'react-router-dom';

function Asustuf({ addToCart }) {
  return (
    <div className='prodbody'>
    <NavBar/>
    <div className="small-container">
        <div className="prodrow">
            <div className="col-2">
                <div className="prodimg">   
                    <img src="https://m.media-amazon.com/images/I/71-Fx3Vfq5L._AC_UY327_FMwebp_QL65_.jpg"/>
                </div>
            </div>
            <div className="prodtext">
                <p>Laptops/Electronics</p><br/><br/>
                <h3>ASUS TUF Gaming F15, 15.6"(39.62 cms) FHD 144Hz, Intel Core i7-11800H 11th Gen, 4GB NVIDIA GeForce RTX 3050 Ti, Gaming Laptop (16GB/1TB SSD/Win 11/MSO/90WHrs Battery/Black/2.30 Kg), FX506HE-HN385WS</h3><br/>
                <h4>Rs 79,990</h4><br/>
                <input type="number" defaultValue="1"/>
                <button id="addtocart" onClick={() => addToCart(14)}>ADD TO CART</button><br/><br/>
                <h5>Product details</h5><br/>
                <p><b>Brand</b>- ASUS<br/><b>Model Name</b> - TUF Gaming F 15<br/><b>Screen Size</b>- 15.6 inches<br/><b>Colour</b>- Black<br/><b>Hard Disk Size</b>- 1 TB<br/><b>OS</b>- Windows 11</p>
            </div>
        </div>
    </div>

   <Footer/>

    </div>
  )
}

export default Asustuf
