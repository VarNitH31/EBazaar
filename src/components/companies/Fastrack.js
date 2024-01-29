import React from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer'
import "../../cssfiles/company.css"
import { Link } from 'react-router-dom';

function Fastrack() {
  return (
    <div>
        <NavBar/>
        <div className="compprodcontainer">
                <img src="https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwe3d103d7/images/Fastrack/Catalog/38077AP01_1.jpg?sw=800&sh=800" alt=""/>
                <div className="content">
                       <Link to="/1"> <h3 id="discription">Fastrack Reflex Play+ Black: Intuitive Health & BT Calling Smartwatch
                        Unisex Watch</h3></Link>
                        <p>100+ brought in past month</p>
                        <h4>Deal of the Day</h4>
                        <p className="price">Rs <strong>4,990</strong>  <sub>MRP <s>10,990</s> </sub></p>
                        <p> <sub>Save extra with no cost EMI</sub></p>
                </div>
         </div>
         <div className="compprodcontainer">
                <img src="https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwe200054d/images/Fastrack/Catalog/38094PP01_2.jpg?sw=800&sh=800" alt=""/>
                <div className="content">
                       <Link to="/fastinvoke"> <h3 id="discription">Fastrack Invoke Pro Smartwatch Black - Enhanced Calling, Split-Screen Navigation, Water-Resistant
                        Unisex Watch</h3></Link>
                        <p>100+ brought in past month</p>
                        <h4>Deal of the Day</h4>
                        <p className="price">Rs <strong>3,990</strong>  <sub>MRP <s>8,990</s> </sub></p>
                        <p> <sub>Save extra with no cost EMI</sub></p>
                </div>
         </div>
         <div className="compprodcontainer">
                <img src="https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwf6eaa8d8/images/Fastrack/Catalog/38095PP13_1.jpg?sw=800&sh=800"/>
                <div className="content">
                       <Link to="/1"> <h3 id="discription">Fastrack Reflex Horizon Grey: UltraVU Curve Display & Alexa-Enabled Smartwatch
                        Unisex Watch</h3></Link>
                        <p>100+ brought in past month</p>
                        <h4>Deal of the Day</h4>
                        <p className="price">Rs <strong>2,990</strong>  <sub>MRP <s>5,990</s> </sub></p>
                        <p> <sub>Save extra with no cost EMI</sub></p>
                </div>
         </div>
         <div className="compprodcontainer">
                <img src="https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw055b5715/images/Fastrack/Catalog/38110PP01_1.jpg?sw=800&sh=800" alt=""/>
                <div className="content">
                       <Link to="/1"> <h3 id="discription">Fastrack Vivid Pro Smart dial Silicone Strap Watch for Unisex watch</h3></Link>
                       
                        <p>13 brought in past month</p>
                        <h4>Deal of the Day</h4>
                        <p className="price">Rs <strong>3,999</strong>  <sub>MRP <s>7,990</s> </sub></p>
                        <p> <sub>Save extra with no cost EMI</sub></p>
                </div>
         </div>
         <Footer/>
    </div>
  )
}

export default Fastrack
