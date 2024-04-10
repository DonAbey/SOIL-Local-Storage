import React from "react";
import { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";
import { getData } from "../../data/repository";

const useCart = (productSelected, status) => {
  const currentUser = getData("activeUser");
  //fetching data from localstorage
  const [items, setItems] = useState(getData("all_users_cart_data") || []);
  console.log(status);
  const addProductCart = (product) => {
    //check if a user has added the same product
    let newData = verifyAndAddProduct(product);
    if (newData) {
      setItems([...items, newData]);
    }
  };

  const deleteProductCart = (data) => {
    //set the items again but excluded the data passed to this function
    console.log(data)
    setItems(
      items.filter(
        (item) =>
          !(
            item.email === currentUser.email &&
            item.cart_product.id === data.id
          )
      )
    );
    console.log(items)
  };

  useEffect(() => {
    if (status === "add") {
      addProductCart(productSelected);
    } else if (status === "delete") {
      deleteProductCart(productSelected)
    }
  }, [productSelected]);

  useEffect(() => {
    localStorage.setItem("all_users_cart_data", JSON.stringify(items));
  }, [items]);

  console.log("O", items);

  //check if the user already added this product?
  const verifyAndAddProduct = (product) => {
    if (product !== null) {
      const alreadyAdded = items.some(
        (userData) =>
          userData.cart_product.id === product.id &&
          userData.email === currentUser.email
      );
      if (!alreadyAdded) {
        const userData = {
          email: currentUser.email,
          cart_product: product,
        };
        return userData;
      } else if (alreadyAdded) {
        return null;
      }
    }
  };
  return items;
};

export default useCart;
