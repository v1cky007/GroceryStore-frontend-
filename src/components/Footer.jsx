
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Import your external CSS file

const Footer = () => {
  return (
    <div className='BOTTOM'>
    <footer className="FOOTER">
     <div class="waves">
      <div class="wave" id="wave1"></div>
      <div class="wave" id="wave2"></div>
      <div class="wave" id="wave3"></div>
      <div class="wave" id="wave4"></div>
    </div>
      <div className="footer-content">
        <ul className="social-icon">
        <i className="pi pi-check"></i>
        <i className="pi pi-times"></i>
        </ul>
        <ul className="menu">
          <li className="menu__item"><Link className="menu__link" to="/">Home</Link></li>
          <li className="menu__item"><Link className="menu__link" to="/privacy-policy">Privacy Policy</Link></li>
          <li className="menu__item"><Link className="menu__link" to="/faq">FAQ</Link></li>
          <li className="menu__item"><Link className="menu__link" to="/terms-and-conditions">Terms and Conditions</Link></li>
          <li className="menu__item"><Link className="menu__link" to="/Contact-Us">Contact Us</Link></li>
        </ul>
        <p className='Para'>&copy;2021 Nadine Coelho | All Rights Reserved</p>
      </div>
    </footer>
    </div>
  );
};

export default Footer;

