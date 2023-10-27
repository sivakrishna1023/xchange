import React from "react";
import SEO from "../common/seo";
import BlogGrid from "../components/blog-grid";
import Wrapper from "../layout/wrapper";
const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Blog Grid"} />
      <BlogGrid />
      </Wrapper>
  );
};

export default index;
