import React from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer'
import "../../cssfiles/company.css"
import { Link } from 'react-router-dom';

function Zebronics() {
  return (
    <div>
        <NavBar/>
        <div className="compprodcontainer">
                <img src="https://m.media-amazon.com/images/I/61mYYXZMpZL._SY679_.jpg" alt=""/>
                <div className="content">
                       <Link to="/1"> <h3 id="discription">ZEBRONICS Zeb-Sound Bomb 1 TWS Earbuds with BT5.0, Up to 12H Playback, Touch Controls, Voice Assistant, Splash Proof with Type C Portable Charging Case (Black with Green)</h3></Link>
                        <p>100+ brought in past month</p>
                        <h4>Deal of the Day</h4>
                        <p className="price">Rs <strong>690</strong>  <sub>MRP <s>2,990</s> </sub></p>
                        <p> <sub>Save extra with no cost EMI</sub></p>
                </div>
         </div>
         <div className="compprodcontainer">
                <img src="https://m.media-amazon.com/images/I/41IytTiGYkL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
                <div className="content">
                       <Link to="/1"> <h3 id="discription">ZEBRONICS Pods 2 Wireless TWS Earbuds with Bluetooth 5.3,Led Display,Voice Assistant,Call Function,Transparent Charging Case,Touch Control&Built-in Rechargeable Battery-Neon,in-Ear</h3></Link>
                        <p>100+ brought in past month</p>
                        <h4>Deal of the Day</h4>
                        <p className="price">Rs <strong>899</strong>  <sub>MRP <s>2,990</s> </sub></p>
                        <p> <sub>Save extra with no cost EMI</sub></p>
                </div>
         </div>
         <div className="compprodcontainer">
                <img src="https://m.media-amazon.com/images/I/71p1qpkQy4L._SY450_.jpg"/>
                <div className="content">
                       <Link to="/1"> <h3 id="discription">ZEBRONICS Duke 60hrs Playtime Bluetooth Wireless Over Ear Headphone with Mic (Black)</h3></Link>
                        <p>100+ brought in past month</p>
                        <h4>Deal of the Day</h4>
                        <p className="price">Rs <strong>1,990</strong>  <sub>MRP <s>2,990</s> </sub></p>
                        <p> <sub>Save extra with no cost EMI</sub></p>
                </div>
         </div>
         <div className="compprodcontainer">
                <img src="https://m.media-amazon.com/images/I/61smYWXWx9L._SX569_.jpg" alt=""/>
                <div className="content">
                       <Link to="/zebronics1"> <h3 id="discription">Zebronics Thunder 60 hrs Playback time Bluetooth Wireless Headphone with FM, mSD, Playback with Mic (Black)</h3></Link>
                        <p>13 brought in past month</p>
                        <h4>Deal of the Day</h4>
                        <p className="price">Rs <strong>799</strong>  <sub>MRP <s>1,990</s> </sub></p>
                        <p> <sub>Save extra with no cost EMI</sub></p>
                </div>
         </div>


         <Footer/>
    </div>
  )
}

export default Zebronics
