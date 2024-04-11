import React from "react";
import { useState, useEffect } from "react";
import { useScrollToTop } from "../../fragments/customHook/useScrollToTop";
import { getData } from "../../data/repository";
import "./cart.css";
import useCart from "../../fragments/customHook/useCart";
const Cart = ({ currentUser, updateCartChanged }) => {
  useScrollToTop();
  // const { email, name } = currentUser;

  const [productSelected, setProductSelected] = useState(null);
  //handle click and pass the status add or remove to the custom hook cart
  const handleRemove = (product) => {
    setProductSelected(product);
  };
  const [items, setItems, activeUserCart] = useCart(productSelected, "delete");

  updateCartChanged(items);
  return (
    <div>
      <div className="container text-center mt-5">
        <h1>Shopping Cart</h1>
      </div>
      {activeUserCart.length > 0 ? (
        <div className="container mt-3 mb-5 p-5">
          <div className="row">
            <div className="col-8">
              <table class="table align-middle mb-0 bg-white">
                <thead className="bg-dark">
                  <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Price</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {activeUserCart.map((cart) => {
                    return (
                      <tr>
                        <th scope="row" className="fw-normal font-monospace">
                          {cart.cart_product.name}
                        </th>
                        <td className="fw-normal font-monospace">
                          {cart.cart_product.price}
                        </td>
                        <td>
                          <span
                            class="remove"
                            onClick={() =>
                              handleRemove(
                                {
                                  name: cart.cart_product.name,
                                  id: cart.cart_product.id,
                                  price: cart.cart_product.price,
                                }
                                // ,"delete"
                              )
                            }
                          >
                            remove
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="col border d-flex flex-column rounded-3 align-items-center border-dark border-1 p-4">
              <h2>Total</h2>
              <h3 className="font-monospace">
               $
                {activeUserCart.reduce((total, cart) => {
                  return (
                Math.round((total + cart.cart_product.price) * 100) / 100
                  );
                }, 0)}
              </h3>
              <div className="flex-grow-1 ">
                <button className=" flex-grow-1  p-4 my-5 rounded-pill">Check Out</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="mx-5 m-5">Your cart is currently empty.</div>
      )}
    </div>
  );
};

export default Cart;
