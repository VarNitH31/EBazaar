import React from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer'
import { Link } from 'react-router-dom';
import "../../cssfiles/productpage.css"


function Pavillionx360({ addToCart }) {
  
  return (
    <div className='prodbody'>
        <NavBar/>
          <div className="small-container">
          <div className="prodrow">
            <div className="prodcol-2">
              <div className="prodimg">
              <img src="https://m.media-amazon.com/images/I/61yI6BW+wbL._AC_UY327_FMwebp_QL65_.jpg" />
                </div>
            </div>
            <div className="text">
                <p>Laptops/Electronics</p><br /><br />
                <h3>Hp Pavilion X360 11Th Gen Intel Core I3 14 Inches Fhd Multitouch 2-in-1 Laptop(8Gb Ram/512Gb Ssd/B&O/Windows 11 Home/Fpr/Backlit Kb/Pen/Alexa/Uhd Graphics/Ms Office/Natural Silver/1.52Kg) 14-Dy0207Tu</h3><br />
                <h4>Rs 57,600</h4><br />
                <input type="number" value="1"/>
                <button id="addtocart" onClick={() => addToCart(5)}>ADD TO CART</button><br/><br/>
                <h5>Product details</h5><br />
                <p><b>Brand</b>- HP<br /><b>Model Name</b> - 14-dy0207TU<br /><b>Screen Size</b>- 14 inches<br /><b>Colour</b>- Natural Silver<br /><b>Hard Disk Size</b>- 512GB<br /><b>OS</b>- Windows 11</p>
            </div>
        </div>
    </div>
        <Footer/>
      </div>
  )
}

export default Pavillionx360
