import React from "react";

const VideoArea = ({ style_2 }) => {
  return (
    <>
      <section
        className={`video-area ${style_2 ? "pb-120" : "pt-90 pb-120"} wow fadeInUp`}
        data-wow-duration=".8s"
        data-wow-delay=".4s"
      >
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-12 col-md-12">
              <div className="section-title mb-10 lg:mb-65 ">
                <span className="tp-sub-title-box mb-15">Live Classes</span>
                <h2 className="tp-section-title mb-20">
                  HD Quality Video, Audio <br /> & Live Classes
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="video-bg p-relative text-center">
                {style_2 ? (
                  <img src="/assets/img/bg/video-bg-2.jpg" alt="video-bg" />
                ) : (
                  <img src="/assets/img/bg/video-bg-01.jpg" alt="video-bg" />
                )}
                <div className={`video-text ${style_2 ? "video-run-time" : ""}`}>
                  <i>
                    Live<span>01:30:08</span>
                  </i>
                </div>
                <div className={`${style_2 ? "video-shape-area" : "video-shape"}`}>

                  {
                    style_2 ?

                      <>
                        <img
                          className="video-shape"
                          src="/assets/img/about/shape-2-img-2.png"
                          alt="video-shape"
                        />
                        <img
                          className="video-shape-2 d-none d-md-block"
                          src="/assets/img/about/video-2-shape-2.png"
                          alt="video-shape"
                        />
                        <img
                          className="video-shape-3 d-none d-md-block"
                          src="/assets/img/about/video-2-shape-1.jpg"
                          alt="video-shape"
                        />

                      </>
                      :
                      <img
                        src="/assets/img/about/shape-2-img-2.png"
                        alt="video-shape"
                      />
                  }

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoArea;
