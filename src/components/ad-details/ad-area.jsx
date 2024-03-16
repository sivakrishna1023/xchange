import our_ads_data from "@/src/data/our-ads-data";
import Link from "next/link";
import React from "react";

const AdArea = () => {
  return (
    <>
      <section className="course-area mb-80">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title mb-10 lg:mb-65 ">
                <h2 className="tp-section-title mb-20">Related Ads</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {our_ads_data.slice(0, 3).map((item, i) => (
              <div key={i} className="col-xl-4 col-lg-6 col-md-6">
                <div
                  className="tpcourse mb-40 wow fadeInUp"
                  data-wow-duration=".8s"
                  data-wow-delay=".3s"
                >
                  <div className="tpcourse__thumb p-relative w-img fix">
                    <Link href={item.course_link}>
                      <img src={item.img} alt="course-thumb" />
                    </Link>
                    <div className="tpcourse__tag">
                      <Link href={item.course_link}>
                        <i className="fi fi-rr-heart"></i>
                      </Link>
                    </div>
                    <div className="tpcourse__img-icon">
                      <img src={item.icon} alt="course-avata" />
                    </div>
                  </div>
                  <div className="tpcourse__content-2">
                    <div className="tpcourse__category mb-10">
                      <ul className="tpcourse__price-list d-flex align-items-center">
                        <li>
                          <Link
                            className={item.ct_color}
                            href={item.course_link}
                          >
                            {item.course_title}
                          </Link>
                        </li>
                        <li>
                          <Link
                            className={item.cn_color}
                            href={item.course_link}
                          >
                            {item.course_name}
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="tpcourse__ava-title mb-15">
                      <h4 className="tpcourse__title tp-cours-title-color">
                        <Link href={item.course_link}>{item.title}</Link>
                      </h4>
                    </div>
                    <div className="tpcourse__meta tpcourse__meta-gap pb-15 mb-15">
                      <ul className="d-flex align-items-center">
                        <li>
                          <img
                            src="/assets/img/icon/c-meta-01.png"
                            alt="meta-icon"
                          />{" "}
                          <span>{item.cls_text}</span>
                        </li>
                        <li>
                          <img
                            src="/assets/img/icon/c-meta-02.png"
                            alt="meta-icon"
                          />{" "}
                          <span>{item.st_text}</span>
                        </li>
                      </ul>
                    </div>
                    <div className="tpcourse__rating d-flex align-items-center justify-content-between">
                      <div className="tpcourse__rating-icon">
                        <span>{item.start_text}</span>
                        <i className="fi fi-ss-star"></i>
                        <i className="fi fi-ss-star"></i>
                        <i className="fi fi-ss-star"></i>
                        <i className="fi fi-ss-star"></i>
                        <i className="fi fi-rs-star"></i>
                        <p>({item.total_start})</p>
                      </div>
                      <div className="tpcourse__pricing">
                        <h5 className="price-title">${item.course_price}</h5>
                      </div>
                    </div>
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

export default AdArea;
