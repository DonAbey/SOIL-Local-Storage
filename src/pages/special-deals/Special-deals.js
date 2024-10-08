import { React, useState } from "react";
import { useEffect } from "react";
import { getFarmProducts } from "../../data/productData";
import useLocalStorage from "../../fragments/customHook/useLocalStorage";
import { getData } from "../../data/repository";
import { useScrollToTop } from "../../fragments/customHook/useScrollToTop";
import ProductList from "../../components/ProductList";
import Product from "../../components/Product";
import { initProductData } from "../../data/productData";
import Content from "./Content";
import { Link } from "react-router-dom";
const SpecialDeals = ({ handleClick, items }) => {
  const getSpecialProduct = () => {
    if (items !== null) {
      return items.filter((product) => {
        return product.special === true;
      });
    }
  };
  //get special products(farm)
  const [farmProducts, setFarmProducts] = useState(getSpecialProduct() || null);

  return (
    <div>
      <nav aria-label="breadcrumb" className="ms-5 mt-5">
        <ol className="breadcrumb ms-2">
          <li className="breadcrumb-item ">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active">Special Deals</li>
        </ol>
      </nav>
      <div className="text-center mt-5">
        <h2>Organic product specials & small-scale farming</h2>
      </div>
      <div className="container">
        <div className="row mx-5 mt-5" >
          <Content
            handleClick={handleClick}
            items={farmProducts}
            productIds={[11, 12]}
            //Reference: The Growing Smaller Vegetables in Your Backyard content is generated by openAI.
            head={"Growing Smaller Vegetables in Your Backyard"}
            content={`    Have you ever dreamed of having a thriving vegetable garden right
              in your backyard, even with limited space? Growing smaller
              vegetables can be a rewarding and accessible way to enjoy fresh
              produce at home. In this blog post, we'll explore some tips and
              tricks for cultivating a bountiful harvest of compact vegetables
              in your own backyard oasis.`}
          />
          <div className="col">
            {" "}
            <img
              src="special-1.png"
              style={{ width: "100%", height: "600px" }}
            ></img>
          </div>
          <div className="w-100 my-4"></div>
          <div className="col">
            {" "}
            <img
              src="special-deal2.png"
              style={{ width: "100%", height: "600px" }}
            ></img>
          </div>
          <Content
            handleClick={handleClick}
            items={farmProducts}
            productIds={[13, 14]}
            head={"Choosing the Right Vegetables"}
            //Reference: The Growing Smaller Vegetables in Your Backyard content is generated by openAI.
            content={`When space is a consideration, opting for smaller varieties of
              vegetables is key. Look for compact or dwarf varieties that thrive
              in containers or raised beds. Vegetables like cherry tomatoes,
              mini bell peppers, bush beans, and baby carrots are perfect
              choices for smaller spaces. These varieties not only fit well in
              confined areas but also yield delicious results that are perfect
              for salads, snacks, and cooking.`}
          />
        </div>
        <div className="w-100"></div>
        <div className="col"> </div>
      </div>
      <h2 className="text-center my-5">All Special Deal Items</h2>
      <ProductList list={farmProducts} handleClick={handleClick} />
    </div>
  );
};

export default SpecialDeals;
