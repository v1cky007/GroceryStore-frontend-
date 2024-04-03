// ContactUs.jsx

import React from 'react';
import './contact.css'; // Import your CSS file for styling
import Footer from './Footer';
import Navbar from './navbar';

const ContactUs = () => {
  return (
    <div>
    <Navbar/>
    <div className="contact-us-container">
    <h1>Contact Us</h1>
    
    <div className="contact-form">
    <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          
          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" name="subject" required />
          
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>
          
          <button type="submit">Submit</button>
          </form>
          </div>
          
          <div className="contact-info">
          <h2>Contact Information</h2>
          
          <p>
          <strong>Address:</strong> Your Company Address
          </p>
          <p>
          <strong>Phone:</strong> Your Phone Number
          </p>
          <p>
          <strong>Email:</strong> Your Email Address
          </p>
          
          <div className="social-links">
          <h3>Connect with Us</h3>
          </div>
          </div>
          </div>
          
          <Footer/>
          </div>
          );
        };

export default ContactUs;
