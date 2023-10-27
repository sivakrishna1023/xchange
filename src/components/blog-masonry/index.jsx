
import React from "react";
import Breadcrumb from "../bredcrumb/breadcrumb";
import CounterArea from "../homes/home-3/counter-area";
import BlogMasonryArea from "./blog-masonry-area";

const BlogMasonry = () => {
  return (
    <>
      <Breadcrumb title="Blog" subtitle="Blog Masonry" isDbbl="Blog" />
      <BlogMasonryArea />
      <CounterArea />
    </>
  );
};

export default BlogMasonry;
