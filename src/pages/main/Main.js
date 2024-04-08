import { React, useState,useEffect } from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Home from "../homepage/Home";
import Header from "../../fragments/header/Header";
import Footer from "../../fragments/footer/Footer";
import Myprofile from "../myprofile/Myprofile";
import { getUser,removeUser } from "../../data/repository";
import SpecialDeals from "../special-deals/Special-deals";
import Cart from "../cart/Cart";
import { initProductData } from "../../data/productData";
import useLocalStorage from "../../fragments/customHook/useLocalStorage";
import ShopOnline from "../product-page/ShopOnline";
import Signin from "../signup-signin/Signin";
import { SignUp } from "../signup-signin/Signup";
import ProductPage from "../product-page/ProductPage";
const Main = () => {
  const [username, setUsername] = useState(getUser()); 
  const loginUser = (username) => {
    setUsername(username);
    console.log(username)
  }
  const logout = () => {
    removeUser();
    setUsername(null);
  }

  //if initdata changes -> call use effect to store the products in the local storage again
  const [initProducts, setInitProducts] = useState(initProductData());
  useLocalStorage("Products", initProducts);

  return (
    <>
      <Router>
        <Header username={username} logout={logout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Signin loginUser={loginUser}/>} />
          <Route path="/Register" element={<SignUp loginUser={loginUser}/>} />
          <Route path="/profile" element={<Myprofile />} />
          <Route path="/special" element={<SpecialDeals />} />
          <Route path="/shop-online" element={<ShopOnline />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product-page/:urlId" element={<ProductPage/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default Main;
