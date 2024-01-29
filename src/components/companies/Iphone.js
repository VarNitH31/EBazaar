import React from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer'
import "../../cssfiles/company.css"
import { Link } from 'react-router-dom';

function Iphone() {
  return (
    <div>
        <NavBar/>
        <div className="compprodcontainer">
                <img src="https://m.media-amazon.com/images/I/31wacBawB3L._SY445_SX342_QL70_FMwebp_.jpg" alt=""/>
                <div className="content">
                       <Link to="/iphone14.html"> <h3 id="discription">Apple iPhone 14 (128 GB) - Midnight</h3></Link>
                        <p>100+ brought in past month</p>
                        <h4>Deal of the Day</h4>
                        <p className="price">Rs <strong>58,990</strong>  <sub>MRP <s>80,990</s> </sub></p>
                        <p> <sub>Save extra with no cost EMI</sub></p>
                </div>
         </div>
         <div className="compprodcontainer">
                <img src="https://m.media-amazon.com/images/I/31Q14qzdoZL._SY445_SX342_QL70_FMwebp_.jpg" alt=""/>
                <div className="content">
                       <Link to="/i15.html"> <h3 id="discription">Apple iPhone 15 (128 GB) - Blue</h3></Link>
                        <p>100+ brought in past month</p>
                        <h4>Deal of the Day</h4>
                        <p className="price">Rs <strong>72,990</strong>  <sub>MRP <s>80,990</s> </sub></p>
                        <p> <sub>Save extra with no cost EMI</sub></p>
                </div>
         </div>
         <div className="compprodcontainer">
                <img src="https://m.media-amazon.com/images/I/412CKVTe8dL._SY445_SX342_QL70_FMwebp_.jpg"/>
                <div className="content">
                       <Link to="/i15pro.html"> <h3 id="discription">Apple iPhone 15 Pro (256 GB) - Natural Titanium</h3></Link>
                        <p>100+ brought in past month</p>
                        <h4>Deal of the Day</h4>
                        <p className="price">Rs <strong>1,40,990</strong>  <sub>MRP <s>1,72,990</s> </sub></p>
                        <p> <sub>Save extra with no cost EMI</sub></p>
                </div>
         </div>
         <div className="compprodcontainer">
                <img src="https://m.media-amazon.com/images/I/71ZDY57yTQL._SX679_.jpg" alt=""/>
                <div className="content">
                       <Link to="/i14pro.html"> <h3 id="discription">Apple iPhone 14 Pro (256 GB) - Gold</h3></Link>
                        <p>13 brought in past month</p>
                        <h4>Deal of the Day</h4>
                        <p className="price">Rs <strong>1,39,999</strong>  <sub>MRP <s>1,59,999</s> </sub></p>
                        <p> <sub>Save extra with no cost EMI</sub></p>
                </div>
         </div>
         <Footer/>
    </div>
  )
}

export default Iphone
