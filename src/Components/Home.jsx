import React from 'react';
import { Link } from 'react-router-dom';
import  './Header.module.css'
import logo from '../Fasco.svg';
import scroll from '../scroll.svg'

export default function Header() {
  return (
    <div className="header">
      <img src={logo} className="logo" alt="logo" />
        <a href='/' className="home">Home</a>
        <a href='/deals' className="deals">Deals</a>
        <a href='/newArrivals' className="new-arrivals">New arrivals</a>
        <a href='/packages' className="packages">Packages</a>
        <a href="/signup" className="sign-up">Sign Up</a>


        
      <div className="text-button">
        <p className="text">ULTIMATE SALE NEW COLLECTION</p>
        <button className="shop-now">SHOP NOW</button>
        <img src={scroll} className="scroll" alt="scroll" />
      </div>
    </div>
  );
}
