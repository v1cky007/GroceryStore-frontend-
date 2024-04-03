// Sidebar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Import your CSS file

const Sidebar = () => {
  return (
    <div className='main-menu'>
      <ul>
        <li>
          <Link to='/'>
            <i className='fa fa-home fa-2x'></i>
            <span className='nav-text'>Home</span>
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to='/add-users'>
            <i className="fa fa-fw fa-address-book fa-2x" aria-hidden="true"></i>
            <span className='nav-text'>Add User</span>
          </Link>
        </li>
      </ul>
      <ul className='logout'>
        <li>
          <Link to='/SignOut'>
            <i className='fa fa-power-off fa-2x'></i>
            <span className='nav-text'>Logout</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
