import category_data_2 from "@/src/data/category-data-2";
import Link from "next/link";
import React from "react";

const CategoryArea = () => {
  return (
    <>
      <section
        className="category-ractangle-area pb-90 wow fadeInUp"
        data-wow-duration=".8s"
        data-wow-delay=".4s"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title mb-10 lg:mb-65 ">
                <span className="tp-sub-title-box mb-15">Top Categories</span>
                <h2 className="tp-section-title">Explore 100+ Categories</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {category_data_2.map((item) => (
              <div key={item.id} className="col-xl-3 col-lg-4 col-md-6 col-12">
                <div className="tp-cat-item tp-rec-item mb-35">
                  <div className="tp-category-icon mb-30">
                    <img src={item.icon} alt="category-img" />
                  </div>
                  <h4 className="tp-category-title tp-r-cat-title">
                    <Link href="/course-grid">{item.title}</Link>
                  </h4>
                  <p>{item.available}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoryArea;
