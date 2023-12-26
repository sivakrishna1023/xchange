'use client'
import React,{useContext, useEffect} from "react";
import Link from "next/link";
import Breadcrumb from "../bredcrumb/breadcrumb";
import OtherPortfolioArea from "./other-portfolio-area";
import { Context } from "../Clients/clientcomponents";

const OtherProfile = () => {
  const {user}=useContext(Context);
  console.log(user);
  useEffect(()=>{  
  },[user])
  return (
    <>
    <Breadcrumb title="Other's Profile" isDbbl="Seller" subtitle="Other's Profile" />
      {user._id ? <OtherPortfolioArea />: <div>  <center>  Please wait.... <br /> Or <br /> Try <Link  href={`/sign-in`}  > login  </Link> again     </center> </div>}
    </>
  );
};

export default OtherProfile;
