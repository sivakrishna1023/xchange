import UpdateAd from "@/src/components/post-ad-update";
import React from "react";
import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Ad update"} />
      <UpdateAd/>
    </Wrapper>
  );
};

export default index;
