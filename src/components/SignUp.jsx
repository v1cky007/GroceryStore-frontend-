import './login.css';
import Navbar from "./navbar";
import user_icon from './Assets/person.png';
import email_icon from './Assets/email.png';
import password_icon from './Assets/password.png';
import React, { useState } from 'react';
import Footer from "./Footer";
import {  Link, useNavigate } from 'react-router-dom';
import './SignUp.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    // Check if username or email already exists
    if (localStorage.getItem(username) || localStorage.getItem(email)) {
      setError('Username or email already exists');
    } else {
      localStorage.setItem(username, password);
      localStorage.setItem(email, password); // Assuming email is unique

      // Additional logic can be added here

      navigate('/login');
    }
  };

  return (
    <div>
      {/* Include other components like Navbar */}
      <Navbar />
      
      {/* Your Signup UI */}
      <div className="SignUpcontainer">
        <div className="SignUpheader">
          <div className="SignUptext">SignUp</div>
          <div className="SignUpunderline"></div>
        </div>
        <div className="SignUpinputs">
          <div className="SignUpinput">
            <img src={user_icon} alt="" />
            <input
              type="text"
              placeholder="Enter Your Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="SignUpinput">
            <img src={email_icon} alt="" />
            <input
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="SignUpinput">
            <img src={password_icon} alt="" />
            <input
              type="password"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="SignUpcreate">
          Already Have an account? <Link to="/login">Click Here!</Link>
        </div>
        <div className="SignUpsubmit-container">
          <div className="SignUpsubmit" onClick={handleSignup}>
            SignUp
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
