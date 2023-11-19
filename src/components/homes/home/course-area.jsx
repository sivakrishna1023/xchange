'use client'
import ads_data from "@/src/data/ads-data";
import Link from "next/link";
import React,{useState,useEffect,useContext} from "react";
import { Context } from "../../Clients/clientcomponents";

const CourseArea = () => {
  const currtime=Date.now();
  const {user}=useContext(Context);
  function TimePassed({ createdAt }) {
    const currentTime = new Date(); 
    const createdDate = new Date(createdAt);
    if (isNaN(createdDate)) {
      return <span>Error: Invalid Date</span>;
    }
    const timeDifference = currentTime.getTime() - createdDate.getTime();
    const hoursPassed = Math.floor(timeDifference / (1000 * 60 * 60)); 
    return <span>{hoursPassed} hours ago</span>;
  }
  const gettasks=async()=>{
    try{
      const res=await fetch("/api/ads/Allads",{
        method:'GET',
        headers: {
          'Content-Type': 'application/json' 
        },
       })
      const data= await res.json();
      if(data.success){
           settasks(data.ads);
      }  
    }catch(error){
      console.log(error);
    }
  }
  const [tasks,settasks]=useState('');
  useEffect(()=>{
       gettasks(); 
  },[])
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
                <h2 className="tp-section-title mb-20">
                  Explore Popular Ads
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
          <div className="row">
                                                        { tasks &&  tasks.slice(0, 6).map((item, i) => (
                                                          <div key={i} className="col-xl-4 col-lg-12 col-md-3">
                                                            <div className="tpcourse mb-40">
                                                              <div className="tpcourse__thumb p-relative w-img fix">
                                                                <Link href={`/ad-details?id=${item._id}`}>
                                                                { item.images && item.images[0] &&  item.images[0] ?  <img src={item.images[0]} alt="course-thumb" /> : <img src={'/assets/img/icon/c-meta-01.png'} alt="course-thumb" />  }
                                                                </Link>
                                                                <div className="tpcourse__tag">
                                                                  <Link href="#">
                                                                    <i className="fi fi-rr-heart"></i>
                                                                  </Link>
                                                                </div>
                                                               
                                                              </div>
                                                              <div className="tpcourse__content-2">
                                                                <div className="tpcourse__category mb-10">
                                                                  <ul className="tpcourse__price-list d-flex align-items-center">
                                                                    <li>
                                                                      <Link
                                                                        className={item.ct_color}
                                                                        href={`/ad-details?id=${item._id}`}
                                                                      >
                                                                        {item.Category}
                                                                      </Link>
                                                                    </li>
                                                                    <li>
                                                                      <Link
                                                                        className={item.cn_color}
                                                                        href={`/ad-details?id=${item._id}`}
                                                                      >
                                                                        {item.Brand}
                                                                      </Link>
                                                                    </li>
                                                                  </ul>
                                                                </div>
                                                                <div className="tpcourse__ava-title mb-15">
                                                                  <h4 className="tpcourse__title">
                                                                    <Link href={`/ad-details?id=${item._id}`}>{item.Adname}</Link>
                                                                  </h4>
                                                                </div>
                                                                <div className="tpcourse__meta tpcourse__meta-gap pb-15 mb-15">
                                                                  <ul className="d-flex align-items-center">
                                                                    <li>
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
                                                                    <h5 className="price-title">${item.Adprice}</h5>
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
              {user._id?  <Link className="tp-btn" href={'/ad-list'}>
                  Browse All Ads
                </Link>:  <Link className="tp-btn" href={'/sign-in'}>
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
