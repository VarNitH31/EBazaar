import React from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer'
import "../../cssfiles/company.css"
import { Link } from 'react-router-dom';

function Oneplus() {
  return (
    <div>
        <NavBar/>
        <div className="compprodcontainer">
                <img src="https://m.media-amazon.com/images/I/61LB+d0vheL._SX679_.jpg" alt="" />
                <div className="content">
                       <Link to="/oneplusnord3"> <h3 id="discription">OnePlus Nord CE 3 Lite 5G (Chromatic Gray, 8GB RAM, 128GB Storage)</h3></Link>
                        <p>100+ brought in past month</p>
                        <h4>Deal of the Day</h4>
                        <p className="price">&#8377 <strong>19,990</strong>  <sub>MRP <s>23,990</s> </sub></p>
                        <p> <sub>Save extra with no cost EMI</sub></p>
                </div>
         </div>
         <div className="compprodcontainer">
                <img src="https://m.media-amazon.com/images/I/613SAOPmLeL._SX679_.jpg" alt="" />
                <div className="content">
                       <Link to="/oneplus11r"> <h3 id="discription">OnePlus 11R 5G (Galactic Silver, 16GB RAM, 256GB Storage)</h3></Link>
                        <p>100+ brought in past month</p>
                        <h4>Deal of the Day</h4>
                        <p className="price">&#8377 <strong>39,990</strong>  <sub>MRP <s>44,990</s> </sub></p>
                        <p> <sub>Save extra with no cost EMI</sub></p>
                </div>
         </div>
         <div className="compprodcontainer">
                <img src="https://m.media-amazon.com/images/I/41R9oD3K25L._SX300_SY300_QL70_FMwebp_.jpg" />
                <div className="content">
                       <Link to="/oneplusnord2"> <h3 id="discription">OnePlus Nord CE 2 5G (Bahamas Blue, 8GB RAM, 128GB Storage)</h3></Link>
                        <p>100+ brought in past month</p>
                        <h4>Deal of the Day</h4>
                        <p className="price">&#8377 <strong>19,990</strong>  <sub>MRP <s>24,990</s> </sub></p>
                        <p> <sub>Save extra with no cost EMI</sub></p>
                </div>
         </div>
         <div className="compprodcontainer">
                <img src="https://m.media-amazon.com/images/I/41o3CoW58tL._SX300_SY300_QL70_FMwebp_.jpg" alt="" />
                <div className="content">
                       <Link to="/oneplus10r"> <h3 id="discription">OnePlus 10R 5G (Sierra Black, 8GB RAM, 128GB Storage, 80W SuperVOOC)</h3></Link>
                        <p>13 brought in past month</p>
                        <h4>Deal of the Day</h4>
                        <p className="price">&#8377 <strong>34,990</strong>  <sub>MRP <s>39,000</s> </sub></p>
                        <p> <sub>Save extra with no cost EMI</sub></p>
                </div>
         </div>



         <Footer/>
    </div>
  )
}

export default Oneplus
