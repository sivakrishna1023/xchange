import BrandArea from "@/src/common/brand-area";
import SuitableArea from "@/src/common/suitable-area";
import React from "react";
import VideoArea from "../../../common/video-area";
import AboutArea from "../../../common/about-area";
import BannerArea from "./banner-area";
import BlogArea from "./blog-area";
import CategoryArea from "./category-area";
import ChooseArea from "./choose-area";
import CounterArea from "./counter-area";
import FeatureArea from "../../../common/feature-area";
import OurCourse from "./our-course";
import TestimonialArea from "../../../common/testimonial-area-2";

const HomeThree = () => {
  return (
    <>
      <BannerArea />
      <FeatureArea />
      <AboutArea />
      <SuitableArea />
      <VideoArea style_2={true} />
      <CategoryArea />
      <OurCourse />
      <ChooseArea />
      <TestimonialArea />
      <BrandArea style_3={true} />
      <BlogArea />
      <CounterArea style_3={true} />
    </>
  );
};

export default HomeThree;
