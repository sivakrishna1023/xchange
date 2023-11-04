import Link from "next/link";
import React from "react";

const choose_data = {
  bg_img: "/assets/img/bg/choose-img-01.png",
  trustable_sellers: "23",
  title: "Why Trust Us",
  sub_title: (
    <>
      Why Should You Trust Our
      <br />
      Product
    </>
  ),
  des: 'Trust our product for reliability, quality, and satisfaction.',

  choose_list: [
    { title: "Safe and Secure Process" },
    { title: "Verified trustworthy sellers" },
    { title: "Clear and fair policies for all" },
  ],
};

const { bg_img, trustable_sellers, title, sub_title, des, choose_list } =
  choose_data;
const ChooseArea = () => {
  return (
    <>
      <section
        className="choose-area pb-90 wow fadeInUp"
        data-wow-duration=".8s"
        data-wow-delay=".4s"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-6 col-md-6">
              <div className="tp-choose-img p-relative mb-30 ml-25">
                <img src={bg_img} width="500px" alt="choose-img" />
                <div className="tpchoose-img-text d-none d-md-block">
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
            <div className="col-xl-5 col-lg-6 col-md-6">
              <div className="tp-choose-content mb-30">
                <div className="section-title mb-25">
                  <span className="tp-sub-title mb-25">{title}</span>
                  <h2 className="tp-section-title mb-20">
                   {sub_title}
                  </h2>
                  <p>
                    {des}
                  </p>
                </div>
                <div className="tp-choose-list mb-35">
                  <ul>
                    {choose_list.map((item, i) => (
                      <li key={i}>
                        <i className="fa-light fa-check"></i> {item.title}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="choose-btn">
                  <Link href="/about" className="tp-btn">
                    More About Us
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

export default ChooseArea;
