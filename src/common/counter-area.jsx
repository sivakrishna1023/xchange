import React from "react";
import Count from "./count";

// counter data 
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
const CounterArea = ({ style_counter }) => {
  return (
    <>
      <section
        className={`tp-counter-area bg-bottom  ${style_counter ? "pb-60" : "grey-bg pt-10 pb-60"}  wow fadeInUp`}
        data-wow-duration="1s"
        data-wow-delay=".4s"

        style={{ backgroundImage: style_counter ? null : `url(/assets/img/bg/shape-bg-1.png)` }}
      >
        <div className="container">
          <div className="row">
            {counter_data.map((item) => (
              <div key={item.id} className="col-xl-3 col-md-6">
                <div className="counter-item mb-60 text-center">
                  <div className="counter-item__icon mb-25">
                    <i className={item.icon}></i>
                  </div>
                  <div className="counter-item__content">
                    <h4 className="counter-item__title">
                      <span className="counter">
                        <Count
                          add_style={true}
                          number={item.count_number}
                          text={item.thousand}
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
      </section>
    </>
  );
};

export default CounterArea;
