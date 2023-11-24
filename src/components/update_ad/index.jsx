import React from 'react'
import Breadcrumb from "../bredcrumb/breadcrumb";
import CheckoutArea from "./checkout-area";
import Check from './check';

const index = () => {
  return (
      <>
    <Breadcrumb title="Checkout" subtitle="CheckOut" />
      <Check/>
    </>
  )
}

export default index;

