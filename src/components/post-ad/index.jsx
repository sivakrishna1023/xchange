
import React from "react";
import Breadcrumb from "../bredcrumb/breadcrumb";
import CheckoutArea from "./checkout-area";
import CouponArea from "./coupon-area";

const PostAd = () => {
  return (
    <>
    <Breadcrumb title="Post Ad" subtitle="Post Ad" />
      {/* <CouponArea /> */}
      <CheckoutArea />
    </>
  );
};

export default PostAd;
