import Count from "@/src/common/count.jsx";
import our_ads_data from "@/src/data/our-ads-data.js";
import Link from "next/link";
import React from "react";
import { Context } from "../Clients/clientcomponents";
// instructor_portfolio_data
const instructor_portfolio_data = [
  {
    id: 6,
    img: "/assets/img/bg/instruc-in-06.jpg",
    name: "Esther Howard",
    total_class: "35",
    total_st: "291",
    title: "Instructor",
    sub_title:
      "UX/UI Designer, Chemical Engineer, Youtuber, Life Style Blogger",
    followers: "35,600",
    following: "135",
    job_title: "Lead UX Engineer",
    phone: "+00 365 9852 65",
    email: "epora@mail.com",
    experiences_year: "12+ Years",
    skill_level: "Pro Level",
    language: "English",
    biography: (
      <>
        <p>
          Synergistically foster 24/7 leadership rather than scalable platforms.
          Conveniently visualize installed base products before interactive
          results. Collaboratively restore corporate experiences and open-source
          applications. Proactively mesh cooperative growth strategies for
          covalent opportunities. Competently create efficient markets through
          best-of-breed potentialities.
        </p>
        <p>
          Compellingly exploit B2B vortals with emerging total linkage.
          Appropriately pursue strategic leadership whe intermandated ideas.
          Proactively revolutionize interoperable "outside the box" thinking
          with fully researched innovation. Dramatically facilitate exceptional
          architectures and bricks-and-clicks data. Progressively genera
          extensible e-services for.
        </p>
      </>
    ),
  },
];


// counter data 
const counter_data = [
   {
     id: 1,
     icon: "fi fi-rr-user",
     count_number: 276,
     thousand: "K",
     title: "Products Sold",
   },
   {
     id: 2,
     icon: "fi fi-rr-document",
     count_number: 35,
     thousand: "",
     title: "Products Bought",
   },
   {
     id: 3,
     icon: "fi fi-rr-star",
     count_number: 407,
     thousand: "K",
     title: "Ads Posted",
   },
 ];

const SellerPortfolioAreaUpdate = () => {
  return (
    <>
      <section
        className="instructor-portfolio pt-120 pb-80 wow fadeInUp"
        data-wow-duration=".8s"
        data-wow-delay=".2s"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-5">
              <div className="instruc-sidebar mb-40">
                <div className="isntruc-side-thumb mb-30">
                  <img
                    src="/assets/img/bg/instruc-sibedar-thumb-01.jpg"
                    alt="instructor-thumb"
                  />
                </div>
                <div className="instructor-sidebar-widget">
                  <div className="isntruc-side-content text-center">
                    <h4 className="side-instructor-title mb-15">
                      <input type="text" placeholder="Name"/>
                    </h4>
                    <p>
                      <input style={{width:"100%"}} type="text" placeholder="One Liner Description" />
                    </p>
                  </div>
                  <div className="cd-information instruc-profile-info mb-35">
                    <ul>
                      <li>
                        <i className="fi fi-rr-briefcase"></i>{" "}
                        <label>Job Title</label> 
                         <input style={{marginLeft:"1rem", marginTop:"1rem", width:"100%"}} type="text" />
                     
                      </li>
                      <li>
                        <i className="fi fi-rr-phone-call"></i>{" "}
                        <label>Phone</label> 
                        <input style={{marginLeft:"1rem", marginTop:"1rem", width:"100%"}} type="text" />
                      </li>
                      <li>
                        <i className="fi fi-rr-envelope"></i>{" "}
                        <label>Email</label> 
                        <input style={{marginLeft:"1rem", marginTop:"1rem", width:"100%"}} type="text" />
                      </li>
                      <li>
                        <i className="fi fi-rr-time-forward"></i>{" "}
                        <label>Experiences</label>
                        <input style={{marginLeft:"1rem", marginTop:"1rem", width:"100%"}} type="text" />
                      </li>
                      <li>
                        <i className="fi fi-rs-time-check"></i>{" "}
                        <label>Skill Level</label>
                        <input style={{marginLeft:"1rem", marginTop:"1rem", width:"100%"}} type="text" />
                      </li>
                      <li>
                        <i className="fi fi-br-comments"></i>{" "}
                        <label>Language</label>
                        <input style={{marginLeft:"1rem", marginTop:"1rem", width:"100%"}} type="text" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="instructor-main-content ml-30 mb-40">
                <div className="instruc-biography mb-50">
                  <h4 className="ins-bio-title mb-30">Biography</h4>
                  <p>
                    <textarea style={{width:"100%"}} name="" id="" cols="30" rows="10" placeholder="Write About Yourself"></textarea>
                  </p>
                  <p>
                    <input style={{width:"100%"}} placeholder="Enter Facebook Link" type="text" name="" id="" />
                  </p>
                  <p>
                  <input style={{width:"100%"}} placeholder="Enter Twitter (X) Link" type="text" name="" id="" />
                  </p>
                  <p>
                  <input style={{width:"100%"}} placeholder="Enter Insta Link" type="text" name="" id="" />
                  </p>
                  <p>
                  <input style={{width:"100%"}} placeholder="Enter Youtube Link" type="text" name="" id="" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SellerPortfolioAreaUpdate;
