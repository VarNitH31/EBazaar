import React from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer'
import "../../cssfiles/company.css"
import { Link } from 'react-router-dom';

function Ptron() {
  return (
    <div>
        <NavBar/>
        <div className="compprodcontainer">
                <img src="https://m.media-amazon.com/images/I/61Yrnp6VyKL._SX679_.jpg" alt=""/>
                <div className="content">
                       <Link to="/1"> <h3 id="discription">pTron Newly Launched Reflect Pro Plus Smartwatch, Bluetooth Calling,2.01" Full Touch Display, Full Metal Body, 650NITS, Digital Crown,100+ Watch Faces,HR,SpO2,Voice Assist, 5 Days Battery Life(Black)</h3></Link>
                        <p>100+ brought in past month</p>
                        <h4>Deal of the Day</h4>
                        <p className="price">Rs <strong>1,990</strong>  <sub>MRP <s>4,190</s> </sub></p>
                        <p> <sub>Save extra with no cost EMI</sub></p>
                </div>
         </div>
         <div className="compprodcontainer">
                <img src="https://m.media-amazon.com/images/I/41w3cl1RflL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
                <div className="content">
                       <Link to="/1"> <h3 id="discription">pTron Newly Launched Reflect Pro Smartwatch, Bluetooth Calling, 1.85" Full Touch Display, 600 NITS, Digital Crown, Metal Frame, 100+ Watch Faces, HR, SpO2, Voice Assist, 5 Days Battery Life (Gold)</h3></Link>
                        <p>100+ brought in past month</p>
                        <h4>Deal of the Day</h4>
                        <p className="price">Rs <strong>1,490</strong>  <sub>MRP <s>3,990</s> </sub></p>
                        <p> <sub>Save extra with no cost EMI</sub></p>
                </div>
         </div>
         <div className="compprodcontainer">
                <img src="https://m.media-amazon.com/images/I/41l2MwqYKcL._SX300_SY300_QL70_FMwebp_.jpg"/>
                <div className="content">
                       <Link to="/1"> <h3 id="discription">https://m.media-amazon.com/images/I/41l2MwqYKcL._SX300_SY300_QL70_FMwebp_.jpg</h3></Link>
                        <p>100+ brought in past month</p>
                        <h4>Deal of the Day</h4>
                        <p className="price">Rs <strong>1,990</strong>  <sub>MRP <s>3,990</s> </sub></p>
                        <p> <sub>Save extra with no cost EMI</sub></p>
                </div>
         </div>
         <div className="compprodcontainer">
                <img src="https://m.media-amazon.com/images/I/51+j2joMRcL._SY300_SX300_.jpg" alt=""/>
                <div className="content">
                       <Link to="/1"> <h3 id="discription">pTron Newly Launched Reflect Callz Smartwatch, Bluetooth Calling, 1.85" Full Touch Display, 600 NITS, Functional Crown, Metal Mesh Strap, 100+ Watch Faces, HR, Sports Mode, 5 Days Battery Life (Gold)</h3></Link>
                        <p>13 brought in past month</p>
                        <h4>Deal of the Day</h4>
                        <p className="price">Rs <strong>999</strong>  <sub>MRP <s>3,999</s> </sub></p>
                        <p> <sub>Save extra with no cost EMI</sub></p>
                </div>
         </div>
         <Footer/>
    </div>
  )
}

export default Ptron
