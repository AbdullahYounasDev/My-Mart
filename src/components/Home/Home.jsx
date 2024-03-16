import React, { memo } from "react";
import Hero from "./Hero";
import FeatProducts from "../Products/FeatProducts";
import CustomerSat from "./CustomerSat";
import TopCategories from "../Categories/TopCategories";

const Home = () => {
  return (
    <>
      <Hero />
      <CustomerSat />
      <TopCategories />
      <FeatProducts />
    </>
  );
};

export default memo(Home);
