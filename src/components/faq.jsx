// FAQ.jsx

import React from 'react';
import './faq.css';
import Navbar from './navbar';
import Footer from './Footer';

const FAQ = () => {
  return (
    <div>
    <div>
    <Navbar/>
    <div className='FAQ'>
    <h1 className='FAQHeading'>Frequently Asked Questions</h1>
    
    <div className='Question'>
    <h2>Q: How do I place an order?</h2>
    <p>
    A: Placing an order is easy! Simply browse our online store, select the items you want, and click on the "Add to Cart" button. Once you've finished shopping, proceed to the checkout and follow the instructions to complete your order.
    </p>
    </div>
    
    <div className='Question'>
    <h2>Q: What payment methods do you accept?</h2>
    <p>
    A: We accept various payment methods, including credit cards, debit cards, and online payment systems. You can choose your preferred payment method during the checkout process.
    </p>
    </div>
    
    <div className='Question'>
    <h2>Q: Is there a minimum order amount for delivery?</h2>
    <p>
    A: Yes, there is a minimum order amount for delivery. This amount may vary based on your location. You can view the minimum order requirement for your area during the checkout process.
    </p>
    </div>
    
    <div className='Question'>
    <h2>Q: Can I modify or cancel my order?</h2>
    <p>
    A: Once an order is placed, modifications or cancellations may be limited. Please contact our customer support as soon as possible to inquire about any changes to your order.
    </p>
    </div>
    
    <div className='Question'>
    <h2>Q: How can I track my order?</h2>
    <p>
    A: Once your order is processed and out for delivery, you will receive a tracking number and a link to track your order in real-time. You can use this information to monitor the status of your delivery.
    </p>
    </div>
    
    <div className='Question'>
    <h2>Q: What do I do if I receive damaged or incorrect items?</h2>
    <p>
    A: We apologize for any inconvenience. Please contact our customer support immediately, and we will assist you in resolving the issue. We may arrange for a replacement or issue a refund as needed.
    </p>
    </div>
    </div>
    <Footer/>

      </div>
      </div>
  );
};

export default FAQ;
