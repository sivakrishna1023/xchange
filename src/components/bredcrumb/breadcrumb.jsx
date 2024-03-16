import Link from "next/link";
import React from "react";

const Breadcrumb = ({ title, subtitle, isDbbl = "" }) => {
  return (
    <section
      className="breadcrumb__area include-bg pt-140 pb-4 breadcrumb__overlay"
      style={{
        backgroundImage: `url(/assets/img/breadcrumb/bg6.jpg)`,

      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="breadcrumb__content  p-relative z-index-1">
              <h3 className="breadcrumb__title pt-10 mb-20">{title}</h3>
              <div className="breadcrumb__list">
                <span>
                  <Link href="/">Home</Link>
                </span>
                <span className="dvdr">
                  <i className="fa-regular fa-angle-right"></i>
                </span>
                {isDbbl && (
                  <>
                    <span className="sub-page-black">{isDbbl}</span>
                    <span className="dvdr">
                      <i className="fa-regular fa-angle-right"></i>
                    </span>
                  </>
                )}
                <span className="sub-page-black">{subtitle}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
