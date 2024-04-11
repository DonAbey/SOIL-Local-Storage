import React from 'react'
import './product.css'
import { Link } from 'react-router-dom';
const Product = ({name,price,img,productId,handleClick}) => {
  const productInfo = {
    name:name,
    price:price,
    img:img,
    id:productId
  }
  return (
    <div className="item text-center font-monospace mb-4">
      <Link className={"menu-style"} to={`/product-page/${productId}`}>
     <img src="https://picsum.photos/200"/>
     <h4 className="name mt-3">{name}</h4>
      <div className="price">$ {price}</div></Link>
      <button onClick={()=>handleClick(productInfo,"add")} className="addCart"><i class="fi fi-rr-shopping-cart-add"></i> Add To Cart</button>
    </div>

  )
}

export default Product