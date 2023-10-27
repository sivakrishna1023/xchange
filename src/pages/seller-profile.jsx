import SellerProfile from "@/src/components/seller-profile";
import React from "react";
import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Seller Profile"} />
      <SellerProfile/>
    </Wrapper>
  );
};

export default index;
