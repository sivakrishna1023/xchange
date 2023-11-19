import FeatureArea from "@/src/common/feature-area";
import SuitableArea from "@/src/common/suitable-area";
import React from "react";
import Breadcrumb from "../bredcrumb/breadcrumb";
import CounterArea from "../homes/home-3/counter-area";
import FaqArea from "./faq-area";

const FAQ = () => {
  return (
    <>
      <Breadcrumb title="Frequently Asked Question"  subtitle="FAQ"  isDbbl="Pages"/>
      {/* <FeatureArea style_about={true} /> */}
      <FaqArea />
      {/* <SuitableArea style_2={true} /> */}
      {/* <CounterArea /> */}
    </>
  );
};

export default FAQ;
