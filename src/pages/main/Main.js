import { React, useState } from "react";
import { BrowserRouter as Link, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Home from "../homepage/Home";
import Alert from 'react-bootstrap/Alert';
import Header from "../../fragments/header/Header";
import Footer from "../../fragments/footer/Footer";
import Myprofile from "../myprofile/Myprofile";
import { getUser, removeUser } from "../../data/repository";
import SpecialDeals from "../special-deals/Special-deals";
import Cart from "../cart/Cart";
import { initProductData } from "../../data/productData";
import useLocalStorage from "../../fragments/customHook/useLocalStorage";
import ShopOnline from "../product-page/ShopOnline";
import Signin from "../signup-signin/Signin";
import { SignUp } from "../signup-signin/Signup";
import ProductPage from "../product-page/ProductPage";
import useCart from "../../fragments/customHook/useCart";
import useCheckLogin from "../../fragments/customHook/useCheckLogin";
const Main = () => {
  const [username, setUsername] = useState(getUser());
  const navigate = useNavigate();
  const loginUser = (username) => {
    setUsername(username);
    console.log(username);
  };
  const logout = () => {
    removeUser();
    setUsername(null);
  };
  //if initdata changes -> call use effect to store the products in the local storage again
  const [initProducts, setInitProducts] = useState(initProductData());
  useLocalStorage("Products", initProducts);
  //cart custom hook
  const [productSelected, setProductSelected] = useState(null);
  //handle click and pass the status add or remove to the custom hook cart
  const [status,setStatus] = useState(null)
  const handleClick = (product,action) => {
    setStatus(action)
     if (username === null) {
      alert("You need to log in first")
      navigate("/login")
     }
     else {
      setProductSelected(product);
     }
    } 
  const cart = useCart(productSelected,status);
  return (
    <>
        <Header username={username} logout={logout} />
        <Routes>
          <Route path="/" element={<Home handleClick={handleClick} />} />
          <Route path="/login" element={<Signin loginUser={loginUser} />} />
          <Route path="/Register" element={<SignUp loginUser={loginUser} />} />
          <Route path="/profile" element={<Myprofile />} />
          <Route
            path="/special"
            element={<SpecialDeals handleClick={handleClick} />}
          />
          <Route
            path="/shop-online"
            element={<ShopOnline handleClick={handleClick} />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product-page/:urlId" element={<ProductPage handleClick={handleClick} />} />
        </Routes>
        <Footer />
    </>
  );
};

export default Main;
