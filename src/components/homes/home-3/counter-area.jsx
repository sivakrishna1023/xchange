import Count from "@/src/common/count";
import React from "react";

// counter_data
const counter_data = [
  {
    id: 1,
    icon: "fi fi-rr-user",
    count_number: 276,
    thousand: "K",
    title: "Live Users Per Day",
  },
  {
    id: 2,
    icon: "fi fi-rr-document",
    count_number: 23,
    thousand: "K",
    title: "Products Bought",
  },
  {
    id: 3,
    icon: "fi fi-rr-apps",
    count_number: 735,
    thousand: "",
    title: "Trusted Sellers",
  },
  {
    id: 4,
    icon: "fi fi-rr-star",
    count_number: 407,
    thousand: "K",
    title: "5 Start Reviews",
  },
];



const CounterArea = () => {
  return (
    <>
      <section
        className="tp-counter-area theme-bg pt-90 wow fadeInUp"
        data-wow-duration=".6s"
        data-wow-delay=".2s"
      >
        <div className="counter-b-border">
          <div className="container">
            <div className="row">
              {counter_data.map((item, i) => (
                <div key={i} className="col-xl-3 col-md-6">
                  <div className="counter-item mb-70">
                    <div className="counter-item__content counter-white-text">
                      <h4 className="counter-item__title counter-left-title">
                        <span className="counter">
                          <Count
                            add_style={true}
                            number={item.count_number}
                            text={item.thousand}
                            style_3={true}
                          />
                        </span>
                      </h4>
                      <p>{item.title}</p>
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

export default CounterArea;
