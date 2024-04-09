import React from "react";
import { useEffect } from "react";
const useCart = (productSelected) => {
  useEffect(() => {
    console.log(productSelected);
  }, [productSelected]);
};

export default useCart;
