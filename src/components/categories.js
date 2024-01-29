import React from 'react';
import '../cssfiles/categories.css'

const Categories = () => {
  return (
    <div className="categories">
      <div className="categary">
        <h1>HeadPhones</h1>
        <div className="brands">
          <div className="brand-display">
            <a href="/boat">
              <img src="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/G/31/img22/Wearables/Shop/by/brand/Revised/Creatives/SBB_420X420_2" alt="" />
            </a>
            <span>Boat</span>
          </div>
          <div className="brand-display">
            <a href="/firebolt">
              <img src="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/G/31/img22/Wearables/Shop/by/brand/Revised/Creatives/SBB_420X420_1" alt="" />
            </a>
            <span>Boult</span>
          </div>
          <div className="brand-display">
            <a href="/noise">
              <img src="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/G/31/img22/Wearables/Shop/by/brand/Revised/Creatives/SBB_420X420_3" alt="" />
            </a>
            <span>Noise</span>
          </div>
          <div className="brand-display">
            <a href="/zebronics">
              <img src="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/G/31/img22/Wearables/Shop/by/brand/Revised/Creatives/SBB_420X420_9" alt="" />
            </a>
            <span>Zebronics</span>
          </div>
        </div>
      </div>

      <div className="categary">
        <h1>Mobile Phones</h1>
        <div className="brands">
          <div className="brand-display">
            <a href="/iphone">
              <img src="https://m.media-amazon.com/images/G/31/img22/Tablets/revamp/Apple" alt="" />
            </a>
            <span>IPhone</span>
          </div>
          <div className="brand-display">
            <a href="/samsung">
              <img src="https://m.media-amazon.com/images/G/31/img22/Tablets/revamp/samsung" alt="" />
            </a>
            <span>Samsung</span>
          </div>
          <div className="brand-display">
            <a href="/realme">
              <img src="https://m.media-amazon.com/images/G/31/img22/Tablets/revamp/realme" alt="" />
            </a>
            <span>Realme</span>
          </div>
          <div className="brand-display">
            <a href="/oneplus">
              <img src="https://m.media-amazon.com/images/G/31/img22/Tablets/revamp/oneplus" alt="" />
            </a>
            <span>Oneplus</span>
          </div>
        </div>
      </div>

      <div className="categary">
        <h1>Laptops</h1>
        <div className="brands">
          <div className="brand-display">
            <a href="/dell">
              <img src="https://m.media-amazon.com/images/G/31/img15/zak/lap/brands/Laptop-days-halos_dell" alt="" />
            </a>
            <span>Dell</span>
          </div>
          <div className="brand-display">
            <a href="/apple">
              <img src="https://m.media-amazon.com/images/G/31/img15/zak/lap/brands/Laptop-days-halos_Apple" alt="" />
            </a>
            <span>Mac</span>
          </div>
          <div className="brand-display">
            <a href="/asus">
              <img src="https://m.media-amazon.com/images/G/31/img15/zak/lap/brands/Laptop-days-halos_asus" alt="" />
            </a>
            <span>ASUS</span>
          </div>
          <div className="brand-display">
            <a href="/hp">
              <img src="https://m.media-amazon.com/images/G/31/img15/zak/lap/brands/Laptop-days-halos_hp" alt="" />
            </a>
            <span>HP</span>
          </div>
        </div>
      </div>

      <div className="categary">
        <h1>Smart watches</h1>
        <div className="brands">
          <div className="brand-display">
            <a href="/fastrack">
              <img src="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/G/31/img22/Wearables/Shop/by/brand/revised/creatives/SBB/Fastrack_1" alt="" />
            </a>
            <span>Fastrack</span>
          </div>
          <div className="brand-display">
            <a href="/ptron">
              <img src="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/G/31/img22/Wearables/Shop/by/brand/Revised/Creatives/SBB_420X420_7" alt="" />
            </a>
            <span>Ptron</span>
          </div>
          <div className="brand-display">
            <a href="/pebble">
              <img src="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/G/31/img22/Wearables/Shop/by/brand/Revised/Creatives/SBB_420X420_12" alt="" />
            </a>
            <span>Pebble</span>
          </div>
          <div className="brand-display">
            <a href="/amazfit">
              <img src="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/G/31/img22/Wearables/Shop/by/brand/Revised/Creatives/SBB_420X420_6" alt="" />
            </a>
            <span>Amazefit</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
