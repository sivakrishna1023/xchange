import React from "react";
import SEO from "../common/seo";
import PostAd from "../components/post-ad";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"New Ad"} />
      <PostAd />
    </Wrapper>
  );
};

export default index;
