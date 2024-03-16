import Link from "next/link";
import React from "react";

// choose data 
const choose_data = {
  title: "Why Trust Us",
  sub_title: "Why Should You Trust Our Product",
  des: <>Trust our product for reliability, quality, and satisfaction.</>,
  trustable_sellers: "23",


}
const { title, sub_title, des, trustable_sellers } = choose_data

// choose list data
const choose_list_data = [
  {
    list: "Safe and Secure Process",
  },
  {
    list: "Verified trustworthy sellers",
  },
  {
    list: "Clear and fair policies for all",
  },
];
const ChooseArea = ({ style_about, style_2 }) => {
  return (
    <>
      <section
        className={`choose-area bg-bottom ${style_about ? "pb-120" : "grey-bg"} ${style_2 ? "pt-10 pb-90" : ""} wow fadeInUp`}
        data-wow-duration=".8s"
        data-wow-delay=".4s"
        style={{ backgroundImage: style_about ? null : `url(/assets/img/bg/shape-bg-1.png)` }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-6 col-md-12">
              <div className="tp-choose-content mb-30">
                <div className="section-title mb-25">
                  <span className="tp-sub-title-box mb-15">{title}</span>
                  <h2 className="tp-section-title mb-20">
                    {sub_title}
                  </h2>
                  <p>
                    {des}
                  </p>
                </div>
                <div className="tp-choose-list tp-choose-bg mb-60">
                  <ul>
                    {choose_list_data.map((item, i) => (
                      <li key={i}>
                        <div className="tp-list-bg">
                          <i className="fa-light fa-check"></i>
                          {item.list}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="choose-btn">
                  <Link href="/about" className="tp-btn">
                    More Details
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6 col-md-12">
              <div className="tp-choose-img tp-choose-img-2 p-relative mb-30 mr-50 text-end">
                <img src="/assets/img/about.png" alt="choose-img" />
                <div className="tpchoose-img-text tp-chose-shape d-none d-md-block">
                  <ul>
                    <li>
                      <i>{trustable_sellers}+</i>
                      <p>Trustable Sellers</p>
                    </li>
                    <li>
                      <i className="fa-light fa-check"></i>
                      <p>Fully Safe & Secure</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChooseArea;
