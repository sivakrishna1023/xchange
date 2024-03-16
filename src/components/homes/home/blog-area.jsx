import blog_data from "@/src/data/blog-data";
import Link from "next/link";
import React from "react";

const BlogArea = () => {
  return (
    <>
      <section
        className="blog-area pt-10   pb-110 wow fadeInUp"
        data-wow-duration="1s"
        data-wow-delay=".4s"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title mb-10 lg:mb-65  text-center">
                <h2 className="tp-section-title mb-20">Featured Ads</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {blog_data.map((item) => (
              <div key={item.id} className="col-xl-4 col-md-6">
                <div className="tp-blog mb-60">
                  <div className="tp-blog__thumb p-relative">
                    <div className="tp-blog__timg fix">
                      <Link href="/blog-details">
                        <img src={item.img} alt="blog-img" />
                      </Link>
                    </div>
                    <div className="tp-blog__icon">
                      <Link href="/blog-details">
                        <i className="fi fi-rs-angle-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="tp-blog__content">
                    <div className="tp-blog__meta mb-10">
                      <Link href="/blog-details">Category</Link> <span>-</span>
                      <Link href="/blog-details">{item.category}</Link>
                    </div>
                    <h3 className="tp-blog__title mb-15">
                      <Link href="/blog-details">{item.title}</Link>
                    </h3>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <p style={{ display: "flex", justifyContent: "center", alignItems: "center" }}><img style={{ marginRight: "4px" }} src="/assets/img/icon/user.svg" width={20} alt="blog-img" />{item.user}</p>
                      <p style={{ display: "flex", justifyContent: "center", alignItems: "center" }}><img style={{ marginRight: "4px" }} src="/assets/img/icon/location.svg" width={20} alt="blog-img" />{item.country}</p>
                      <p style={{ display: "flex", justifyContent: "center", alignItems: "center" }}><img style={{ marginRight: "4px" }} src="/assets/img/icon/time.svg" width={20} alt="blog-img" />{item.time}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="blog-btn text-center">
                <Link href="/blog" className="tp-btn">
                  Show all
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogArea;
