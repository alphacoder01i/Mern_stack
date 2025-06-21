import React from "react";
import p8 from './p8.png'

function page8(){
    return(
        <div class="footer">
            <div className="footer-container">

            <div className="footer-logo">
            <img src={p8}/>   
            </div>

            <div className="ty">
            <div className="footer-l">
        <p className="footer-title">Keep up to date with new collection and festive sales</p>
        <form className="footer-form">
          <input type="email" placeholder="Enter your email" className="footer-input" />
          <button type="submit" className="footer-button">Subscribe</button>
        </form>
        <p className="footer-privacy">
          We respect your privacy, we’ll not spam you! Read our <a href="/privacy-policy" className="privacy-link">privacy policy</a> here.
        </p></div>
        <div className="footer-links">
          <div className="footer-column">
            <h4>COMPANY</h4>
            <ul>
              <li><a href="/about-us">About us</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/contact-us">Contact us</a></li>
              <li><a href="/find-showroom">Find a showroom</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>PRODUCT</h4>
            <ul>
            <li><a href="/categories">Categories</a></li>
              <li><a href="/new-arrivals">New Arrivals</a></li>
              <li><a href="/best-sellers">Best sellers</a></li>
              <li><a href="/collections">Collections</a></li>
            </ul>

          </div>
          
        </div>
        </div>

        <div className="footer-bottom">

          <a href="/terms" className="footer-bottom-link">TERMS & CONDITIONS</a>
          <a href="/privacy-policy" className="footer-bottom-link">PRIVACY POLICY</a>
        </div>
        </div>
        </div>
    );
}
export default page8;