import React, { useRef } from "react";
import Slider from "react-slick";

const testimonial_data = [
  {
    id: 1,
    name: "Courtney Henry",
    img: "assets/img/icon/test-ava-01.png",
    title: "Sr. UX/UI Designer",
    des: (
      <>
        Dramatically supply transparent deliverab before & you backward comp
        internal or "organic" sources.
      </>
    ),
  },
  {
    id: 2,
    name: "Devon Lane",
    img: "assets/img/icon/test-ava-02.png",
    title: "Software Engineer",
    des: (
      <>
        Dramatically supply transparent deliverab before & you backward comp
        internal or "organic" sources.
      </>
    ),
  },
  {
    id: 3,
    name: "Jenny Wilson",
    img: "assets/img/icon/test-ava-03.png",
    title: "Content Writer",
    des: (
      <>
        Dramatically supply transparent deliverab before & you backward comp
        internal or "organic" sources.
      </>
    ),
  },
  {
    id: 4,
    name: "Jenny Wilson",
    img: "assets/img/icon/test-ava-03.png",
    title: "Content Writer",
    des: (
      <>
        Dramatically supply transparent deliverab before & you backward comp
        internal or "organic" sources.
      </>
    ),
  },
];


// slider setting
const setting = {
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const TestimonialArea = () => {
  const sliderRef = useRef(null);

  return (
    <>
      <section
        className="testimonial-area bg-bottom pt-10   pb-90 wow fadeInUp"
        data-wow-duration="1s"
        data-wow-delay=".4s"
        style={{ backgroundImage: `url(/assets/img/bg/shape-bg-1.png)` }}
      >
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-6 col-lg-8 col-md-8 col-12">
              <div className="section-title mb-10 lg:mb-65 ">
                <h2 className="tp-section-title mb-20">
                  Our Reviews
                </h2>
              </div>
            </div>
            <div className="col-xl-6 col-lg-4 col-md-4 col-6">
              <div className="tp-section-arrow d-flex justify-content-md-end mb-40">
                <button
                  type="button"
                  onClick={() => sliderRef?.current?.slickPrev()}
                  className="slick-prev slick-arrow"
                >
                  <i className="arrow_carrot-left"></i>
                </button>
                <button
                  type="button"
                  onClick={() => sliderRef?.current?.slickNext()}
                  className="slick-next slick-arrow"
                >
                  <i className="arrow_carrot-right"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="testimonial-active tp-slide-space">
            <Slider {...setting} ref={sliderRef}>
              {testimonial_data.map((item) => (
                <div key={item.id} className="tp-test-slide-item">
                  <div className="tp-testi p-relative mt-65">
                    <div className="tp-testi__avatar">
                      <img src={item.img} alt="testi-avatar" />
                    </div>
                    <div className="tp-testi__rating pb-5">
                      <ul className="d-flex align-items-center justify-content-end mr-5 mb-25">
                        <li>
                          <i className="fi fi-ss-star"></i>
                        </li>
                        <li>
                          <i className="fi fi-ss-star"></i>
                        </li>
                        <li>
                          <i className="fi fi-ss-star"></i>
                        </li>
                        <li>
                          <i className="fi fi-ss-star"></i>
                        </li>
                        <li>
                          <i className="fi fi-rs-star"></i>
                        </li>
                      </ul>
                    </div>
                    <div className="tp-testi__avainfo">
                      <p>{item.des}</p>
                      <h3 className="tp-testi__title">{item.name}</h3>
                      <i>{item.title}</i>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialArea;
