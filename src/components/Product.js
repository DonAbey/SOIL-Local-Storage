import React from 'react'
import './product.css'
import { Link } from 'react-router-dom';
const Product = (props) => {
  console.log(props)
  const productInfo = {
    name:props.name,
    price:props.price,
    image:props.image,
    stock:props.stock,
    id:props.productId
  }
  console.log(props.image)
  return (
    <div className="item text-center font-monospace mb-4">
      <Link className={"menu-style"} to={`/product-page/${props.productId}`}>    
     <img src={props.image} alt="" />
     <h4 className="name mt-3">{props.name}</h4>
      <div className="price">$ {props.price}</div></Link>
      {props.stock  > 0 ?       
      <button onClick={()=>props.handleClick(productInfo,"add")} className="addCart"><i class="fi fi-rr-shopping-cart-add"></i> Add To Cart</button>
:        <button className="addCart disabled" disabled><i class="fi fi-rr-shopping-cart-add"></i> Out of stock</button>
}
    </div>

  )
}

export default Product