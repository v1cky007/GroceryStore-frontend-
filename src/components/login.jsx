import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './navbar';
import email_icon from './Assets/email.png';
import password_icon from './Assets/password.png';
import Footer from './Footer';
import './login.css'; // Assuming you have a CSS file for styling

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if the username and password match any stored credentials
    const storedPassword = localStorage.getItem(username);

    if (username === 'admin' && password === '123') {
      // Redirect to the admin dashboard for admin
      localStorage.setItem('loggedInUser', 'admin');
      navigate('/');
    } else if (storedPassword === password) {
      // Redirect to the normal dashboard for regular users
      localStorage.setItem('loggedInUser', username);
      navigate('/');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="Logincontainer">
        <div className="Loginheader">
          <div className="Logintext">LogIn</div>
          <div className="Loginunderline"></div>
        </div>
        <div className="Logininputs">
          <div className="Logininput">
            <img src={email_icon} alt="" />
            <input
              type="text"
              placeholder="Enter Your Email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="Logininput">
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
        <div className="Loginforgot-password">
          Forgot Password <Link to="/forgot-password">Click Here!</Link>
          </div>
          {error && <p className="error-message">{error}</p>}
        <div className="Loginsubmit-container">
          <div className="Loginsubmit" onClick={handleLogin}>
            Login
          </div>
          </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
