import React from 'react'
import { Link } from 'react-router-dom';
import "./nav.css";
const Navbar = () => {
  return (
    <nav class="navbar navbar-light bg-light menu-nav">
        <div class="container-fluid justify-content-start ms-5 me-5 mt-0">        
          <ul className="navbar nav">
            <li className="nav-item me-5 link-primary"><Link className={"menu-style"} to="/">Special Deals</Link></li>
            <li className="nav-item me-5"><Link className={"menu-style"} to="/">Food</Link></li>
          </ul>
        </div>
      </nav>
  )
}

export default Navbar