import React from "react";
import Heading from "../../fragments/Heading";
import CarouselSection from "../../fragments/CarouselSection";
const Home = ({username}) => {
  return (
    <div>
      <Heading
        title="We're passionate about offering you the finest selection of organic goods."
        subtitle="Every product on our shelves is carefully curated to ensure that you're getting the best quality, flavor, and nutrition while supporting environmentally-friendly practices."
      />
      <CarouselSection />
    </div>
  );
};

export default Home;
