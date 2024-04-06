import {React,useEffect,useState} from "react";
import Heading from "../../components/Heading";
import CarouselSection from "../../components/CarouselSection";
import ProductList from "../../components/ProductList";
import { getData } from "../../data/repository";
import useLocalStorage from "../../components/useLocalStorage";
import SectionHeader from "../../components/SectionHeader";
import Banner from "../../components/Banner";
const Home = ({ username }) => {
  const [products,setProducts] = useState(getData("Products"));
  return (
    <div>
      <Heading
        title="We're passionate about offering you the finest selection of organic goods."
        subtitle="Every product on our shelves is carefully curated to ensure that you're getting the best quality, flavor, and nutrition while supporting environmentally-friendly practices."
      />
      <CarouselSection />
      <Banner text="Organic product specials & small-scale farming" linkto="special"/>
      <SectionHeader title="Most Popular Products..." link="/special" subtitle="View all deals" />
      <ProductList list={products} />

    </div>
  );
};

export default Home;
