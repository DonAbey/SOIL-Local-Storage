import React from "react";
import Navbar from "../navbar/Navbar";
import "./header.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <>
      <nav class="navbar navbar-light bg-light py-4">
        <div class="container-fluid justify-space-between ms-5 me-5">
          <a class="navbar-brand me-5 soil-logo" href="#">
            <h1 classname="soil-logo">SOIL</h1>
          </a>
          <form action="">
            <div class="input-group col-md-4 search rounded-pill">
              <input
                class="form-control py-2 border-right-0 rounded-pill"
                type="search"
                placeholder="Find Organic Products.."
                id="example-search-input"
              />
            </div>
          </form>
          <ul className="navbar nav">
          {props.username === null &&
            <li className="nav-item ms-5 me-5">
              <Link to="/" className={"header-item-style"}>
                {" "}
                <i class="fi fi-rr-user"></i> Login
              </Link>
            </li>
            }
            {props.username !== null &&
            <li className="nav-item me-5">
              {props.username}
               <Link to="/" className={"ms-4 header-item-style me-4"}>
                <i class="fi fi-rr-shopping-cart"></i> Profile 
              </Link>
              <Link to="/" className={"header-item-style me-4"}>
                <i class="fi fi-rr-shopping-cart "></i> Cart
              </Link>
              <Link to="/" className={"header-item-style"}>
                <i class="fi fi-rr-shopping-cart "></i> Logout
              </Link>
            </li>
            }
          </ul>
        </div>
      </nav>
      <Navbar />
    </>
  );
};

export default Header;
