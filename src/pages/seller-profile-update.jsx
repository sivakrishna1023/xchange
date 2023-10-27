import SellerProfileUpdate from "@/src/components/seller-profile-update";
import React from "react";
import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Instructor Profile"} />
      <SellerProfileUpdate />
    </Wrapper>
  );
};

export default index;
