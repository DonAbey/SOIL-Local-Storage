import React from "react";
import Product from "./Product";

const ProductList = ({ list,handleClick }) => {
  let products = list||[];
  return (
    <div className="container">
      <div class="row">
        {products.map((item) => {
          return (
            <div className="col">
              <Product handleClick={handleClick} name={item.name} price={item.price} img={item.img} productId={item.id} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
