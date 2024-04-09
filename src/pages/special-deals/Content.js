import React from "react";
import Product from "../../components/Product";
import { getData } from "../../data/repository";
const Content = ({handleClick,productId,head,content}) => {
  const localStorageData = getData("SpecialProducts");
  //find matching product id from the localstorage and return the component
  const renderProduct = () => {
    return productId.map((prodId) => {
      let local = localStorageData.filter(
        (localData) => localData.id === prodId
      )[0]
        return (
          <>
          {/* passing props to the product component */}
            <Product handleClick={handleClick} {...local} productId={local.id}/>
            <div className="p-4"></div>
          </>
        );
    });
  };
  return (
    <div class="col">
      <h2>{head}</h2>
      <p>{content}</p>
      <div className="d-flex">
        {renderProduct()}
      </div>
    </div>
  );
};

export default Content;
