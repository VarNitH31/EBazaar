import React from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer'
import "../../cssfiles/company.css"
import { Link } from 'react-router-dom';

function Pebble() {
  return (
    <div>
        <NavBar/>
        <div className="compprodcontainer">
                <img src="https://m.media-amazon.com/images/I/71Um88uP9NL._SY450_.jpg" alt="" />
                <div className="content">
                       <Link to="/1"> <h3 id="discription">Pebble Trio 1.96" Infinite Display BT Calling Smartwatch, Health Suite, Health Suit, Multi Sports, Multiple Watch Faces, AI Voice Assistance, Smart Calculator, Alaram & Notification</h3></Link>
                        <p>100+ brought in past month</p>
                        <h4>Deal of the Day</h4>
                        <p className="price">Rs <strong>2,990</strong>  <sub>MRP <s>7,990</s> </sub></p>
                        <p> <sub>Save extra with no cost EMI</sub></p>
                </div>
         </div>
         <div className="compprodcontainer">
                <img src="https://m.media-amazon.com/images/I/51WMYOg8vKL._SX300_SY300_QL70_FMwebp_.jpg" alt="" />
                <div className="content">
                       <Link to="/1"> <h3 id="discription">Pebble Cosmos Endure 1.46" AMOLED Always-On Display Bluetooth Calling IP68 Waterproof Smartwatch 466 * 466 (Military Green)</h3></Link>
                        <p>100+ brought in past month</p>
                        <h4>Deal of the Day</h4>
                        <p className="price">Rs <strong>4,490</strong>  <sub>MRP <s>12,990</s> </sub></p>
                        <p> <sub>Save extra with no cost EMI</sub></p>
                </div>
         </div>
         <div className="compprodcontainer">
                <img src="https://m.media-amazon.com/images/I/41Uw2aCF4fL._SX300_SY300_QL70_FMwebp_.jpg" />
                <div className="content">
                       <Link to="/pebblecosmos"> <h3 id="discription">Newly Launched Pebble Cosmos Prime Bluetooth Calling Smart Watch,Largest 1.91" Bezel-less Edge-to-Edge Display,600 Nits Brightness,Sleek Metallic Body, Wireless Charging, Health Suite(Moon light Blue)</h3></Link>
                        <p>100+ brought in past month</p>
                        <h4>Deal of the Day</h4>
                        <p className="price">Rs <strong>3,899</strong>  <sub>MRP <s>7,999</s> </sub></p>
                        <p> <sub>Save extra with no cost EMI</sub></p>
                </div>
         </div>
         <div className="compprodcontainer">
                <img src="https://m.media-amazon.com/images/I/41LOjD77OjL._SX300_SY300_QL70_FMwebp_.jpg" alt="" />
                <div className="content">
                       <Link to="/1"> <h3 id="discription">Pebble Revo Smartwatch, 1.3"(3.3cm) HD Touchscreen, Bluetooth Calling, Smart Watch with Rolling UI & Dual Button Technology, Spo2, Heart Rate & Temperature Monitoring (Tan Leather)</h3></Link>
                        <p>13 brought in past month</p>
                        <h4>Deal of the Day</h4>
                        <p className="price">Rs <strong>4,999</strong>  <sub>MRP <s>7,499</s> </sub></p>
                        <p> <sub>Save extra with no cost EMI</sub></p>
                </div>
         </div>


         <Footer/>
    </div>
  )
}

export default Pebble
