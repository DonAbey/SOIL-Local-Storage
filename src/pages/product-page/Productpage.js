import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./productstyle.css";
import { getData } from "../../data/repository";
import Button from "react-bootstrap/esm/Button";
import { useScrollToTop } from "../../fragments/customHook/useScrollToTop";
import { getAllProducts } from "../../data/productData";
const Productpage = ({ handleClick }) => {
  useScrollToTop();

  const { urlId } = useParams();
  const productData = getAllProducts();
  //filter products from the url and parse it to Integer to match with the product ID
  const findProduct = productData.filter(
    (product) => product.id === parseInt(urlId, 10)
  );
  if (findProduct.length === 0) {
    return "Product not found";
  }
  const { id, name, price, img } = findProduct[0];
  const productInfo = {
    name: name,
    price: price,
    img: img,
    id: id,
  };
  return (
    <div>
      <nav aria-label="breadcrumb" className="ms-5 mt-5">
        <ol className="breadcrumb ms-2">
          <li className="breadcrumb-item ">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/shop-online">Shop Online</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Product Page
          </li>
        </ol>
      </nav>

      <div class="container my-5 font-monospace">
        <div class="row row-cols-2">
          <div class="col">
            <img src="https://picsum.photos/300/300" />
          </div>
          <div class="col">
            <p className="fs-1 fw-bolder">{name}</p>
            <p className="fs-3">$ {price}</p>
            <button
              onClick={()=>handleClick(productInfo)}
              className="addToCartbtn rounded-pill fw-bold"
            >
              <i class="fi fi-rr-shopping-cart-add"></i> Add To Cart
            </button>
          </div>
        </div>
      </div>
      <div className="addspace"></div>
    </div>
  );
};

export default Productpage;
