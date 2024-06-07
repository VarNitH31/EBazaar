import React from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer'
import "../../cssfiles/company.css"
import { Link } from 'react-router-dom';

function Noise() {
  return (
    <div>
        <NavBar/>
        <div className="compprodcontainer">
                <img src="https://m.media-amazon.com/images/I/51apXDsv2CL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
                <div className="content">
                       <Link to="/noiseVs104"> <h3 id="discription">Noise Buds VS104 Max Truly Wireless in-Ear Earbuds with ANC(Up to 25dB),Up to 45H Playtime, Quad Mic with ENC, Instacharge(10 min=180 min), 13mm Driver, BT v5.3 (Jet Black)
                    </h3></Link>
                        <p>100+ brought in past month</p>
                        <h4>Deal of the Day</h4>
                        <p className="price">Rs <strong>1,799</strong>  <sub>MRP <s>2,990</s> </sub></p>
                        <p> <sub>Save extra with no cost EMI</sub></p>
                </div>
         </div>
         <div className="compprodcontainer">
                <img src="https://m.media-amazon.com/images/I/41QG7VWIpLL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
                <div className="content">
                       <Link to="/1"> <h3 id="discription">Noise Buds Connect Truly Wireless in Ear Earbuds with 50H Playtime, Quad Mic with ENC, Instacharge(10 min=120 min), 13mm Driver, Hyper Sync, and BT v5.2 (Carbon Black)</h3></Link>
                        <p>100+ brought in past month</p>
                        <h4>Deal of the Day</h4>
                        <p className="price">Rs <strong>1,099</strong>  <sub>MRP <s>3,990</s> </sub></p>
                        <p> <sub>Save extra with no cost EMI</sub></p>
                </div>
         </div>
         <div className="compprodcontainer">
                <img src="https://m.media-amazon.com/images/I/41XP2pECfEL._SX300_SY300_QL70_FMwebp_.jpg"/>
                <div className="content">
                       <Link to="/1"> <h3 id="discription">Noise Buds VS201 V3 in-Ear Truly Wireless Earbuds with 60H of Playtime, Dual Equalizer, Full Touch Control, Mic, BTv5.1 (Forest Green)</h3></Link>
                        <p>100+ brought in past month</p>
                        <h4>Deal of the Day</h4>
                        <p className="price">Rs <strong>990</strong>  <sub>MRP <s>3,990</s> </sub></p>
                        <p> <sub>Save extra with no cost EMI</sub></p>
                </div>
         </div>
         <div className="compprodcontainer">
                <img src="https://m.media-amazon.com/images/I/31XUHqBG5qL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
                <div className="content">
                       <Link to="/1"> <h3 id="discription">Noise Buds VS402 in-Ear Truly Wireless Earbuds with 50H of Playtime, Low Latency, Quad Mic with ENC, Instacharge(10 min=120 min),10mm Driver, BT v5.3, Breathing LED Lights (Neon White)</h3></Link>
                        <p>13 brought in past month</p>
                        <h4>Deal of the Day</h4>
                        <p className="price">Rs <strong>990</strong>  <sub>MRP <s>3990</s> </sub></p>
                        <p> <sub>Save extra with no cost EMI</sub></p>
                </div>
         </div>


         <Footer/>
    </div>
  )
}

export default Noise
