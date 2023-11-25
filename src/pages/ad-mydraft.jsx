import React from "react";
import SEO from "../common/seo";
import AdGrid from "../components/ad-mydraft";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Course Grid"} />
      <AdGrid />
    </Wrapper>
  );
};

export default index;
