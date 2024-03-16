import blog_data_2 from "@/src/data/blog-data-2";
import Link from "next/link";
import React from "react";

const BlogArea = () => {
  return (
    <>
      <section
        className="blog-area pt-10 pb-110 wow fadeInUp"
        data-wow-duration=".8s"
        data-wow-delay=".4s"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title mb-10 lg:mb-65  text-center">
                <span className="tp-sub-title-box mb-15">Latest Blogs</span>
                <h2 className="tp-section-title mb-20">Latest Blogs & News</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {blog_data_2.map((item, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <div className="tp-blog mb-60">
                  <div className="tp-blog__thumb p-relative">
                    <div className="fix blog-round">
                      <Link href="/blog-details">
                        <img src={item.img} alt="blog-img" />
                      </Link>
                    </div>
                    <div className="tp-blog__meta-ab">
                      <Link href="/blog-details">Education</Link> <span>-</span>
                      <Link href="/blog-details">{item.date}</Link>
                    </div>
                  </div>
                  <div className="tp-blog__content blog-box p-relative">
                    <h3 className="tp-blog__title mb-15 mt-20">
                      <Link href="/blog-details">{item.title}</Link>
                    </h3>
                    <p>{item.des}</p>
                    <span>
                      <i className="fi fi-rr-clock"></i> 2 minute read
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="blog-btn text-center">
                <Link href="/blog-masonry" className="tp-btn">
                  All Blog
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
