import React from "react";
import SEO from "../common/seo";
import FAQ from "../components/faq";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"FAQ"} />
      <FAQ />
    </Wrapper>
  );
};

export default index;
