import Link from "next/link";
import React from "react";

// instructor_info
const instructor_info = [
  {
    id: 1,
    img: "/assets/img/bg/instruc-ab-01.jpg",
    name: "Brooklyn Simmons",
    total_class: "35",
    total_st: "291",
    title: "Instructor",
  },
  {
    id: 2,
    img: "/assets/img/bg/instruc-ab-02.jpg",
    name: "Courtney Henry",
    total_class: "35",
    total_st: "291",
    title: "Instructor",
  },
  {
    id: 3,
    img: "/assets/img/bg/instruc-ab-03.jpg",
    name: "Cameron Williamson",
    total_class: "35",
    total_st: "291",
    title: "Instructor",
  },
];

const InstructorArea = () => {
  return (
    <>
      <section
        className="instructor-area pt-10 mb-10 wow fadeInUp"
        data-wow-duration=".8s"
        data-wow-delay=".3s"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-8 col-md-7 col-12">
              <div className="section-title mb-10 lg:mb-65 ">
                <span className="tp-sub-title-box mb-15">Instructor</span>
                <h2 className="tp-section-title mb-20">
                  Our Expert Instructor
                </h2>
              </div>
            </div>
            <div className="col-xl-6 col-lg-4 col-md-5 col-8">
              <div className="instruc-sub-btn d-flex justify-content-md-end mb-40">
                <Link className="tp-btn" href="/instructor">
                  See All Instructor
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            {instructor_info.map((item, i) => (
              <div
                key={i}
                className="col-lg-4 col-md-6 col-12 wow fadeInUp"
                data-wow-duration=".8s"
                data-wow-delay=".5s"
              >
                <div className="tp-instruc-item">
                  <div className="tp-instructor text-center p-relative mb-40">
                    <div className="tp-instructor__thumb mb-25">
                      <img src={item.img} alt="instructor-profile" />
                    </div>
                    <div className="tp-instructor__content">
                      <span>Instructor</span>
                      <h4 className="tp-instructor__title tp-instructor__title-info p-relative mb-35 mt-5">
                        <Link href="/instructor-profile">{item.name}</Link>
                      </h4>
                      <div className="tp-instructor__stu-info">
                        <ul className="d-flex align-items-center justify-content-center">
                          <li className="d-flex align-items-center">
                            <img
                              src="/assets/img/icon/c-meta-01.png"
                              alt="meta-icon"
                            />
                            <i>{item.total_class} Classes</i>
                          </li>
                          <li className="d-flex align-items-center">
                            <img
                              src="/assets/img/icon/c-meta-02.png"
                              alt="meta-icon"
                            />
                            <i>{item.total_st}+ Students</i>
                          </li>
                        </ul>
                      </div>
                      <div className="tp-instructor__social">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-facebook-f"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-instagram"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-youtube"></i>
                            </a>
                          </li>
                        </ul>
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

export default InstructorArea;
