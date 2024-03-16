import blog_grid_data from "@/src/data/blog-grid-data";
import Link from "next/link";
import React from "react";

const BlogArea = () => {
  return (
    <>
      <section
        className="blog-area pt-10   pb-120 wow fadeInUp"
        data-wow-duration=".8s"
        data-wow-delay=".2s"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title mb-10 lg:mb-65  text-center">
                <h2 className="tp-section-title mb-20">Latest Blogs & News</h2>
              </div>
            </div>
          </div>
          <div className="row mb-20">
            {blog_grid_data.map((item, i) => (
              <div key={i} className="col-xl-4 col-lg-6 col-md-6">
                <div
                  className="tp-blog tp-blog-parent mb-40 wow fadeInUp"
                  data-wow-duration=".8s"
                  data-wow-delay=".2s"
                >
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
                          {item.data}
                        </Link>
                      </span>
                      <span>
                        <Link href="/blog-details">
                          <i className="fi fi-sr-apps"></i>
                          {item.category}
                        </Link>
                      </span>
                    </div>
                    <h3 className="tp-blog__title mb-15">
                      <Link href="/blog-details">{item.title}</Link>
                    </h3>
                    <span>
                      <Link href="/blog-details">
                        <i className="fi fi-sr-user"></i>
                        {item.user}
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="basic-pagination text-center">
            <nav>
              <ul>
                <li>
                  <Link href="/blog">
                    <i className="far fa-angle-left"></i>
                  </Link>
                </li>
                <li>
                  <span className="current">1</span>
                </li>
                <li>
                  <Link href="/blog">2</Link>
                </li>
                <li>
                  <Link href="/blog">3</Link>
                </li>
                <li>
                  <Link href="/blog">
                    <i className="far fa-angle-right"></i>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogArea;
