import React from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer'
import "../../cssfiles/company.css"
import { Link } from 'react-router-dom';

function Amazefit() {
  return (
    <div>
        <NavBar/>
        <div className="compprodcontainer">
                <img src="https://m.media-amazon.com/images/I/71f5Eu5lJSL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
                <div className="content">
                <Link to="/1">Apple 2023 MacBook Air laptop with M2 chip: 38.91cm (15.3 inch) Liquid Retina display, 8GB RAM 256GB SSD storage, backlit keyboard, 1080p FaceTime HD camera,Touch ID. Works with iPhone/iPad; Starlight</Link>
                        <p>1000+ brought in past month</p>
                        <h4>Deal of the Day</h4>
                        <p className="price">Rs <strong>1,14,999</strong>  <sub>MRP <s>1,50,000</s> </sub></p>
                        <p> <sub>Save extra with no cost EMI</sub></p>
                </div>
         </div>
         <div className="compprodcontainer">
                <img src="https://m.media-amazon.com/images/I/618d5bS2lUL._SX679_.jpg" alt=""/>
                <div className="content">
                       <Link to="/1"> Apple 2023 MacBook Pro (16-inch, M3 Max chip with 16-core CPU and 40-core GPU, 48GB Unified Memory, 1TB) - Space Black</Link>
                        <p>100+ brought in past month</p>
                        <h4>Deal of the Day</h4>
                        <p className="price">Rs <strong>3,69,990</strong>  <sub>MRP <s>3,99,999</s> </sub></p>
                        <p> <sub>Save extra with no cost EMI</sub></p>
                </div>
         </div>
         <div className="compprodcontainer">
                <img src="https://m.media-amazon.com/images/I/61RJn0ofUsL._SL1500_.jpg"/>
                <div className="content">
                       <Link to="/1"> Apple 2023 MacBook Pro (14-inch, M3 Pro chip with 11-core CPU and 14-core GPU, 18GB Unified Memory, 512GB) - Space Black</Link>
                        <p>1000+ brought in past month</p>
                        <h4>Deal of the Day</h4>
                        <p className="price">Rs <strong>1,66,990</strong>  <sub>MRP <s>1,99,990</s> </sub></p>
                        <p> <sub>Save extra with no cost EMI</sub></p>
                </div>
         </div>
         <div className="compprodcontainer">
                <img src="https://m.media-amazon.com/images/I/618gNo+ohxL._SX679_.jpg" alt=""/>
                <div className="content">
                       <Link to="/1"> Apple 2023 MacBook Pro Laptop M2 Pro chip with 12-core CPU and 19-core GPU: 33.74 cm (14.2-inch), 16GB Unified Memory, 1TB SSD Storage. Works with iPhone/iPad; Silver</Link>
                        <p>13+ brought in past month</p>
                        <h4>Deal of the Day</h4>
                        <p className="price">Rs <strong>2,25,999</strong>  <sub>MRP <s>3,15,000</s> </sub></p>
                        <p> <sub>Save extra with no cost EMI</sub></p>
                </div>
         </div>
         <Footer/>
    </div>
  )
}

export default Amazefit
