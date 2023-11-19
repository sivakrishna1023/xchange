import answer_question_data from "@/src/data/answer-question-data";
import React from "react";

const FaqArea = () => {
  return (
    <>
      <section
        className="faq-area pb-120 wow fadeInUp"
        data-wow-duration=".8s"
        data-wow-delay=".2s"
      >
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-12">
              <div className="section-title mb-60 mt-60">
                <span className="tp-sub-title-box mb-15">FAQ</span>
                <h2 className="tp-section-title">Many People Ask About This</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="accordion pb-20" id="accordionExample">
                {answer_question_data.map((item, i) => (
                  <div key={i} className="accordion-items">
                    <h2
                      className="accordion-header"
                      id={`${item.accordion_id}`}
                    >
                      <button
                        className={`accordion-buttons ${item.collapsed}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={item.data_bs_target}
                        aria-expanded={item.aria_expanded}
                        aria-controls={item.aria_controls}
                      >
                        {item.question}
                      </button>
                    </h2>
                    <div
                     id={item.aria_controls} 
                     className={`accordion-collapse collapse ${item.show}`}
                     aria-labelledby={item.accordion_id} 
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                ))}               
              </div>
            </div>
          </div>
          {/* <div className="faq-btn text-center">
            <a href="#" className="tp-btn">
              Add Your Questions
            </a>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default FaqArea;
