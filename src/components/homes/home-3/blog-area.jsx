import blog_data_3 from "@/src/data/blog-data-3";
import Link from "next/link";
import React from "react";

const BlogArea = () => {
  return (
    <>
      <section
        className="blog-area pt-10 pb-110 wow fadeInUp"
        data-wow-duration=".8s"
        data-wow-delay=".3s"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb-65">
                <span className="tp-bline-stitle mb-15">Latest Blogs</span>
                <h2 className="tp-section-title mb-20">Latest Blogs & News</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {blog_data_3.map((item, i) => (
              <div key={i} className="col-xl-4 col-lg-6 col-md-6">
                <div className="tp-blog tp-blog-parent mb-60">
                  <div className="tp-blog__thumb">
                    <div className="fix blog-round">
                      <Link href="/blog-details">
                        <img src={item.img} alt="blog-img" />
                      </Link>
                    </div>
                  </div>
                  <div className="tp-blog__content blog-edu p-relative">
                    <div className="tp-blog__meta-list mb-10">
                      <span>
                        <Link href="/blog-details">
                          <i className="fi fi-ss-calendar"></i>
                          {item.date}
                        </Link>
                      </span>
                      <span>
                        <Link href="/blog-details">
                          <i className="fi fi-sr-apps"></i>Education
                        </Link>
                      </span>
                    </div>
                    <h3 className="tp-blog__title mb-15">
                      <Link href="/blog-details">{item.title}</Link>
                    </h3>
                    <span>
                      <Link href="/blog-details">
                        <i className="fi fi-sr-user"></i>
                        {item.name}
                      </Link>
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
