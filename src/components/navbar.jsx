import React from "react";
import { Link } from "react-router-dom";
import './navbar.css'
const Navbar = () => {
  return (
    <nav>
      <ul className="NAV">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/SignUp">SignUp</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/admin-login">AdminLogin</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
