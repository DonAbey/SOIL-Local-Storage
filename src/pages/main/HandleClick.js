import React from 'react'
import { useNavigate } from "react-router-dom";
import {useState} from 'react'
const HandleClick = (username) => {
    const navigate = useNavigate();
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
  return {handleClick,productSelected,status}
  
}

export default HandleClick