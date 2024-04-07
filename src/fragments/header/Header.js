import React from "react";
import Navbar from "../navbar/Navbar";
import "./header.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';

const Header = ({username}) => {
  return (
    <>
      <nav class="navbar navbar-light header-nav py-4">
        <div class="container-fluid justify-space-between ms-5 me-5">
        <Link to="/" className="soil-logo">
          <a class="navbar-brand me-5 soil-logo">
            <h1 className="soil-logo d-inline">SOIL</h1>
            <img src={logo} alt="" style={{width:"100px"}}/>
          </a>
          </Link>
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
          {username === null &&
            <li className="nav-item ms-5 me-5">
              <Link to="/login" className={"header-item-style"}>
                {" "}
                <i class="fi fi-rr-user"></i> Login
              </Link>
            </li>
            }
                  {username === null &&
            <li className="nav-item ms-5 me-5">
              <Link to="/Register" className={"header-item-style"}>
                {" "}
                <i class="fi fi-rr-user"></i> Register
              </Link>
            </li>
            }
            {username !== null &&
            <li className="nav-item me-5">
              {username}
               <Link to="/profile" className={"ms-4 header-item-style me-4"}>
                <i class="fi fi-rr-shopping-cart"></i> Profile 
              </Link>
              <Link to="/cart" className={"header-item-style me-4"}>
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
