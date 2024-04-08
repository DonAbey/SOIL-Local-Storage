import { React, useEffect, useState } from "react";
import Heading from "../../components/Heading";
import CarouselSection from "../../components/CarouselSection";
import ProductList from "../../components/ProductList";
import { getData } from "../../data/repository";
import useLocalStorage from "../../fragments/customHook/useLocalStorage";
import SectionHeader from "../../components/SectionHeader";
import Banner from "../../components/Banner";
import {useScrollToTop} from "../../fragments/customHook/useScrollToTop";
const Home = ({ username }) => {
  const [products, setProducts] = useState(getData("Products"));
  const showMostPopular = products != null ? products.slice(0, 4) : ""; /*fake first 5 products */
  useScrollToTop();
  return (
    <div>

      <Heading
        title="We're passionate about offering you the finest selection of organic goods."
        subtitle="Every product on our shelves is carefully curated to ensure that you're getting the best quality, flavor, and nutrition while supporting environmentally-friendly practices."
      />
      <CarouselSection />
      <Banner
        text="Organic product specials & small-scale farming"
        linkto="shop-online"
      />
      <SectionHeader
        title="Most Popular Products..."
        link="/product-page"
        subtitle="View all products"
      />
      <ProductList list={showMostPopular} />
    </div>
  );
};

export default Home;
