import our_ads_data from "@/src/data/our-course-data";
import Link from "next/link";
import React from "react";

const OurCourse = () => {
  return (
    <>
      <section
        className="course-area pt-10 pb-100 wow fadeInUp"
        data-wow-duration=".8s"
        data-wow-delay=".3s"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title text-center mb-65">
                <span className="tp-bline-stitle mb-15">Our Courses</span>
                <h2 className="tp-section-title mb-20">
                  Explore Popular Courses
                </h2>
              </div>
            </div>
          </div>
          {/* <!-- course-nav-tab-start --> */}
          <div className="tp-course-nav-tabs">
            <nav>
              <div
                className="nav d-flex justify-content-center mb-50"
                id="nav-tab"
                role="tablist"
              >
                <button
                  className="tp-course-tab active"
                  id="nav-all-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-all"
                  type="button"
                  role="tab"
                  aria-controls="nav-all-tab"
                  aria-selected="true"
                  tabIndex="-1"
                >
                  All
                </button>
                <button
                  className="tp-course-tab"
                  id="nav-design-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-design"
                  type="button"
                  role="tab"
                  aria-controls="nav-design-tab"
                  aria-selected="false"
                  tabIndex="-1"
                >
                  Design
                </button>
                <button
                  className="tp-course-tab"
                  id="nav-develop-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-develop"
                  type="button"
                  role="tab"
                  aria-controls="nav-develop"
                  aria-selected="false"
                  tabIndex="-1"
                >
                  Devlopment
                </button>
                <button
                  className="tp-course-tab"
                  id="nav-contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-contact"
                  type="button"
                  role="tab"
                  aria-controls="nav-contact"
                  aria-selected="false"
                  tabIndex="-1"
                >
                  Content Writing
                </button>
                <button
                  className="tp-course-tab"
                  id="nav-search-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-search "
                  type="button"
                  role="tab"
                  aria-controls="nav-search"
                  aria-selected="false"
                  tabIndex="-1"
                >
                  Search Engine
                </button>
                <button
                  className="tp-course-tab"
                  id="nav-marketing-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-marketing"
                  type="button"
                  role="tab"
                  aria-controls="nav-marketing"
                  aria-selected="false"
                  tabIndex="-1"
                >
                  Marketing
                </button>
              </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="nav-all"
                role="tabpanel"
                aria-labelledby="nav-all-tab"
              >
                <div className="row">
                  {our_ads_data.slice(0, 6).map((item, i) => (
                    <div key={i} className="col-xl-4 col-lg-6 col-md-6">
                      <div className="tpcourse mb-40">
                        <div className="tpcourse__thumb p-relative w-img fix">
                          <Link href="/course-details">
                            <img src={item.img} alt={item.title} />
                          </Link>
                          <div className="tpcourse__tag">
                            <Link href="/course-details">
                              <i className="fi fi-rr-heart"></i>
                            </Link>
                          </div>
                          <div className="tpcourse__img-icon">
                            <img src={item.icon} alt={item.title} />
                          </div>
                        </div>
                        <div className="tpcourse__content-2">
                          <div className="tpcourse__category mb-10">
                            <ul className="tpcourse__price-list d-flex align-items-center">
                              <li>
                                <Link
                                  className={item.ct_color}
                                  href="/course-details"
                                >
                                  {item.course_title}
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className={item.cn_color}
                                  href="/course-details"
                                >
                                  {item.course_name}
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="tpcourse__ava-title mb-15">
                            <h4 className="tpcourse__title tp-cours-title-color">
                              <Link href="course-details">{item.title}</Link>
                            </h4>
                          </div>
                          <div className="tpcourse__meta tpcourse__meta-gap pb-15 mb-15">
                            <ul className="d-flex align-items-center">
                              <li>
                                <img
                                  src="/assets/img/icon/c-meta-01.png"
                                  alt="meta-icon"
                                />
                                <span>{item.cls_text}</span>
                              </li>
                              <li>
                                <img
                                  src="/assets/img/icon/c-meta-02.png"
                                  alt="meta-icon"
                                />
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
                              <p>(125)</p>
                            </div>
                            <div className="tpcourse__pricing">
                              <h5 className="price-title">
                                ${item.course_price}
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="nav-design"
                role="tabpanel"
                aria-labelledby="nav-design-tab"
              >
                <div className="row">
                  {our_ads_data.slice(6, 12).map((item, i) => (
                    <div key={i} className="col-xl-4 col-lg-6 col-md-6">
                      <div className="tpcourse mb-40">
                        <div className="tpcourse__thumb p-relative w-img fix">
                          <Link href="/course-details">
                            <img src={item.img} alt={item.title} />
                          </Link>
                          <div className="tpcourse__tag">
                            <Link href="/course-details">
                              <i className="fi fi-rr-heart"></i>
                            </Link>
                          </div>
                          <div className="tpcourse__img-icon">
                            <img src={item.icon} alt={item.title} />
                          </div>
                        </div>
                        <div className="tpcourse__content-2">
                          <div className="tpcourse__category mb-10">
                            <ul className="tpcourse__price-list d-flex align-items-center">
                              <li>
                                <Link
                                  className={item.ct_color}
                                  href="/course-details"
                                >
                                  {item.course_title}
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className={item.cn_color}
                                  href="/course-details"
                                >
                                  {item.course_name}
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="tpcourse__ava-title mb-15">
                            <h4 className="tpcourse__title tp-cours-title-color">
                              <Link href="course-details">{item.title}</Link>
                            </h4>
                          </div>
                          <div className="tpcourse__meta tpcourse__meta-gap pb-15 mb-15">
                            <ul className="d-flex align-items-center">
                              <li>
                                <img
                                  src="/assets/img/icon/c-meta-01.png"
                                  alt="meta-icon"
                                />
                                <span>{item.cls_text}</span>
                              </li>
                              <li>
                                <img
                                  src="/assets/img/icon/c-meta-02.png"
                                  alt="meta-icon"
                                />
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
                              <p>(125)</p>
                            </div>
                            <div className="tpcourse__pricing">
                              <h5 className="price-title">
                                ${item.course_price}
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="nav-develop"
                role="tabpanel"
                aria-labelledby="nav-develop-tab"
              >
                <div className="row">
                  {our_ads_data.slice(12, 18).map((item, i) => (
                    <div key={i} className="col-xl-4 col-lg-6 col-md-6">
                      <div className="tpcourse mb-40">
                        <div className="tpcourse__thumb p-relative w-img fix">
                          <Link href="/course-details">
                            <img src={item.img} alt={item.title} />
                          </Link>
                          <div className="tpcourse__tag">
                            <Link href="/course-details">
                              <i className="fi fi-rr-heart"></i>
                            </Link>
                          </div>
                          <div className="tpcourse__img-icon">
                            <img src={item.icon} alt={item.title} />
                          </div>
                        </div>
                        <div className="tpcourse__content-2">
                          <div className="tpcourse__category mb-10">
                            <ul className="tpcourse__price-list d-flex align-items-center">
                              <li>
                                <Link
                                  className={item.ct_color}
                                  href="/course-details"
                                >
                                  {item.course_title}
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className={item.cn_color}
                                  href="/course-details"
                                >
                                  {item.course_name}
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="tpcourse__ava-title mb-15">
                            <h4 className="tpcourse__title tp-cours-title-color">
                              <Link href="course-details">{item.title}</Link>
                            </h4>
                          </div>
                          <div className="tpcourse__meta tpcourse__meta-gap pb-15 mb-15">
                            <ul className="d-flex align-items-center">
                              <li>
                                <img
                                  src="/assets/img/icon/c-meta-01.png"
                                  alt="meta-icon"
                                />
                                <span>{item.cls_text}</span>
                              </li>
                              <li>
                                <img
                                  src="/assets/img/icon/c-meta-02.png"
                                  alt="meta-icon"
                                />
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
                              <p>(125)</p>
                            </div>
                            <div className="tpcourse__pricing">
                              <h5 className="price-title">
                                ${item.course_price}
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="nav-contact"
                role="tabpanel"
                aria-labelledby="nav-contact-tab"
              >
                <div className="row">
                  {our_ads_data.slice(18, 24).map((item, i) => (
                    <div key={i} className="col-xl-4 col-lg-6 col-md-6">
                      <div className="tpcourse mb-40">
                        <div className="tpcourse__thumb p-relative w-img fix">
                          <Link href="/course-details">
                            <img src={item.img} alt={item.title} />
                          </Link>
                          <div className="tpcourse__tag">
                            <Link href="/course-details">
                              <i className="fi fi-rr-heart"></i>
                            </Link>
                          </div>
                          <div className="tpcourse__img-icon">
                            <img src={item.icon} alt={item.title} />
                          </div>
                        </div>
                        <div className="tpcourse__content-2">
                          <div className="tpcourse__category mb-10">
                            <ul className="tpcourse__price-list d-flex align-items-center">
                              <li>
                                <Link
                                  className={item.ct_color}
                                  href="/course-details"
                                >
                                  {item.course_title}
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className={item.cn_color}
                                  href="/course-details"
                                >
                                  {item.course_name}
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="tpcourse__ava-title mb-15">
                            <h4 className="tpcourse__title tp-cours-title-color">
                              <Link href="course-details">{item.title}</Link>
                            </h4>
                          </div>
                          <div className="tpcourse__meta tpcourse__meta-gap pb-15 mb-15">
                            <ul className="d-flex align-items-center">
                              <li>
                                <img
                                  src="/assets/img/icon/c-meta-01.png"
                                  alt="meta-icon"
                                />
                                <span>{item.cls_text}</span>
                              </li>
                              <li>
                                <img
                                  src="/assets/img/icon/c-meta-02.png"
                                  alt="meta-icon"
                                />
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
                              <p>(125)</p>
                            </div>
                            <div className="tpcourse__pricing">
                              <h5 className="price-title">
                                ${item.course_price}
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="nav-search"
                role="tabpanel"
                aria-labelledby="nav-search-tab"
              >
                <div className="row">
                  {our_ads_data.slice(24, 30).map((item, i) => (
                    <div key={i} className="col-xl-4 col-lg-6 col-md-6">
                      <div className="tpcourse mb-40">
                        <div className="tpcourse__thumb p-relative w-img fix">
                          <Link href="/course-details">
                            <img src={item.img} alt={item.title} />
                          </Link>
                          <div className="tpcourse__tag">
                            <Link href="/course-details">
                              <i className="fi fi-rr-heart"></i>
                            </Link>
                          </div>
                          <div className="tpcourse__img-icon">
                            <img src={item.icon} alt={item.title} />
                          </div>
                        </div>
                        <div className="tpcourse__content-2">
                          <div className="tpcourse__category mb-10">
                            <ul className="tpcourse__price-list d-flex align-items-center">
                              <li>
                                <Link
                                  className={item.ct_color}
                                  href="/course-details"
                                >
                                  {item.course_title}
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className={item.cn_color}
                                  href="/course-details"
                                >
                                  {item.course_name}
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="tpcourse__ava-title mb-15">
                            <h4 className="tpcourse__title tp-cours-title-color">
                              <Link href="course-details">{item.title}</Link>
                            </h4>
                          </div>
                          <div className="tpcourse__meta tpcourse__meta-gap pb-15 mb-15">
                            <ul className="d-flex align-items-center">
                              <li>
                                <img
                                  src="/assets/img/icon/c-meta-01.png"
                                  alt="meta-icon"
                                />
                                <span>{item.cls_text}</span>
                              </li>
                              <li>
                                <img
                                  src="/assets/img/icon/c-meta-02.png"
                                  alt="meta-icon"
                                />
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
                              <p>(125)</p>
                            </div>
                            <div className="tpcourse__pricing">
                              <h5 className="price-title">
                                ${item.course_price}
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="nav-marketing"
                role="tabpanel"
                aria-labelledby="nav-marketing-tab"
              >
                <div className="row">
                  {our_ads_data.slice(30, 36).map((item, i) => (
                    <div key={i} className="col-xl-4 col-lg-6 col-md-6">
                      <div className="tpcourse mb-40">
                        <div className="tpcourse__thumb p-relative w-img fix">
                          <Link href="/course-details">
                            <img src={item.img} alt={item.title} />
                          </Link>
                          <div className="tpcourse__tag">
                            <Link href="/course-details">
                              <i className="fi fi-rr-heart"></i>
                            </Link>
                          </div>
                          <div className="tpcourse__img-icon">
                            <img src={item.icon} alt={item.title} />
                          </div>
                        </div>
                        <div className="tpcourse__content-2">
                          <div className="tpcourse__category mb-10">
                            <ul className="tpcourse__price-list d-flex align-items-center">
                              <li>
                                <Link
                                  className={item.ct_color}
                                  href="/course-details"
                                >
                                  {item.course_title}
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className={item.cn_color}
                                  href="/course-details"
                                >
                                  {item.course_name}
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="tpcourse__ava-title mb-15">
                            <h4 className="tpcourse__title tp-cours-title-color">
                              <Link href="course-details">{item.title}</Link>
                            </h4>
                          </div>
                          <div className="tpcourse__meta tpcourse__meta-gap pb-15 mb-15">
                            <ul className="d-flex align-items-center">
                              <li>
                                <img
                                  src="/assets/img/icon/c-meta-01.png"
                                  alt="meta-icon"
                                />
                                <span>{item.cls_text}</span>
                              </li>
                              <li>
                                <img
                                  src="/assets/img/icon/c-meta-02.png"
                                  alt="meta-icon"
                                />
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
                              <p>(125)</p>
                            </div>
                            <div className="tpcourse__pricing">
                              <h5 className="price-title">
                                ${item.course_price}
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* <!-- course-nav-tab-end --> */}
          <div className="row text-center">
            <div className="col-lg-12">
              <div className="course-btn mt-20">
                <Link className="tp-btn" href="/course-list">
                  Browse All Courses
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurCourse;
