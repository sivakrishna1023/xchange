import React from "react";
import SEO from "../common/seo";
import Cart from "../components/cart";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Cart"} />
      <Cart />
    </Wrapper>
  );
};

export default index;
