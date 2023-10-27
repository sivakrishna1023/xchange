'use client'
import React,{useContext, useEffect} from "react";
import Breadcrumb from "../bredcrumb/breadcrumb";
import CounterArea from "../homes/home-3/counter-area";
import SellerPortfolioArea from "./seller-portfolio-area";
import { Context } from "../Clients/clientcomponents";
const SellerProfile = () => {
  const {user}=useContext(Context);
  console.log(user);
  useEffect(()=>{
          
  },[user])
  return (
    <>
    
    <Breadcrumb title="Seller's Profile" isDbbl="Seller" subtitle="Seller's Profile" />
      {user._id ? <SellerPortfolioArea />: <div>Please Login</div>}
      {/* <CounterArea /> */}
    </>
  );
};

export default SellerProfile;
