import React from 'react';
import { Link } from 'react-router-dom';




function Navbar() {
  return (
    <div className="navbar">
      <ul className="tabs">
        <li className="nav-title"><Link to="/">Home</Link></li>
        <li><Link to="/works">Works</Link></li>
        <li><Link to="/about">About us</Link></li>
        <li>  
        </li>
      </ul>
    </div>
  )
};

export default Navbar;