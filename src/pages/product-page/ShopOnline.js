import React from 'react'
import {useScrollToTop} from "../../fragments/customHook/useScrollToTop";
import { getAllProducts } from '../../data/productData';
import ProductList from '../../components/ProductList';
const ShopOnline = ({handleClick}) => {
  useScrollToTop();
  const products = getAllProducts();
  console.log(products)

  return (
    <div className="text-center mt-5">
    <h2>Shop Online</h2>
    <div className="my-5"></div>
    <ProductList list={products} handleClick={handleClick}/>
  </div>
    )
}

export default ShopOnline