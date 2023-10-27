import Link from "next/link";
import React from "react";
import SEO from "../common/seo";
import ErrorPage from "../components/error";
import Wrapper from "../layout/wrapper";

const Error = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Page Not Found"} />
      <ErrorPage />
    </Wrapper>
  );
};

export default Error;
