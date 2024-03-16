import blog_page_data from "@/src/data/blog-page-data";
import VideoPopup from "@/src/modals/video-popup";
import Link from "next/link";
import { useState, useRef } from "react";
import Slider from "react-slick";
import BlogSearch from "./blog-search";
import Category from "./category";
import RecentPost from "./recent-post";
import Tags from "./tags";

const setting = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};
const Postbox = () => {
  const sliderRef = useRef(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <div
        className="postbox__area pt-10 pb-120 wow fadeInUp"
        data-wow-duration=".8s"
        data-wow-delay=".2s"
      >
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-7 col-md-12">
              <div className="postbox__wrapper pr-20">
                {blog_page_data.map((item, i) => (
                  <article
                    key={i}
                    className="postbox__item format-image mb-60 transition-3"
                  >
                    {item.img && (
                      <div className="postbox__thumb w-img mb-30">
                        <Link href="/blog-details">
                          <img src={item?.img} alt="" />
                        </Link>
                      </div>
                    )}

                    {item.video &&
                      item.video.map((v_link, i) => (
                        <div
                          key={i}
                          className="postbox__thumb postbox__video p-relative w-img mb-30"
                        >
                          <Link href="/blog-details">
                            <img src={v_link.video_tum} alt="" />
                          </Link>

                          {/* video modal start */}
                          <VideoPopup
                            isVideoOpen={isVideoOpen}
                            setIsVideoOpen={setIsVideoOpen}
                            videoId={v_link.videoId}
                          />
                          {/* video modal end */}

                          <a
                            onClick={() => setIsVideoOpen(true)}
                            className="play-btn popup-video"
                          >
                            <i className="fas fa-play"></i>
                          </a>
                        </div>
                      ))}

                    {item.slider_img && (
                      <div className="postbox__thumb postbox__slider w-img mb-30 p-relative">
                        <button
                          type="button"
                          onClick={() => sliderRef?.current?.slickPrev()}
                          className="slick-prev slick-arrow"
                        >
                          <i className="fi fi-rr-arrow-small-left"></i>
                        </button>
                        <button
                          type="button"
                          onClick={() => sliderRef?.current?.slickNext()}
                          className="slick-next slick-arrow"
                        >
                          <i className="fi fi-rr-arrow-small-right"></i>
                        </button>

                        <div className="blog-item-active">
                          <Slider {...setting} ref={sliderRef}>
                            {item.slider_img.map((slide, i) => (
                              <div key={i} className="postbox__slider-item">
                                <img src={slide.img} alt="" />
                              </div>
                            ))}
                          </Slider>
                        </div>
                      </div>
                    )}

                    <div className="postbox__content">
                      <div className="postbox__meta">
                        <span>
                          <i className="fi fi-rr-calendar"></i> {item.date}
                        </span>
                        <span>
                          <Link href="#">
                            <i className="fi fi-rr-user"></i> {item.user}
                          </Link>
                        </span>
                        <span>
                          <Link href="#">
                            <i className="fi fi-rr-comments"></i>{" "}
                            {item.comments}
                          </Link>
                        </span>
                      </div>
                      <h3 className="postbox__title">
                        <Link href="/blog-details">{item.title}</Link>
                      </h3>
                      <div className="postbox__text">
                        <p>{item.des}</p>
                      </div>
                      <div className="postbox__read-more">
                        <Link href="/blog-details" className="tp-btn">
                          read more
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
                <div className="basic-pagination">
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
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-5 col-md-12">
              <div className="sidebar__wrapper">
                <BlogSearch />
                <RecentPost />
                <Category />
                <Tags />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Postbox;
