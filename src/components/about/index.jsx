import React from "react";
import FeatureArea from "../../components/homes/home/feature-area";
import AboutArea from "../../common/about-area";
import BrandArea from "@/src/common/brand-area";
import VideoArea from "../../common/video-area";
import ChooseArea from "../../common/choose-area";
import TestimonialAreaThree from "../../common/testimonial-area-2";
import SellerArea from "../../common/seller-area";
import SuitableArea from "@/src/common/suitable-area";
import CounterArea from "../homes/home-3/counter-area";
import Breadcrumb from "../bredcrumb/breadcrumb";

const About = () => {
  return (
    <>
      <Breadcrumb title="About Us" subtitle="About Us" isDbbl="Pages"  />
      <FeatureArea  />
      {/* <AboutArea style_about={true} /> */}
      {/* <BrandArea style_about={true} /> */}
      <ChooseArea style_about={true} />
      {/* <TestimonialAreaThree style_about={true} /> */}
      <SellerArea />
      {/* <CounterArea style_about={true} /> */}
    </>
  );
};

export default About;
