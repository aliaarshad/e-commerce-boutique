import './Footer.css';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaPinterest } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
    <div className='footer-container'>
      {/* Column 1 - Logo and Payment Logos */}
      <div className="footer-column">
        <img src="src/assets/img/logo.png" alt="Boutique Logo" className="footer-logo" />
        <p className="footer-description">
          Discover unique fashion, crafted with care to bring out the elegance in every individual.
        </p>
        <div className="payment-logos">
          <img src="src/assets/img/payment/payment-1.png" alt="Payment Logo" />
          <img src="src/assets/img/payment/payment-2.png" alt="Payment Logo" />
          <img src="src/assets/img/payment/payment-3.png" alt="Payment Logo" />
          <img src="src/assets/img/payment/payment-4.png" alt="Payment Logo" />
          <img src="src/assets/img/payment/payment-5.png" alt="Payment Logo" />
        </div>
      </div>

      {/* Column 2 - Quick Links */}
      <div className="footer-column">
        <h3 className="footer-heading">Quick Links</h3>
        <ul className="footer-links">
          <li><a href="/about">About</a></li>
          <li><a href="/blogs">Blogs</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/faq">Faq</a></li>
        </ul>
      </div>

      {/* Column 3 - Accounts */}
      <div className="footer-column">
        <h3 className="footer-heading">Accounts</h3>
        <ul className="footer-links">
          <li><a href="/account">My Account</a></li>
          <li><a href="/orders-tracking">Orders Tracking</a></li>
          <li><a href="/checkout">Checkout</a></li>
          <li><a href="/wishlist">Wishlist</a></li>
        </ul>
      </div>

      {/* Column 4 - Newsletter */}
      <div className="footer-column">
        <h3 className="footer-heading">Newsletter</h3>
        <div className="newsletter-input">
          <input type="email" placeholder="Email" className="email-input" />
          <button className="subscribe-button">Subscribe</button>
        </div>
        <div className="social-icons">
          <FaFacebookF />
          <FaTwitter />
          <FaYoutube />
          <FaInstagram />
          <FaPinterest />
        </div>
      </div>
      </div>
      {/* Copyright Text */}
      <div className="footer-copyright">
        <p>Copyright &copy; 2024 All rights reserved | This website made by Alia</p>
      </div>
      
    </footer>
  );
};

export default Footer;
