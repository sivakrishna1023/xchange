import FeatureArea from "@/src/common/feature-area";
import SuitableArea from "@/src/common/suitable-area";
import React from "react";
import Breadcrumb from "../bredcrumb/breadcrumb";
import CounterArea from "../homes/home-3/counter-area";
import SellerArea from "./seller-area";

const Seller = () => {
  return (
    <>
    <Breadcrumb title="Our Trusted Sellers" subtitle="Our Trusted Sellers" />
      {/* <FeatureArea style_about={true} /> */}
      <SellerArea />
      {/* <SuitableArea style_2={true} /> */}
      {/* <CounterArea /> */}
    </>
  );
};

export default Seller;
