import React from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer'
import "../../cssfiles/company.css"
import { Link } from 'react-router-dom';

function Dell() {
  return (
    <div>
        <NavBar/>
        <div className="compprodcontainer">
                <img src="https://m.media-amazon.com/images/I/617yvpfxOpL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
                <div className="content">
                       <Link to="/1"> Dell 14 Laptop, 12th Gen Intel Core i3-1215U Processor/8GB/512GB SSD/Intel UHD Graphics/14.0"(35.56cm) FHD/Windows 11 + MSO'21/15 Month McAfee/Spill-Resistant Keyboard/Dark Silver/Thin & Light 1.48kg</Link>
                        <p>100+ brought in past month</p>
                        <h4>Deal of the Day</h4>
                        <p className="price">RS <strong>39,990</strong>  <sub>MRP <s>48,190</s> </sub></p>
                        <p> <sub>Save extra with no cost EMI</sub></p>
                </div>
         </div>
         <div className="compprodcontainer">
                <img src="https://m.media-amazon.com/images/I/51rEPuvNYFL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
                <div className="content">
                       <Link to="/1"> Dell G15 5520 Gaming Laptop, Intel i5-12500H, 16GB DDR5, 512GB SSD, NVIDIA RTX 3050 (4GB GDDR6), 15.6"(39.62cm) FHD 120Hz 250 nits Display, Backlit KB Orange, Win 11 + MSO'21, Dark Shadow Grey, 2.81kg</Link>
                        <p>100+ brought in past month</p>
                        <h4>Deal of the Day</h4>
                        <p className="price">RS <strong>74,490</strong>  <sub>MRP <s>93,990</s> </sub></p>
                        <p> <sub>Save extra with no cost EMI</sub></p>
                </div>
         </div>
         <div className="compprodcontainer">
                <img src="https://m.media-amazon.com/images/I/614TqOFmRtL._AC_UY327_FMwebp_QL65_.jpg"/>
                <div className="content">
                       <Link to="/1"> Dell Inspiron 3530 Laptop, 13th Gen Intel Core i5-1335U Processor/16GB/1TB SSD/15.6" (39.62cm) FHD Display/Backlit Keyboard/Platinum Silver/Win 11 + MSO'21/15 Month McAfee/Thin & Light- 1.66kg</Link>
                        <p>100+ brought in past month</p>
                        <h4>Deal of the Day</h4>
                        <p className="price">RS <strong>65,990</strong>  <sub>MRP <s>72,300</s> </sub></p>
                        <p> <sub>Save extra with no cost EMI</sub></p>
                </div>
         </div>
         <div className="compprodcontainer">
                <img src="https://m.media-amazon.com/images/I/616mMfOIOEL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
                <div className="content">
                       <Link to="/1"> Dell Alienware m16 R1 Gaming Laptop, Intel i7-13700HX/16GB DDR5/1TB SSD/NVIDIA RTX 4060, 8 GB GDDR6/16 (40.64cm) QHD+ 165Hz Comfortview Plus/AlienFX RGB KB/Win 11 + MSO'21/Metallic Moon/3.25kg</Link>
                        <p>13 brought in past month</p>
                        <h4>Deal of the Day</h4>
                        <p className="price">RS <strong>2,49,999</strong>  <sub>MRP <s>2,89,000</s> </sub></p>
                        <p> <sub>Save extra with no cost EMI</sub></p>
                </div>
         </div>

         <Footer/>
    </div>
  )
}

export default Dell
