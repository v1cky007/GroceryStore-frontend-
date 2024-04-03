// TermsAndConditions.jsx

import React from 'react';
import './terms.css'
import Navbar from './navbar';
import Footer from './Footer';
const TermsAndConditions = () => {
  return (
    <div>
    <Navbar/>
    <div className='Terms'>
    <h1 className='TermsHeading'>Terms and Conditions</h1>
    
    <p className='Pterms'>Welcome to [Your Online Grocery Store]. Before using our services, please carefully read the following terms and conditions. By accessing or using our website and services, you agree to be bound by these terms. If you do not agree to these terms, please refrain from using our platform.</p>
    
    <h2 className='CHeading'>1. Acceptance of Terms:</h2>
    <p className='Pterms'>By using [Your Online Grocery Store], you acknowledge that you have read, understood, and agree to comply with these terms and conditions.</p>
    
    <h2 className='CHeading'>2. User Eligibility:</h2>
    <p className='Pterms'>You must be at least 18 years old to use our services. By using our platform, you confirm that you are of legal age to form a binding contract.</p>
    
    <h2 className='CHeading'>3. Account Registration:</h2>
    <p className='Pterms'>You may be required to create an account to access certain features of our website. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.</p>
    
    <h2 className='CHeading'>4. Ordering and Delivery:</h2>
    <p className='Pterms'>a. By placing an order, you agree to provide accurate and complete information, including delivery details.</p>
    <p className='Pterms'>b. [Your Online Grocery Store] reserves the right to refuse or cancel orders at any time for any reason, including but not limited to product availability, inaccuracies, or errors in product or pricing information.</p>
    
    <h2 className='CHeading'>5. Pricing and Payment:</h2>
    <p className='Pterms'>a. All prices are listed in the local currency and are inclusive of applicable taxes.</p>
    <p className='Pterms'>b. [Your Online Grocery Store] reserves the right to change prices, fees, and payment methods at any time.</p>
    <p className='Pterms'>c. Payment must be made in full before the order is processed and delivered.</p>
    
    <h2 className='CHeading'>6. Product Availability:</h2>
    <p className='Pterms'>a. Product availability is subject to change without notice.</p>
    <p className='Pterms'>b. [Your Online Grocery Store] does not guarantee the availability of any product listed on the website.</p>
    
    <h2 className='CHeading'>7. Cancellation and Refund Policy:</h2>
    <p className='Pterms'>a. Orders can be canceled within a specified time frame. Check our cancellation policy for details.</p>
    <p className='Pterms'>b. Refunds will be processed according to our refund policy. [Provide details on the refund process.]</p>
    
    <h2 className='CHeading'>8. Privacy Policy:</h2>
    <p className='Pterms'>a. We respect your privacy. Our Privacy Policy outlines how we collect, use, and protect your personal information.</p>
    
    <h2 className='CHeading'>9. Intellectual Property:</h2>
    <p className='Pterms'>a. All content on [Your Online Grocery Store] is the intellectual property of the company and is protected by copyright, trademark, and other laws.</p>
    
    <h2 className='CHeading'>10. Limitation of Liability:</h2>
    <p className='Pterms'>[Your Online Grocery Store] is not liable for any direct, indirect, incidental, special, or consequential damages that result from the use or inability to use our services.</p>
    
    <h2 className='CHeading'>11. Governing Law:</h2>
    <p className='Pterms'>These terms and conditions are governed by and construed in accordance with the laws of [Your Jurisdiction].</p>
    
    <h2 className='CHeading'>12. Changes to Terms and Conditions:</h2>
    <p className='Pterms'>[Your Online Grocery Store] reserves the right to modify or update these terms and conditions at any time. It is your responsibility to review them periodically.</p>
    
    <p className='Pterms'>By using [Your Online Grocery Store], you agree to abide by these terms and conditions. If you have any questions or concerns, please contact us at [contact@email.com].</p>
    
    <p className='Pterms'>Last Updated: [Date]</p>
    </div>
    <Footer/>
    </div>
    );
};


export default TermsAndConditions;