'use client'
import React ,{useContext} from "react";
import Breadcrumb from "../bredcrumb/breadcrumb";
import ForgotPasswordForm from "../form/forgot-password-form";
import { Context } from "../Clients/clientcomponents";
import { redirect } from "next/navigation";
import { useRouter } from 'next/navigation'
const ForgotPassword = () => {
  const {user,setUser}=useContext(Context);
  const router=useRouter();
  if(user._id)  return   router.replace(`/`);
  return (
    <>
      <Breadcrumb title="Forgot Password" subtitle="Forgot Password" isDbbl="Pages" />
      <ForgotPasswordForm />
    </>
  );
};

export default ForgotPassword;
