import React from "react";
import SEO from "../common/seo";
import BlogMasonry from "../components/blog-masonry";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Blog Masonry"} />
      <BlogMasonry />
    </Wrapper>
  );
};

export default index;
