import FeatureArea from "@/src/common/feature-area";
import SuitableArea from "@/src/common/suitable-area";
import React from "react";
import Breadcrumb from "../bredcrumb/breadcrumb";
import CounterArea from "../homes/home-3/counter-area";
import AdArea from "./ad-list-area";

const AdGrid = () => {
  return (
    <>
      <Breadcrumb title="Ads Grid" subtitle="Ads Grid" isDbbl="Ads" />
      {/* <FeatureArea style_about={true} /> */}
      <AdArea />
      {/* <SuitableArea style_2={true} /> */}
      {/* <CounterArea /> */}
    </>
  );
};

export default AdGrid;
