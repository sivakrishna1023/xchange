import Link from "next/link";
import React from "react";



const about_info = {
    students: "235K",
    review: "4.7",
    pro_courses: "3.5K",
    title: 'Explore Thousands of Creative Classes.',
    des: <>Dramatically supply transparent deliverables befoe backward
    comp internal or "organic" sources.</>
}


const  { students, review, pro_courses, title, des} = about_info

const about_list_data = [
  {
    name: "Create an E-Pora account",
  },
  {
    name: "Choose Your Perfect Courses",
  },
  {
    name: "After Finished Courses, Get Certificate",
  },
];
const AboutArea = ({style_about}) => {
  return (
    <>
      <section
        className="tp-about-area pb-70 wow fadeInUp"
        data-wow-duration=".8s"
        data-wow-delay=".3s"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xxl-7 col-xl-7 col-lg-6 col-md-12 col-12">
              <div className="tp-about-class p-relative pb-50">
                {
                  style_about ?
                  <img
                  src="/assets/img/about/about-sub-bg-01.png"
                  alt="about-img"
                />
                  :

                <img
                  src="/assets/img/about/about-3-bg-01.png"
                  alt="about-img"
                />
                }
                <div className="tp-about-class-info">
                  <ul>
                    <li>
                      <span>{students}</span>Worldwide Students
                    </li>
                    <li>
                      <span>
                        {review}<i className="fi fi-ss-star"></i>
                      </span>
                      Worldwide Review
                    </li>
                    <li>
                      <span>{pro_courses}</span>Free Pro Courses
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-12 col-12">
              <div className="tp-about-class-content mb-50 ml-75">
                <div className="section-title mb-35">
                  <span className="tp-bline-stitle mb-15">How To Start</span>
                  <h2 className="tp-section-title mb-25">
                    {title}
                  </h2>
                  <p>
                   {des}
                  </p>
                </div>
                <div className="tp-about-list mb-65">
                  <ul>
                    {about_list_data.map((item, i) => (
                      <li key={i}>
                        <i className="fa-light fa-check"></i>
                        {item.name}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="tp-about-btn-3">
                  <Link href="/about" className="tp-btn">
                    Explore Courses
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutArea;
