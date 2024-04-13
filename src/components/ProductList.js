import React from "react";
import Product from "./Product";

const ProductList = ({ list,handleClick }) => {
  let products = list||[];
  console.log(products)
  return (
    <div className="container">
      <div class="row">
        {products.map((item) => {
          return (
            <div className="col">
              <Product handleClick={handleClick} name={item.name} price={item.price} img={item.img} productId={item.id} stock={item.stock}/>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
