import React from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer'
import "../../cssfiles/company.css"
import { Link } from 'react-router-dom';

function Fire() {
  return (
    <div>
        <NavBar/>
        <div className="compprodcontainer">
                <img src="https://m.media-amazon.com/images/I/51NB4TvxmpL._SY450_.jpg" alt=""/>
                <div className="content">
                       <Link to="/firerigel"> <h3 id="discription">Fireboltt Fire Pods Rigel with appealing RGB lights, Bluetooth 5.3, mammoth 13mm drivers, Dual mic ENC, 30dB ANC and Gaming Mode (Green)</h3></Link>
                        <p>100+ brought in past month</p>
                        <h4>Deal of the Day</h4>
                        <p className="price">Rs <strong>1,500</strong>  <sub>MRP <s>2,990</s> </sub></p>
                        <p> <sub>Save extra with no cost EMI</sub></p>
                </div>
         </div>
         <div className="compprodcontainer">
                <img src="https://m.media-amazon.com/images/I/31ki8EHpjzL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
                <div className="content">
                       <Link to="/firevega"> <h3 id="discription">Fireboltt Fire Pods Vega 811 TWS earbuds with captivating RGB lights, Bluetooth 5.3, Gaming Mode, Quad Mic ENC, and voice assistance (Grey Blue)</h3></Link>
                        <p>100+ brought in past month</p>
                        <h4>Deal of the Day</h4>
                        <p className="price">Rs <strong>2,400</strong>  <sub>MRP <s>3,990</s> </sub></p>
                        <p> <sub>Save extra with no cost EMI</sub></p>
                </div>
         </div>
         <div className="compprodcontainer">
                <img src="https://m.media-amazon.com/images/I/413czXhufFL._SX300_SY300_QL70_FMwebp_.jpg"/>
                <div className="content">
                       <Link to="/1"> <h3 id="discription">Boult Audio Z40 Pro with 100H Playtime, Quad Mic ENC, 45ms Low Latency Gaming, Premium Rubber Grip Case, 10mm Bass Drivers, Made in India TWS Bluetooth 5.3 Truly Wireless in Ear Earbuds (Dawn)</h3></Link>
                        <p>100+ brought in past month</p>
                        <h4>Deal of the Day</h4>
                        <p className="price">Rs <strong>1,990</strong>  <sub>MRP <s>3,990</s> </sub></p>
                        <p> <sub>Save extra with no cost EMI</sub></p>
                </div>
         </div>
         <div className="compprodcontainer">
                <img src="https://m.media-amazon.com/images/I/71NCWaRjkPL._SY450_.jpg" alt=""/>
                <div className="content">
                       <Link to="/1"> <h3 id="discription">Boult Audio Z25 with 32H Playtime, 45ms Low Latency, Type-C Fast Charging (10=150Mins), 13mm Rich Bass Drivers, Zen ENC Mic, TWS Bluetooth 5.3 True Wireless Airbass in Ear Earbuds (Blue Moss)</h3></Link>
                        <p>13 brought in past month</p>
                        <h4>Deal of the Day</h4>
                        <p className="price">Rs <strong>990</strong>  <sub>MRP <s>2,990</s> </sub></p>
                        <p> <sub>Save extra with no cost EMI</sub></p>
                </div>
         </div>


         <Footer/>
    </div>
  )
}

export default Fire
