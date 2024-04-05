import React from 'react'
import { Link } from 'react-router-dom';
import "./nav.css";
import NavItem from './NavItem';
const Navbar = () => {
  return (
    <nav class="navbar navbar-light bg-light menu-nav">
        <div class="container-fluid justify-content-start ms-5 me-5 mt-0">        
          <ul className="navbar nav">
            <NavItem content="Home" linkto="/" />
            <NavItem content="Special Deals" linkto="/" />
            <NavItem content="Shop Online" linkto="/" />
            <NavItem content="Forums" linkto="/" />
          </ul>
        </div>
      </nav>
  )
}

export default Navbar