
import React from "react";
import Breadcrumb from "../bredcrumb/breadcrumb";
import CounterArea from "../homes/home-3/counter-area";
import AdArea from "./ad-area";
import AdDetailsArea from "./ad-details-area";

const AdDetails = () => {
  return (
    <>
      <Breadcrumb title="Ad Details" subtitle="Ad Details" isDbbl="Ad" />
      <AdDetailsArea />
      {/* <AdArea /> */}
      {/* <CounterArea /> */}
    </>
  );
};

export default AdDetails;
