import React from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer'
import "../../cssfiles/company.css"
import { Link } from 'react-router-dom';

function Boat() {
  return (
    <div>
        <NavBar/>
        <div className="compprodcontainer">
                <img src="https://m.media-amazon.com/images/I/315vj6oj-FL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
                <div className="content">
                       <Link to="/boatrockerz450"> <h3 id="discription">boAt Rockerz 450 Bluetooth On Ear Headphones with Mic, Upto 15 Hours Playback, 40MM Drivers, Padded Ear Cushions, Integrated Controls and Dual Modes(Luscious Black)</h3></Link>
                        <p>100+ brought in past month</p>
                        <h4>Deal of the Day</h4>
                        <p className="price">Rs <strong>1,599</strong>  <sub>MRP <s>3,990</s> </sub></p>
                        <p> <sub>Save extra with no cost EMI</sub></p>
                </div>
         </div>
         <div className="compprodcontainer">
                <img src="https://m.media-amazon.com/images/I/61WFLydWqpL._SX522_.jpg" alt=""/>
                <div className="content">
                       <Link to="/1"> <h3 id="discription">boAt Rockerz 551ANC Hybrid Active Noise Cancellation Over EarHeadphones with Up to 100H Playtime, ASAP Charge, Ambient Sound Mode &Dual EQ Modes, ENx Technology(Sage Green)</h3></Link>
                        <p>100+ brought in past month</p>
                        <h4>Deal of the Day</h4>
                        <p className="price">Rs <strong>2,490</strong>  <sub>MRP <s>7,990</s> </sub></p>
                        <p> <sub>Save extra with no cost EMI</sub></p>
                </div>
         </div>
         <div className="compprodcontainer">
                <img src="https://m.media-amazon.com/images/I/41ONvDoY5AL._SX300_SY300_QL70_FMwebp_.jpg"/>
                <div className="content">
                       <Link to="/1"> <h3 id="discription">boAt Rockerz 450R On-Ear Headphones with 15 Hours Battery, 40mm Drivers, Padded Ear Cushions, Easy Access Controls and Voice Assistant(Hazel Beige)</h3></Link>
                        <p>100+ brought in past month</p>
                        <h4>Deal of the Day</h4>
                        <p className="price">Rs <strong>1,990</strong>  <sub>MRP <s>3,990</s> </sub></p>
                        <p> <sub>Save extra with no cost EMI</sub></p>
                </div>
         </div>
         <div className="compprodcontainer">
                <img src="https://m.media-amazon.com/images/I/61BqR4dPqlL._SX679_.jpg" alt=""/>
                <div className="content">
                       <Link to="/1"> <h3 id="discription">boAt Airdopes 200 Plus TWS In ear Earbuds w/ 100 Hours Playback, Quad Mics ENx Technology, 13mm Drivers, Beast Mode(50ms Low Latency), ASAP Charge(5 Mins=60 Mins), IWP Tech w/BT v5.3 & IPX5(Bold Blue)</h3></Link>
                        <p>13 brought in past month</p>
                        <h4>Deal of the Day</h4>
                        <p className="price">Rs <strong>1,990</strong>  <sub>MRP <s>4,990</s> </sub></p>
                        <p> <sub>Save extra with no cost EMI</sub></p>
                </div>
         </div>


         <Footer/>
    </div>
  )
}

export default Boat
