import React from "react";
import Navbar from "../navbar/Navbar";
import "./header.css";
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <nav class="navbar navbar-light bg-light py-4">
        <div class="container-fluid justify-space-between ms-5 me-5">
          <a class="navbar-brand me-5" href="#">
            <img
              src="/docs/5.0/assets/brand/bootstrap-logo.svg"
              alt=""
              width="30"
              height="24"
              class="d-inline-block align-text-top"
            />
            SOIL
          </a>
          <form className="form-inline d-inline" style={{ width: "500px" }}>
            <div class="input-group rounded-pill">
              <input
                type="search"
                class="form-control rounded-pill"
                placeholder="Find Organic Products.."
                aria-label="Search"
                aria-describedby="search-addon"
              />
            </div>
          </form>
          <ul className="navbar nav">
            <li className="nav-item ms-5 me-5"><Link to="/">Login</Link></li>
            <li className="nav-item me-5"><Link to="/">Cart</Link></li>
          </ul>
        </div>
      </nav>
      <Navbar />
    </>
  );
};

export default Header;
