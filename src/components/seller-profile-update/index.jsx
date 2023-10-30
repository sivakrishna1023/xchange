
import React, { useContext } from "react";
import Breadcrumb from "../bredcrumb/breadcrumb";
import CounterArea from "../homes/home-3/counter-area";
import SellerPortfolioAreaUpdate from "./seller-portfolio-area-update";
import { Context } from "../Clients/clientcomponents";
import { useRouter } from "next/router";
const SellerProfileUpdate = () => {
  const {user,setUser}=useContext(Context);
  const router=useRouter();
 
  return (
    <>
    <Breadcrumb title="Seller's Profile Update" isDbbl="Seller" subtitle="Seller's Profile Update" />
      <SellerPortfolioAreaUpdate />
      {/* <CounterArea /> */}
    </>
  );
};

export default SellerProfileUpdate
