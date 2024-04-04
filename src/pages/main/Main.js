import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Home from "../home/Home";
import Header from "../../fragments/header/Header";
import Footer from "../../fragments/footer/Footer";
import Myprofile from "../myprofile/Myprofile";

const Main = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Myprofile />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default Main;
