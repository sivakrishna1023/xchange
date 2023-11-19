'use client'
import React ,{useContext} from "react";
import Breadcrumb from "../bredcrumb/breadcrumb";
import NewPasswordForm from "../form/new-password-form";
import { Context } from "../Clients/clientcomponents";
import { redirect } from "next/navigation";
import { useRouter } from 'next/navigation'
const NewPassword = () => {
  const {user,setUser}=useContext(Context);
  const router=useRouter();
  if(user._id)  return   router.replace(`/`);
  return (
    <>
      <Breadcrumb title="New Password" subtitle="New Password" isDbbl="Pages" />
      <NewPasswordForm />
    </>
  );
};

export default NewPassword;