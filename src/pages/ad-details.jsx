import React from "react";
import SEO from "../common/seo";
import AdDetails from "../components/ad-details";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Course Details"} />
      <AdDetails />
    </Wrapper>
  );
};

export default index;
