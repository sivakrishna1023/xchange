'use client'
import React,{useState} from 'react'
import SEO from "../common/seo";
import ForgotPassword from "../components/forgot-password";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"forgot password"} />
      <ForgotPassword />
    </Wrapper>
  );
};

export default index;
