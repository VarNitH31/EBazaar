import React from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer'
import "../../cssfiles/company.css"
import { Link } from 'react-router-dom';

function Samsung() {
  return (
    <div>
        <NavBar/>
        <div className="compprodcontainer">
                <img src="https://m.media-amazon.com/images/I/714QNdK8BWL._SX679_.jpg" alt=""/>
                <div className="content">
                       <Link to="/samsungz"> <h3 id="discription">Samsung Galaxy Z Fold4 5G (Beige, 12GB RAM, 256GB Storage) with No Cost EMI/Additional Exchange Offers</h3></Link>
                        <p>1000+ brought in past month</p>
                        <h4>Deal of the Day</h4>
                        <p className="price">Rs <strong>1,22,999</strong>  <sub>MRP <s>1,70,000</s> </sub></p>
                        <p> <sub>Save extra with no cost EMI</sub></p>
                </div>
         </div>
         <div className="compprodcontainer">
                <img src="https://m.media-amazon.com/images/I/41O1C449O1L._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
                <div className="content">
                       <Link to="/samsung21"> <h3 id="discription">Samsung Galaxy S21 FE 5G (Graphite, 8GB, 128GB Storage)</h3></Link>
                        <p>100+ brought in past month</p>
                        <h4>Deal of the Day</h4>
                        <p className="price">Rs <strong>30,990</strong>  <sub>MRP <s>49,990</s> </sub></p>
                        <p> <sub>Save extra with no cost EMI</sub></p>
                </div>
         </div>
         <div className="compprodcontainer">
                <img src="https://m.media-amazon.com/images/I/81xJ80yRRzL._SX569_.jpg"/>
                <div className="content">
                       <Link to="/1"> <h3 id="discription">Samsung Galaxy M04 Dark Blue, 4GB RAM, 128GB Storage | Upto 8GB RAM with RAM Plus | MediaTek Helio P35 Octa-core Processor | 5000 mAh Battery | 13MP Dual Camera</h3></Link>
                        <p>1000+ brought in past month</p>
                        <h4>Deal of the Day</h4>
                        <p className="price">Rs <strong>9,990</strong>  <sub>MRP <s>13,990</s> </sub></p>
                        <p> <sub>Save extra with no cost EMI</sub></p>
                </div>
         </div>
         <div className="compprodcontainer">
                <img src="https://m.media-amazon.com/images/I/41Rkxw78fIL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
                <div className="content">
                       <Link to="/1"> <h3 id="discription">Samsung Galaxy M13 (Aqua Green, 4GB, 64GB Storage) | 6000mAh Battery | Upto 8GB RAM with RAM Plus</h3></Link>
                        <p>13 brought in past month</p>
                        <h4>Deal of the Day</h4>
                        <p className="price">Rs <strong>10,999</strong>  <sub>MRP <s>15,990</s> </sub></p>
                        <p> <sub>Save extra with no cost EMI</sub></p>
                </div>
         </div>
         <Footer/>
    </div>
  )
}

export default Samsung
