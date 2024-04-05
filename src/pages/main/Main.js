import {React,useState} from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Home from "../homepage/Home";
import Header from "../../fragments/header/Header";
import Footer from "../../fragments/footer/Footer";
import Myprofile from "../myprofile/Myprofile";
import {getUser} from "../../data/repository"
const Main = () => {
  const [username,setUsername] = useState(getUser())
  
  return (
    <>
      <Router>
        <Header username={username}/>
        <Routes>
          <Route path="/" element={<Home username={username}/>} />
          <Route path="/profile" element={<Myprofile />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default Main;
