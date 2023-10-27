import Link from "next/link";
import React from "react";

const BannerArea = () => {
  return (
    <>
      <section className="banner-area fix p-relative">
        <div
          className="banner-bg banner-bg-rainbow"
          style={{backgroundImage: `url(/assets/img/banner/banner-bg-2.jpg)`}}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-8">
                <div className="hero-content hero-content-black">
                  <h2 className="hero-title-black mb-45">
                    Online Learning Designed For <br />
                    Real Life
                  </h2>
                  <div className="hero-btn">
                    <Link href="/course-list" className="tp-btn">
                      All Courses
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="banner-shape d-none d-md-block">
                  <img
                    src="/assets/img/banner/banner-img-1.png"
                    alt="banner-shape"
                    className="b-shape-3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BannerArea;
