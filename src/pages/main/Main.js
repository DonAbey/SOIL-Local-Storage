import { React, useState,useEffect } from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Home from "../homepage/Home";
import Header from "../../fragments/header/Header";
import Footer from "../../fragments/footer/Footer";
import Myprofile from "../myprofile/Myprofile";
import { getUser } from "../../data/repository";
import SpecialDeals from "../special-deals/Special-deals";
import Cart from "../cart/Cart";
import { initProductData } from "../../data/productData";
import useLocalStorage from "../../fragments/customHook/useLocalStorage";
import Productpage from "../product-page/Productpage";
import Signin from "../signup-signin/Signin";
import { SignUp } from "../signup-signin/Signup";
const Main = () => {
  const [username, setUsername] = useState(getUser()); 
  const loginUser = (username) => {
    setUsername(username);
    console.log(username)
  }

  //if initdata changes -> call use effect to store the products in the local storage again
  const [initProducts, setInitProducts] = useState(initProductData());
  useLocalStorage("Products", initProducts);

  return (
    <>
      <Router>
        <Header username={username} />
        <Routes>
          <Route path="/" element={<Home username={username} />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/Register" element={<SignUp loginUser={loginUser}/>} />
          <Route path="/profile" element={<Myprofile />} />
          <Route path="/special" element={<SpecialDeals />} />
          <Route path="/product-page" element={<Productpage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default Main;
