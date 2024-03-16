import React from "react";

// feature_data_3
const feature_data_3 = [
  {
    icon: "fi fi-rr-paper-plane",
    title: "Feature 1",
  },
  {
    icon: "fi fi-rr-user",
    title: "Feature 2",
  },
  {
    icon: "fi fi-rr-document",
    title: "Feature 3",
  },
  {
    icon: "fi fi-rr-calendar",
    title: "Feature 4",
  },
];
const FeatureArea = ({ style_about }) => {
  return (
    <>
      <section
        className="feature-area pt-10 pb-90 wow fadeInUp"
        data-wow-duration=".8s"
        data-wow-delay=".3s"
      >
        <div className="container">
          {style_about ? (
            ""
          ) : (
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title mb-70">
                  <span className="tp-bline-stitle mb-15">What We Offer</span>
                  <h2 className="tp-section-title">
                    For Your Future Learning.
                  </h2>
                </div>
              </div>
            </div>
          )}
          <div className="tp-feature-cn">
            <div className="row">
              {feature_data_3.map((item, i) => (
                <div key={i} className="col-xl-3 col-lg-6 col-md-6">
                  <div
                    className="tpfea tp-feature-item text-center mb-30 wow fadeInUp"
                    data-wow-duration=".8s"
                    data-wow-delay="1s"
                  >
                    <div className="tpfea__icon mb-25">
                      <i className={item.icon}></i>
                    </div>
                    <div className="tpfea__text">
                      <h5 className="tpfea__title mb-5">{item.title}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureArea;
