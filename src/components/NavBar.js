import React from 'react';
import styles from '../cssfiles/navbar.css'
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <div className={styles.container}>
    <div className="nav">
      <div className="logo">
        <span className="icon">
          <ion-icon name="logo-venmo"></ion-icon>
        </span>
      </div>
      <h2 className="ecom">VBazaar</h2>
      <div className="box">
        <div className="icon2">
          <ion-icon name="search"></ion-icon>
        </div>
        <input id="search-bar" placeholder="search" type="text" name="" />
        <ul id="search-results"></ul>
      </div>
      <nav className="navigation">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <a href="/#productgallery">Products</a>
        </div>
        <div>
          <Link to="/about">About</Link>
        </div>
        <div>
          <Link to="/contact">Contact</Link>
        </div>
        <Link to="/signup" className="btnlogin-popup">
        Login
      </Link>
        <div className="iconcart">
          <Link to="/cart">
            <ion-icon name="cart-outline"></ion-icon>
          </Link>
        </div>
      </nav>
    </div>
    </div>
  );
};

export default NavBar;
