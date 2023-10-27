import React from "react";import Breadcrumb from "../bredcrumb/breadcrumb";
;
import CartArea from "./cart-area";

const Cart = () => {
  return (
    <>
      <Breadcrumb title="Shopping Cart" subtitle="Shopping Cart" isDbbl="Pages"  />
      <CartArea />
    </>
  );
};

export default Cart;
