import React from 'react';
import Navbar from './navbar';
import Footer from './Footer';
import Features from './Features';
import './home.css';
import OnlineGroceryBanner from './Banner';
import Categories from './Categories';
const Home = () => {
  return (
    <div>
    <Navbar/>
    <OnlineGroceryBanner/>
    <br></br>
    <br></br>
    <br></br>
      <h1 className='HHEADING'>
      Our
          {' '}
          <span>Features</span>
      </h1>
      <Features/>
      <h1 className='HHEADING'>
      Products
          {' '}
          <span>Categories</span>
      </h1>
      <Categories/>
      <Footer/>
    </div>
  );
};

export default Home;
