'use client'
import ads_data from "@/src/data/ads-data";
import Link from "next/link";
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../Clients/clientcomponents";

const CourseArea = () => {
  const currtime = Date.now();
  const { user } = useContext(Context);
  function TimePassed({ createdAt }) {
    const currentTime = new Date();
    const createdDate = new Date(createdAt);

    if (isNaN(createdDate)) {
      return <span style={{fontSize:"13px"}}>Error: Invalid Date</span>;
    }

    const timeDifference = currentTime.getTime() - createdDate.getTime();
    const minutesPassed = Math.floor(timeDifference / (1000 * 60));
    const hoursPassed = Math.floor(timeDifference / (1000 * 60 * 60));
    const daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    if (minutesPassed < 60) {
      return <span style={{fontSize:"13px"}}>{minutesPassed} minutes ago</span>;
    } else if (hoursPassed < 24) {
      return <span style={{fontSize:"13px"}}>{hoursPassed} hours ago</span>;
    } else {
      return <span style={{fontSize:"13px"}}>{daysPassed} days ago</span>;
    }
  }
  const gettasks = async () => {
    try {
      const res = await fetch("/api/ads/Allads", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      })
      const data = await res.json();
      if (data.success) {
        settasks(data.ads);
      }
    } catch (error) {
      console.log(error);
    }
  }
  const [tasks, settasks] = useState('');
  useEffect(() => {
    gettasks();
  }, [])
  return (
    <>
      <section
        className="course-area pt-115 pb-110 wow fadeInUp"
        data-wow-duration=".8s"
        data-wow-delay=".4s"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title mb-65">
                <h2 className="tp-section-title mb-20 mt-20">
                  Explore Popular Ads
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="row">
              {tasks && tasks.slice(0, 8).map((item, i) => (
                <div key={i} className="col-xl-3 col-lg-12 col-md-3">
                  <div className="tpcourse mb-40">
                    <div className="tpcourse__thumb p-relative w-img fix">
                     {
                      user._id ?  <Link href={`/ad-details?id=${item._id}`}>
                      <div style={{ width: "100%", height: "200px", overflow: "hidden" }}>
                        {item.images && item.images[0] && item.images[0] ? <img style={{ width: "100%", objectFit: "contain", height: "100%" }} src={item.images[0]} alt="course-thumb" /> : <img style={{ width: "100%", objectFit: "contain", height: "100%" }} src={'/assets/img/icon/c-meta-01.png'} alt="course-thumb" />}
                      </div>
                    </Link> : <Link href={`/sign-in`}>
                      <div style={{ width: "100%", height: "200px", overflow: "hidden" }}>
                        {item.images && item.images[0] && item.images[0] ? <img style={{ width: "100%", objectFit: "contain", height: "100%" }} src={item.images[0]} alt="course-thumb" /> : <img style={{ width: "100%", objectFit: "contain", height: "100%" }} src={'/assets/img/icon/c-meta-01.png'} alt="course-thumb" />}
                      </div>
                    </Link>
                     }
                      <div className="tpcourse__tag">
                        <Link href="#">
                          <i className="fi fi-rr-heart" style={{display:"flex", justifyContent:"center", alignItems:"center", width:"40px", height:"40px"}}></i>
                        </Link>
                      </div>

                    </div>
                    <div className="tpcourse__content-2">
                      <div className="tpcourse__category mb-10">
                        <ul className="tpcourse__price-list d-flex align-items-center">
                          <li>
                            <Link
                            style={{padding:"6px 9px", fontSize:"13px"}}
                              className={item.ct_color}
                              href={`/ad-details?id=${item._id}`}
                            >
                              {item.Category}
                            </Link>
                          </li>
                          <li>
                            <Link
                            style={{padding:"6px 9px", fontSize:"13px"}}
                              className={item.cn_color}
                              href={`/ad-details?id=${item._id}`}
                            >
                              {item.Brand}
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="tpcourse__ava-title mb-15">
                        <h4 className="tpcourse__title" style={{margin:"0"}}>
                          <Link href={`/ad-details?id=${item._id}`}>{item.Adname}</Link>
                        </h4>
                      </div>
                      <div className="tpcourse__meta tpcourse__meta-gap pb-15 mb-15">
                        <ul className="d-flex align-items-center">
                          <li >
                            <img
                              src="/assets/img/icon/c-meta-01.png"
                              alt="meta-icon"
                            />
                            <TimePassed createdAt={item.createdAt} />
                          </li>

                        </ul>
                      </div>
                      <div className="tpcourse__rating d-flex align-items-center justify-content-between">
                        <div className="tpcourse__rating-icon">
                          {tasks.Model}

                        </div>
                        <div className="tpcourse__pricing">
                          <h5 className="price-title"><i class="fas fa-inr" style={{ marginRight: "0.4rem" }}     ></i>{item.Adprice}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="row text-center">
            <div className="col-lg-12">
              <div className="course-btn mt-20">
                {user._id ? <Link className="tp-btn" href={'/ad-list'}>
                  Browse All Ads
                </Link> : <Link className="tp-btn" href={'/sign-in'}>
                  Browse All Ads
                </Link>}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseArea;
