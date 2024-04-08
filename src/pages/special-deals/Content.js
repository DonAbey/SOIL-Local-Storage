import React from "react";
import Product from "../../components/Product";
import { getData } from "../../data/repository";
const Content = (props) => {
  const localStorageData = getData("SpecialProducts");
  //find matching product id from the localstorage and return the component
  const renderProduct = () => {
    return props.productId.map((prodId) => {
      let local = localStorageData.filter(
        (localData) => localData.id === prodId
      )[0]
        return (
          <>
          {/* passing props to the product component */}
            <Product {...local}/>
            <div className="p-4"></div>
          </>
        );
    });
  };
  return (
    <div class="col">
      <h2>{props.head}</h2>
      <p>{props.content}</p>
      <div className="d-flex">
        {renderProduct()}
      </div>
    </div>
  );
};

export default Content;
