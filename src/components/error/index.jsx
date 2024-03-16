import Link from "next/link";
import React from "react";
import Breadcrumb from "../bredcrumb/breadcrumb";

const ErrorPage = () => {
  return (
    <>
      <Breadcrumb title="" subtitle="404 Error" isDbbl="Pages" />
      <section className="error-area pt-10 pb-115">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="error-item text-center">
                <div className="error-thumb mb-50">
                  <img src="/assets/img/bg/erroe-bg.png" alt="error-bg" />
                </div>
                <div className="error-content">
                  <h4 className="error-title mb-35">
                    Oops! The Page You Are Looking <br /> For Does Not Exist
                  </h4>
                  <Link href="/" className="tp-btn">
                    Back To Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;
