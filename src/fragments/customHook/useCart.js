import React from "react";
import { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";
import { getData } from "../../data/repository";

const useCart = (productSelected, status) => {
  const currentUser = getData("activeUser");
  //fetching data from localstorage
  const [items, setItems] = useState(getData("all_users_cart_data") || []);
  const activeUserCart = items.filter(
    (user) => user.email === currentUser.email
  );
  const addProductCart = (product) => {
    //check if a user has added the same product
    let newData = verifyAndAddProduct(product);
    if (newData) {
      setItems([...items, newData]);
     alert("Added successfully");
      return true
    } else {
      alert("You have already added this product to the cart!");
      return false
    }
  };

  const deleteProductCart = (data) => {
    //set the items again but excluded the data passed to this function
    setItems(
      items.filter(
        (item) =>
          !(
            item.email === currentUser.email && item.cart_product.id === data.id
          )
      )
    );
  };

  useEffect(() => {
    if (status === "add") {
      if (productSelected !== null) {
        addProductCart(productSelected);
      }
    } else if (status === "delete") {
      if (productSelected !== null) {
        deleteProductCart(productSelected);
      }
    }
  }, [productSelected]);

  useEffect(() => {
    localStorage.setItem("all_users_cart_data", JSON.stringify(items));
  }, [items]);

  console.log("addeddd", items);
  console.log("deleted", items);
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
  return [items, setItems,activeUserCart];
};

export default useCart;
