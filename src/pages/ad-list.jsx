import React from "react";
import SEO from "../common/seo";
import AdList from "../components/ad-list";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Course List"} />
      <AdList />
    </Wrapper>
  );
};

export default index;
