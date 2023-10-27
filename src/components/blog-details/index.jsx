
import React from "react";
import Breadcrumb from "../bredcrumb/breadcrumb";
import CounterArea from "../homes/home-3/counter-area";
import PostboxBlogDetails from "./postbox-blog-details";

const BlogDetails = () => {
  return (
    <>
      <Breadcrumb title="Blog Details" subtitle="Blog Details" isDbbl="Blog" />
      <PostboxBlogDetails />
      <CounterArea />
    </>
  );
};

export default BlogDetails;
