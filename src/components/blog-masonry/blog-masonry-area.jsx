import blog_masonry_data from "@/src/data/blog-masonry-data";
import Link from "next/link";
import React from "react";

const BlogMasonryArea = () => {
  return (
    <>
      <section className="blog-area pt-10   pb-115">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title mb-10 lg:mb-65  text-center">
                <h2 className="tp-section-title mb-20">Latest Blogs & News</h2>
              </div>
            </div>
          </div>
          <div className="row mb-20">
            {blog_masonry_data.map((item, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <div
                  className="tp-blog mb-40 wow fadeInUp"
                  data-wow-duration=".8s"
                  data-wow-delay=".4s"
                >
                  <div className="tp-blog__thumb p-relative">
                    <div className="fix blog-round">
                      <Link href="/blog-details">
                        <img src={item.img} alt="blog-img" />
                      </Link>
                    </div>
                    <div className="tp-blog__meta-ab">
                      <Link href="/blog-details">{item.category}</Link>
                      <span>-</span>
                      <Link href="/blog-details">{item.data}</Link>
                    </div>
                  </div>
                  <div className="tp-blog__content blog-box p-relative">
                    <h3 className="tp-blog__title mb-15 mt-20">
                      <Link href="/blog-details">{item.title}</Link>
                    </h3>
                    <p>{item.des}</p>
                    <span>
                      <i className="fi fi-rr-clock"></i>
                      {" "}{item.post_time}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="blog-btn text-center">
                <Link href="/blog-grid" className="tp-btn">
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

export default BlogMasonryArea;
