import FeatureArea from "@/src/common/feature-area";
import SuitableArea from "@/src/common/suitable-area";
import React from "react";
import Breadcrumb from "../bredcrumb/breadcrumb";
import CounterArea from "../homes/home-3/counter-area";
import AdListArea from "./ad-list-area";

const AdList = () => {
  return (
    <>
      <Breadcrumb title="Ads List" subtitle="Ads List" isDbbl="Ads" />
      {/* <FeatureArea style_about={true} /> */}
      <AdListArea />
      {/* <SuitableArea style_2={true} /> */}
      {/* <CounterArea /> */}
    </>
  );
};

export default AdList;
