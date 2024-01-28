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
      <h2 className="ecom">E-COMMERCE</h2>
      <div className="box">
        <div className="icon2">
          <ion-icon name="search"></ion-icon>
        </div>
        <input id="search-bar" placeholder="search" type="text" name="" />
        <ul id="search-results"></ul>
      </div>
      <nav className="navigation">
        <div>
          <a href="homepage.html">Home</a>
        </div>
        <div>
          <a href="homepage.html#productgallery">Products</a>
        </div>
        <div>
          <a href="About.html">About</a>
        </div>
        <div>
          <a href="contact.html">Contact</a>
        </div>
        <Link to="/signup" className="btnlogin-popup">
        Login
      </Link>
        <div className="iconcart">
          <a href="cartpage.html">
            <ion-icon name="cart-outline"></ion-icon>
          </a>
        </div>
      </nav>
    </div>
    </div>
  );
};

export default NavBar;
