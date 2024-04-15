import React from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer'
import "../../cssfiles/company.css"
import { Link } from 'react-router-dom';

function Asus() {
  return (
    <div>
        <NavBar/>
              <div className="compprodcontainer">
                <img src="https://m.media-amazon.com/images/I/71O7BvBJc8L._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
                <div className="content">
                       <Link to="/asusvivo"> ASUS [SmartChoice] Vivobook 16X (2022), 16-inch (40.64 cms) WUXGA, AMD Ryzen 5 5600H, Thin and Light Laptop (8GB/512GB SSD/Integrated Graphics/Win 11/Office 2021/Quiet Blue/1.8 kg), M1603QA-MB502WS</Link>
                        <p>1000+ brought in past month</p>
                        <h4>Deal of the Day</h4>
                        <p className="price">RS <strong>59,999</strong>  <sub>MRP <s>70,000</s> </sub></p>
                        <p> <sub>Save extra with no cost EMI</sub></p>
                </div>
         </div>
         <div className="compprodcontainer">
                <img src="https://m.media-amazon.com/images/I/71-Fx3Vfq5L._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
                <div className="content">
                       <Link to="/asustuf"> ASUS TUF Gaming F15, 15.6"(39.62 cms) FHD 144Hz, Intel Core i7-11800H 11th Gen, 4GB NVIDIA GeForce RTX 3050 Ti, Gaming Laptop (16GB/1TB SSD/Win 11/MSO/90WHrs Battery/Black/2.30 Kg), FX506HE-HN385WS</Link>
                        <p>100+ brought in past month</p>
                        <h4>Deal of the Day</h4>
                        <p className="price">RS <strong>79,990</strong>  <sub>MRP <s>85,000</s> </sub></p>
                        <p> <sub>Save extra with no cost EMI</sub></p>
                </div>
         </div>
         <div className="compprodcontainer">
                <img src="https://m.media-amazon.com/images/I/71m7XVxRD-L._AC_UY327_FMwebp_QL65_.jpg"/>
                <div className="content">
                       <Link to="/asusrog"> ASUS Rog Strix G15, AMD Ryzen 7 6800H, (Include - Rog Impact Mouse & Mat), 15.6"(39.62 Cm) Fhd 144Hz, 4Gb RTX 3050 Gpu, Gaming Laptop (16Gb/1Tb Ssd/Win11/Office 21/2.1 Kg),G513Rc-Hn085Ws</Link>
                        <p>1000+ brought in past month</p>
                        <h4>Deal of the Day</h4>
                        <p className="price">RS <strong>96,990</strong>  <sub>MRP <s>1,06,000</s> </sub></p>
                        <p> <sub>Save extra with no cost EMI</sub></p>
                </div>
         </div>
         <div className="compprodcontainer">
                <img src="https://m.media-amazon.com/images/I/51vQ0l8b1oL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
                <div className="content">
                       <Link to="/asuszephurs"> ASUS ROG Zephyrus G14 Ultra Slim Gaming Laptop, 14" QHD Display(2560x1440) ,AMD Ryzen 9 5900HS ,NVIDIA GeForce RTX 3060,16GB RAM | 1TB PCIe SSD, Windows 10</Link>
                        <p>13 brought in past month</p>
                        <h4>Deal of the Day</h4>
                        <p className="price">RS <strong>2,25,999</strong>  <sub>MRP <s>3,15,000</s> </sub></p>
                        <p> <sub>Save extra with no cost EMI</sub></p>
                </div>
         </div>

         <Footer/>
    </div>
  )
}

export default Asus
