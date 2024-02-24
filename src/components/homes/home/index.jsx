import React, { useState } from "react";
import AboutArea from "./about-area";
import CategoryArea from "./category-area";
import ChooseArea from "./choose-area";
import CounterArea from "../../../common/counter-area";
import CourseArea from "./course-area";
import FeatureArea from "./feature-area";
import HeroBanner from "./hero-banner";
import InstructorArea from "../../../common/seller-area";
import SuitableArea from "../../../common/suitable-area";
import TestimonialArea from "./testimonial-area";
import BlogArea from "./blog-area";
import BrandArea from "../../../common/brand-area";
import FeedbackBox from "@/src/lib/FeedbackBox";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <CategoryArea />
      <CourseArea />
      <FeatureArea />
      <AboutArea />
      <InstructorArea />
      <ChooseArea />
      {/* <CounterArea /> */}
      {/* <TestimonialArea /> */}
      {/* <BlogArea /> */}
      {/* <BrandArea style_1={true} /> */}
    </>
  );
};

export default Home;
