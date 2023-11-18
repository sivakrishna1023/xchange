
import React from "react";
import Breadcrumb from "../bredcrumb/breadcrumb";
import RegisterForm from "../form/register-form";

const Register = () => {
  return (
    <>
      <Breadcrumb title="Register"  subtitle="Register"  isDbbl="Pages"/>
      <RegisterForm />
    </>
  );
};

export default Register;
