import OtherProfile from "@/src/components/other-profile";
import React from "react";
import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Seller Profile"} />
      <OtherProfile/>
    </Wrapper>
  );
};

export default index;