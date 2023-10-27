import React from "react";
import SEO from "../common/seo";
import BlogGrid from "../components/blog-grid";
import WrapperFour from "../layout/wrapper-4";

const index = () => {
  return (
    <WrapperFour>
      <SEO pageTitle={"Blog Grid"} />
      <BlogGrid />
    </WrapperFour>
  );
};

export default index;
