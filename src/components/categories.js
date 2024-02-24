import React from 'react';
import '../cssfiles/categories.css'
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <div className="categories">
      <div className="categary">
        <h1>HeadPhones</h1>
        <div className="brands">
          <div className="brand-display">
            <Link to="/boat">
              <img src="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/G/31/img22/Wearables/Shop/by/brand/Revised/Creatives/SBB_420X420_2" alt="" />
            </Link>
            <span>Boat</span>
          </div>
          <div className="brand-display">
            <Link to="/firebolt">
              <img src="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/G/31/img22/Wearables/Shop/by/brand/Revised/Creatives/SBB_420X420_1" alt="" />
            </Link>
            <span>Boult</span>
          </div>
          <div className="brand-display">
            <Link to="/noise">
              <img src="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/G/31/img22/Wearables/Shop/by/brand/Revised/Creatives/SBB_420X420_3" alt="" />
            </Link>
            <span>Noise</span>
          </div>
          <div className="brand-display">
            <Link to="/zebronics">
              <img src="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/G/31/img22/Wearables/Shop/by/brand/Revised/Creatives/SBB_420X420_9" alt="" />
            </Link>
            <span>Zebronics</span>
          </div>
        </div>
      </div>

      <div className="categary">
        <h1>Mobile Phones</h1>
        <div className="brands">
          <div className="brand-display">
            <Link to="/iphone">
              <img src="https://m.media-amazon.com/images/G/31/img22/Tablets/revamp/Apple" alt="" />
            </Link>
            <span>IPhone</span>
          </div>
          <div className="brand-display">
            <Link to="/samsung">
              <img src="https://m.media-amazon.com/images/G/31/img22/Tablets/revamp/samsung" alt="" />
            </Link>
            <span>Samsung</span>
          </div>
          <div className="brand-display">
            <Link to="/realme">
              <img src="https://m.media-amazon.com/images/G/31/img22/Tablets/revamp/realme" alt="" />
            </Link>
            <span>Realme</span>
          </div>
          <div className="brand-display">
            <Link to="/oneplus">
              <img src="https://m.media-amazon.com/images/G/31/img22/Tablets/revamp/oneplus" alt="" />
            </Link>
            <span>Oneplus</span>
          </div>
        </div>
      </div>

      <div className="categary">
        <h1>Laptops</h1>
        <div className="brands">
          <div className="brand-display">
            <Link to="/dell">
              <img src="https://m.media-amazon.com/images/G/31/img15/zak/lap/brands/Laptop-days-halos_dell" alt="" />
            </Link>
            <span>Dell</span>
          </div>
          <div className="brand-display">
            <Link to="/apple">
              <img src="https://m.media-amazon.com/images/G/31/img15/zak/lap/brands/Laptop-days-halos_Apple" alt="" />
            </Link>
            <span>Mac</span>
          </div>
          <div className="brand-display">
            <Link to="/asus">
              <img src="https://m.media-amazon.com/images/G/31/img15/zak/lap/brands/Laptop-days-halos_asus" alt="" />
            </Link>
            <span>ASUS</span>
          </div>
          <div className="brand-display">
            <Link to="/hp">
              <img src="https://m.media-amazon.com/images/G/31/img15/zak/lap/brands/Laptop-days-halos_hp" alt="" />
            </Link>
            <span>HP</span>
          </div>
        </div>
      </div>

      <div className="categary">
        <h1>Smart watches</h1>
        <div className="brands">
          <div className="brand-display">
            <Link to="/fastrack">
              <img src="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/G/31/img22/Wearables/Shop/by/brand/revised/creatives/SBB/Fastrack_1" alt="" />
            </Link>
            <span>Fastrack</span>
          </div>
          <div className="brand-display">
            <Link to="/ptron">
              <img src="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/G/31/img22/Wearables/Shop/by/brand/Revised/Creatives/SBB_420X420_7" alt="" />
            </Link>
            <span>Ptron</span>
          </div>
          <div className="brand-display">
            <Link to="/pebble">
              <img src="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/G/31/img22/Wearables/Shop/by/brand/Revised/Creatives/SBB_420X420_12" alt="" />
            </Link>
            <span>Pebble</span>
          </div>
          <div className="brand-display">
            <Link to="/amazfit">
              <img src="https://m.media-amazon.com/images/G/31/img21/Amazfit_active_24/400X400_Amazfit._CB582339095_.jpg" alt="" />
            </Link>
            <span>Amazefit</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
