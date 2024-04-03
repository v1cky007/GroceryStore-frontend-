// PrivacyPolicy.jsx

import React from 'react';
import './privacypolicy.css';
import Footer from './Footer';
import Navbar from './navbar';

const PrivacyPolicy = () => {
  return (
    <div>
    <Navbar/>
    <div className='Privacy'>
    <h1 className='PrivacyHeading'>Privacy Policy</h1>
    
    <p>
        Effective Date: [Date]
        <br />
        Thank you for choosing [Your Online Grocery Store]. We are committed to protecting your privacy and providing a secure online experience. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information. By accessing or using our services, you consent to the practices described in this Privacy Policy.
        </p>

        <h2 className='SectionHeading'>1. Information We Collect:</h2>
        
        <p className='Pprivacy'>
        <strong>a. Personal Information:</strong> We may collect personal information such as your name, contact details, billing information, and delivery address when you create an account or place an order.
        </p>
      <p className='Pprivacy'>
      <strong>b. Usage Data:</strong> We collect information about your interactions with our website, including pages visited, products viewed, and actions taken.
      </p>
      <p className='Pprivacy'>
        <strong>c. Device Information:</strong> We may collect information about the device you use to access our website, such as device type, operating system, and browser.
        </p>

        <h2 className='SectionHeading'>2. How We Use Your Information:</h2>
        
        <p className='Pprivacy'>
        <strong>a. Order Processing:</strong> We use your personal information to process and fulfill your orders, including order confirmation, delivery, and customer support.
        </p>
      <p className='Pprivacy'>
      <strong>b. Account Management:</strong> Your information is used to manage your account, track your preferences, and personalize your online experience.
      </p>
      <p className='Pprivacy'>
        <strong>c. Communication:</strong> We may use your contact information to communicate with you about your orders, promotions, and updates related to our services.
        </p>
        <p className='Pprivacy'>
        <strong>d. Analytics:</strong> We analyze user behavior and website performance to improve our services, enhance user experience, and optimize our website.
        </p>

        <h2 className='SectionHeading'>3. Information Sharing:</h2>
        
        <p className='Pprivacy'>
        <strong>a. Service Providers:</strong> We may share your information with third-party service providers who assist us in delivering our services, such as payment processors and delivery partners.
        </p>
        <p className='Pprivacy'>
        <strong>b. Legal Compliance:</strong> We may disclose your information if required by law or in response to a legal process.
        </p>
        
        <h2 className='SectionHeading'>4. Security:</h2>
        
        <p className='Pprivacy'>
        We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction.
        </p>
        
        <h2 className='SectionHeading'>5. Cookies:</h2>
        
        <p className='Pprivacy'>
        We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, and personalize content. You can manage your cookie preferences through your browser settings.
        </p>
        
        <h2 className='SectionHeading'>6. Third-Party Links:</h2>
        
        <p className='Pprivacy'>
        Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these websites. Please review the privacy policies of third-party sites before providing any personal information.
        </p>
        
        <h2 className='SectionHeading'>7. Your Choices:</h2>
        
        <p className='Pprivacy'>
        You have the right to update, correct, or delete your personal information. You can manage your communication preferences and opt-out of marketing emails.
        </p>
        
        <h2 className='SectionHeading'>8. Children's Privacy:</h2>
        
        <p className='Pprivacy'>
        Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children.
        </p>
        
        <h2 className='SectionHeading'>9. Changes to this Privacy Policy:</h2>
        
        <p className='Pprivacy'>
        We may update this Privacy Policy periodically. The date of the latest revision will be indicated at the top. We encourage you to review this policy regularly.
        </p>
        
        <h2 className='SectionHeading'>10. Contact Us:</h2>
        
        <p className='Pprivacy'>
        If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us at [contact@email.com].
        </p>
        
        <p className='Pprivacy'>
        By using [Your Online Grocery Store], you agree to the terms outlined in this Privacy Policy.
        </p>
        
        <p className='LastUpdated'>Last Updated: [Date]</p>
        </div>
        <Footer/>
        </div>
        );
      };
      
      export default PrivacyPolicy;
      