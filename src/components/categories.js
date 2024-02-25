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
              <img src="https://m.media-amazon.com/images/G/31/img15/on/ear/9thfeb/1_Logos_300x300._CB613858792_.jpg" alt="" />
            </Link>
            <span>Boat</span>
          </div>
          <div className="brand-display">
            <Link to="/firebolt">
              <img src="https://m.media-amazon.com/images/G/31/img15/on/ear/9thfeb/4_Logos_300x300._CB613858792_.jpg" alt="" />
            </Link>
            <span>Boult</span>
          </div>
          <div className="brand-display">
            <Link to="/noise">
              <img src="https://m.media-amazon.com/images/G/31/img15/on/ear/9thfeb/10_Logos_300x300._CB613858792_.jpg" alt="" />
            </Link>
            <span>Noise</span>
          </div>
          <div className="brand-display">
            <Link to="/zebronics">
              <img src="https://m.media-amazon.com/images/G/31/img15/on/ear/9thfeb/11_Logos_300x300._CB613858792_.jpg" alt="" />
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
              <img src="https://m.media-amazon.com/images/S/stores-image-uploads-eu-prod/f/AmazonStores/A21TJRUUN4KGV/79c47a3000c83a7295f4453bfda74ea1.w480.h480._CR0%2C0%2C480%2C480_SX200_.png" alt="" />
            </Link>
            <span>Fastrack</span>
          </div>
          <div className="brand-display">
            <Link to="/ptron">
              <img src="https://m.media-amazon.com/images/S/stores-image-uploads-eu-prod/b/AmazonStores/A21TJRUUN4KGV/45d666d8cb1e56a2f308ffdade939b94.w1080.h1080._CR0%2C0%2C1080%2C1080_SX200_.jpg" alt="" />
            </Link>
            <span>Ptron</span>
          </div>
          <div className="brand-display">
            <Link to="/pebble">
              <img src="https://m.media-amazon.com/images/S/stores-image-uploads-eu-prod/9/AmazonStores/A21TJRUUN4KGV/200beb8cbb7404b8a44c16d384ec2a36.w400.h400._CR0%2C0%2C400%2C400_SX200_.jpg" alt="" />
            </Link>
            <span>Pebble</span>
          </div>
          <div className="brand-display">
            <Link to="/amazfit">
              <img src="https://m.media-amazon.com/images/S/stores-image-uploads-eu-prod/4/AmazonStores/A21TJRUUN4KGV/8adf21c5c9b3581bc1feb44a6abcd89b.w400.h400._CR0%2C0%2C400%2C400_SX200_.jpg" alt="" />
            </Link>
            <span>Amazefit</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
