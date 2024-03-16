import React from "react";

const feature_content = [
  {
    id: 1,
    icon: "fi fi-rr-user",
    title: "Create Account",
    des: "Join our community and unlock exclusive benefits with a few clicks. Create your account today and start exploring the possibilities!",
  },
  {
    id: 2,
    icon: "fi fi-rr-plus",
    title: "Post an Ad",
    des: "Boost your online visibility with our 'Post an Ad' feature, a powerful tool for reaching a wider audience and promoting your products or services on your website.",
  },

  {
    id: 3,
    icon: "fi fi-rr-money",
    title: "Start Earning",
    des: "Unlock your financial potential and take the first step towards success with 'Start Earning.' Join us today and pave your path to prosperity.",
  },
];




const FeatureArea = () => {
  return (
    <>
      <section
        className="tp-feature-area grey-bg pt-10 pb-90 pl-205 pr-205 bg-bottom"
        style={{ backgroundImage: `url(/assets/img/bg/shape-bg-1.png)` }}
      >
        <div className="container-fluid">
          <div className="row text-center">
            <div className="col-lg-12">
              <div className="section-title mb-60 mt-60">
                <span className="tp-sub-title mb-20">Easy Steps</span>
                <h2 className="tp-section-title">How It Works</h2>
              </div>
            </div>
          </div>
          <div className="tp-feature-cn">
            <div className="row">
              {feature_content.map((item) => (
                <div key={item.id} className="col-xl-4 col-lg-6 col-md-6">
                  <div
                    className="tpfea mb-30 wow fadeInUp"
                    data-wow-duration=".8s"
                    data-wow-delay=".6s"
                  >
                    <div className="tpfea__icon mb-25">
                      <i className={item.icon}></i>
                    </div>
                    <div className="tpfea__text">
                      <h5 className="tpfea__title mb-20">{item.title}</h5>
                      <p>
                        {item.des}
                      </p>
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
