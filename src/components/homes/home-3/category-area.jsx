import category_data_3 from "@/src/data/category-data-3";
import Link from "next/link";
import React from "react";

const CategoryArea = () => {
  return (
    <>
      <section
        className="tp-category-area bg-bottom grey-bg pt-10   mb-10 wow fadeInUp"
        data-wow-duration=".8s"
        data-wow-delay=".3s"
        style={{ backgroundImage: `url(/assets/img/bg/shape-bg-1.png)`, paddingTop: "40px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title mb-70">
                <span className="tp-bline-stitle mb-15">Top Categories</span>
                <h2 className="tp-section-title">Explore Company Courses</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {category_data_3.map((item, i) => (
              <div key={i} className="col-xxl-3 col-lg-4 col-md-6">
                <div className="tp-cat-item mb-40 d-flex align-items-center">
                  <div className="tp-category-icon tp-cat-color mr-15">
                    <span className={`cat-design ${item.color}`}>
                      <img src={item.icon} alt="category-img" />
                    </span>
                  </div>
                  <div className="tp-cat-content">
                    <h4 className="tp-category-title tp-title-small">
                      <Link href="/course-grid">{item.title}</Link>
                    </h4>
                    <p>{item.available}</p>
                  </div>
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
