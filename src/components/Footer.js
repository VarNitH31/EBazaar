import React from 'react';
import '../cssfiles/footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footercontainer">
        <div className="footerrow">
          <div className="footer-col-1">
            <span className="icon1">
              <ion-icon name="logo-venmo"></ion-icon>
            </span>
            <h3>Download Our App</h3>
            <p>Download App for Android and IOS mobile phone.</p>
          </div>
          <div className="footer-col-2">
            <p>Our Purpose Is To Sustainably Make the Benefits Of Electronics Accessible To The Many.</p>
          </div>
          <div className="footer-col-3">
            <h3>Useful Links</h3>
            <ul>
              <li>Coupons</li>
              <li>Blog Post</li>
              <li>Return Policy</li>
              <li>Join Affiliate</li>
            </ul>
          </div>
          <div className="footer-col-4">
            <h3>Follow us</h3>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>Youtube</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
