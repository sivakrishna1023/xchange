'use client'
import React ,{useContext} from "react";
import Breadcrumb from "../bredcrumb/breadcrumb";
import LoginForm from "../form/login-form";
import { Context } from "../Clients/clientcomponents";
import { redirect } from "next/navigation";
import { useRouter } from 'next/navigation'
const SignIn = () => {
  const {user,setUser}=useContext(Context);
  const router=useRouter();
  if(user._id)  return   router.replace(`/`);
  return (
    <>
      <Breadcrumb title="Log In" subtitle="Login" isDbbl="Pages" />
      <LoginForm />
    </>
  );
};

export default SignIn;
