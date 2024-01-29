import React from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer'
import "../../cssfiles/company.css"
import { Link } from 'react-router-dom';

function Hp() {
  return (
    <div>
        <NavBar/>
        <div className="compprodcontainer">
                <img src="https://m.media-amazon.com/images/I/61yI6BW+wbL._SX679_.jpg" alt=""/>
                <div className="content">
                <Link to="/1"> <h3 id="discription">Hp Pavilion X360 11Th Gen Intel Core I3 14 Inches Fhd Multitouch 2-in-1 Laptop(8Gb Ram/512Gb Ssd/B&O/Windows 11 Home/Fpr/Backlit Kb/Pen/Alexa/Uhd Graphics/Ms Office/Natural Silver/1.52Kg) 14-Dy0207Tu</h3></Link>
                        <p>1000+ brought in past month</p>
                        <h4>Deal of the Day</h4>
                        <p className="price">RS <strong>57,000</strong>  <sub>MRP <s>70,000</s> </sub></p>
                        <p> <sub>Save extra with no cost EMI</sub></p>
                </div>
            </div>
         <div className="compprodcontainer">
                <img src="https://m.media-amazon.com/images/I/81l6dhsPWHL._SX679_.jpg" alt=""/>
                <div className="content">
                       <Link to="/1"> <h3 id="discription">HP [Smartchoice] 14s, 11th Gen Intel Core i3-1125G4, 8GB RAM/256GB SSD 14"(35.6 cm) Micro-Edge, Anti-Glare, FHD/Alexa Built-in/Win 11/Intel UHD Graphics/Dual Speakers/ MSO21/1.41 Kg, 14s-dy2507TU</h3></Link>
                        <p>100+ brought in past month</p>
                        <h4>Deal of the Day</h4>
                        <p className="price">RS <strong>32,990</strong>  <sub>MRP <s>48,000</s> </sub></p>
                        <p> <sub>Save extra with no cost EMI</sub></p>
                </div>
         </div>
         <div className="compprodcontainer">
                <img src="https://m.media-amazon.com/images/I/61WY0CYG09L._SX679_.jpg"/>
                <div className="content">
                       <Link to="/1"> <h3 id="discription">HP Chromebook C640 10th Gen Intel Core i5 FHD Thin & Light Touchscreen Laptop (8 GB DDR4 RAM/64GB eMMC SSD + 32 GB MicroSD Card/14" (35.6 cm) FHD/Chrome OS/WiFi/BT/Webcam/Intel Graphics)</h3></Link>
                        <p>1000+ brought in past month</p>
                        <h4>Deal of the Day</h4>
                        <p className="price">RS <strong>17,990</strong>  <sub>MRP <s>46,999</s> </sub></p>
                        <p> <sub>Save extra with no cost EMI</sub></p>
                </div>
         </div>
         <div className="compprodcontainer">
                <img src="https://m.media-amazon.com/images/I/71PSiezUjIL._SL1500_.jpg" alt=""/>
                <div className="content">
                       <Link to="/1"> <h3 id="discription">HP Laptop 15, 13th Gen Intel Core i5-1335U, 15.6-inch (39.6 cm), FHD, 16GB DDR4, 512GB SSD, Intel Iris Xe Graphics, FHD Camera w/Privacy Shutter (Win 11, MSO 2021, Silver, 1.59 kg), fd0013TU</h3></Link>
                        <p>13 brought in past month</p>
                        <h4>Deal of the Day</h4>
                        <p className="price">RS <strong>62,999</strong>  <sub>MRP <s>78,999</s> </sub></p>
                        <p> <sub>Save extra with no cost EMI</sub></p>
                </div>
         </div>
         <Footer/>
    </div>
  )
}

export default Hp
