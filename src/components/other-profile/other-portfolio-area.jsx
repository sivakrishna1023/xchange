'use client'
import Count from "@/src/common/count.jsx";
import our_ads_data from "@/src/data/our-ads-data.js";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { MdReportGmailerrorred } from "react-icons/md"
import { Context } from "../Clients/clientcomponents";
import { FaShareAlt } from "react-icons/fa";
import { Popover, PopoverTrigger, PopoverContent, Button } from "@nextui-org/react";
import Script from "next/script";
import { useRouter } from "next/router";

const OtherPortfolioArea = () => {
  const { user } = useContext(Context);
  const [seller, setseller] = useState([]);
  const [tasks, settasks] = useState([]);
  const [loading, setloading] = useState(false);
  const date = new Date(seller.createdAt);
  const year = date.getFullYear();
  const router = useRouter();
  var imagelink = 'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg';
  function TimePassed({ createdAt }) {
    const currentTime = new Date();
    const createdDate = new Date(createdAt);

    if (isNaN(createdDate)) {
      return <span>Error: Invalid Date</span>;
    }

    const timeDifference = currentTime.getTime() - createdDate.getTime();
    const minutesPassed = Math.floor(timeDifference / (1000 * 60));
    const hoursPassed = Math.floor(timeDifference / (1000 * 60 * 60));
    const daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    if (minutesPassed < 60) {
      return <span>{minutesPassed} minutes ago</span>;
    } else if (hoursPassed < 24) {
      return <span>{hoursPassed} hours ago</span>;
    } else {
      return <span>{daysPassed} days ago</span>;
    }
  }
  const gettasks = async () => {
    setloading(true);
    try {
      const token = localStorage.getItem('token');
      const queryParams = router.query;
      const value = queryParams.id;
      const res = await fetch("/api/users/otheruser", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          id: value,
        })
      })
      const data = await res.json();
      if (data.success) {
        setseller(data.seller);
        settasks(data.ads);
      }
    } catch (error) {
      console.log(error);
    }
    setloading(false);
  }
  useEffect(() => {
    gettasks();
  }, [])
  if (loading === true) {
    return (
      <center>
        <h3> Please Wait...</h3>
      </center>
    )
  }
  return (
    <>
      <section
        className="instructor-portfolio pt-10 mb-10 wow fadeInUp"
        data-wow-duration=".8s"
        data-wow-delay=".2s"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-5">
              <div className="instruc-sidebar mb-40">
                <div >
                  <div className="isntruc-side-thumb mb-30 " style={{ padding: "0 3rem" }}>
                    {seller && seller.avatar && seller.avatar ? <img style={{ borderRadius: "50%" }} src={seller.avatar} alt="instructor-thumb" /> : <img
                      src={imagelink}
                      style={{ borderRadius: "50%" }}
                      alt="instructor-thumb"
                    />}
                  </div>
                  <div className="isntruc-side-content text-center">
                    <h4 className="side-instructor-title mb-15" style={{ fontSize: "35px" }}>
                      {seller.firstname} {seller.lastname && <span>{seller.lastname}</span>}
                    </h4>
                    <p style={{ margin: "0" }}>
                      Member Since {year}
                    </p>
                    <p style={{ margin: "0" }}>
                      {
                        seller.Location && <>
                          <p> Place: {seller.Location}</p>
                        </>
                      }
                    </p>
                    <div style={{ display: "flex", width: "100%", justifyContent: "space-evenly", marginBottom: "1rem" }}>
                      <Popover placement="right">
                        <PopoverTrigger>
                          <div style={{ padding: "8px 50px", backgroundColor: "rgb(107, 79, 247)", borderRadius: "10px", color: "white", fontWeight: "bolder", marginTop: "1rem", cursor: "pointer", display: "flex", justifyContent: "center", alignItems: "center" }}>TRUST INDEX</div>
                        </PopoverTrigger>
                        <PopoverContent>
                          <div className="px-1 py-2">
                            <div className="text-small font-bold" style={{ border: "2px solid black", borderRadius: "5px", padding: "10px", backgroundColor: "white" }}>This Feature is Coming Soon</div>
                          </div>
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div style={{ display: "flex", width: "100%", justifyContent: "space-evenly", flexWrap: "wrap" }}>
                      <Link href="#"><div style={{ padding: "10px", margin: "1px", backgroundColor: "#19ae50", borderRadius: "10px", color: "white", fontWeight: "bolder", marginTop: "1rem", cursor: "pointer", display: "flex", justifyContent: "center", alignItems: "center", width: "170px" }}><FaShareAlt size={15} /> &nbsp; Share Profile</div></Link>
                      <Popover placement="down">
                        <PopoverTrigger>
                          <div style={{ padding: "10px", margin: "1px", backgroundColor: "#19ae50", borderRadius: "10px", color: "white", fontWeight: "bolder", marginTop: "1rem", cursor: "pointer", display: "flex", justifyContent: "center", alignItems: "center", width: "170px" }}><MdReportGmailerrorred size={20} /> &nbsp; Report User</div>
                        </PopoverTrigger>
                        <PopoverContent>
                          <div className="px-1 py-2">
                            <a href="mailto:xchange.hyderabad@gmail.com?subject=Report%20-%20False%20-%20Information"><div className="text-small font-bold" style={{ border: "1px solid gray", marginBottom: "2px", cursor: "pointer", borderRadius: "5px", padding: "10px", backgroundColor: "white" }}>False Information </div></a>
                            <a href="mailto:xchange.hyderabad@gmail.com?subject=Report%20-%20Fake%20-%20Product%20-%20or%20-%20Fraud"><div className="text-small font-bold" style={{ border: "1px solid gray", marginBottom: "2px", cursor: "pointer", borderRadius: "5px", padding: "10px", backgroundColor: "white" }}>Fake Product or Fraud </div> </a>
                            <a href="mailto:xchange.hyderabad@gmail.com?subject=Report%20-%20Promoting%20-%20Nudity"><div className="text-small font-bold" style={{ border: "1px solid gray", marginBottom: "2px", cursor: "pointer", borderRadius: "5px", padding: "10px", backgroundColor: "white" }}>Promoting nudity </div></a>
                            <a href="mailto:xchange.hyderabad@gmail.com?subject=Report%20-%20Spamming%20-%20or%20-%20Posting%20-%20Irrelevant"><div className="text-small font-bold" style={{ border: "1px solid gray", marginBottom: "2px", cursor: "pointer", borderRadius: "5px", padding: "10px", backgroundColor: "white" }}>Spamming or posting irrelevant </div></a>
                            <a href="mailto:xchange.hyderabad@gmail.com?subject=Report%20-%20Abusive%20-%20posts"><div className="text-small font-bold" style={{ border: "1px solid gray", marginBottom: "2px", cursor: "pointer", borderRadius: "5px", padding: "10px", backgroundColor: "white" }}>Abusive posts </div></a>
                            <a href="mailto:xchange.hyderabad@gmail.com?subject=Report%20-%20Fake%20-%20trust%20-%20index"><div className="text-small font-bold" style={{ border: "1px solid gray", marginBottom: "2px", cursor: "pointer", borderRadius: "5px", padding: "10px", backgroundColor: "white" }}>Fake trust index </div></a>
                            <a href="mailto:xchange.hyderabad@gmail.com?subject=Report%20-%20Identify%20-%20theft"><div className="text-small font-bold" style={{ border: "1px solid gray", marginBottom: "2px", cursor: "pointer", borderRadius: "5px", padding: "10px", backgroundColor: "white" }}>Identify theft </div> </a>
                            <a href="mailto:xchange.hyderabad@gmail.com?subject=Report%20-%20Violation%20-%20of%20-%20government%20-%20guidelines"><div className="text-small font-bold" style={{ border: "1px solid gray", marginBottom: "2px", cursor: "pointer", borderRadius: "5px", padding: "10px", backgroundColor: "white" }}>Violation of government guidelines  </div></a>
                            <a href="mailto:xchange.hyderabad@gmail.com?subject=Report%20-%20Illegal%20-%20activity"><div className="text-small font-bold" style={{ border: "1px solid gray", marginBottom: "2px", cursor: "pointer", borderRadius: "5px", padding: "10px", backgroundColor: "white" }}>Illegal activity </div></a>
                            <a href="mailto:xchange.hyderabad@gmail.com?subject=Report%20-%20I%20-%20don't%20-%20like%20-%20it"><div className="text-small font-bold" style={{ border: "1px solid gray", marginBottom: "2px", cursor: "pointer", borderRadius: "5px", padding: "10px", backgroundColor: "white" }}>I don't like it </div></a>
                            <a href="mailto:xchange.hyderabad@gmail.com?subject=Report%20-%20Something%20-%20else"><div className="text-small font-bold" style={{ border: "1px solid gray", marginBottom: "2px", cursor: "pointer", borderRadius: "5px", padding: "10px", backgroundColor: "white" }}>Something else </div></a>
                          </div>
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div style={{ display: "flex", width: "100%", justifyContent: "space-evenly", marginBottom: "1rem" }}>
                      <Popover placement="right">
                        <PopoverTrigger>
                          <div style={{ padding: "8px 50px", backgroundColor: "#e34c4ced", borderRadius: "10px", color: "white", fontWeight: "bolder", marginTop: "1rem", cursor: "pointer", display: "flex", justifyContent: "center", alignItems: "center" }}>Raise A Dispute</div>
                        </PopoverTrigger>
                        <PopoverContent>
                          <div className="px-1 py-2">
                            <div className="text-small font-bold" style={{ border: "2px solid black", borderRadius: "5px", padding: "10px", backgroundColor: "white" }}>This Feature is Coming Soon</div>
                          </div>
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                </div>
                <div className="instructor-sidebar-widget">

                  <div className="cd-information instruc-profile-info mb-35">
                    <ul>
                      {seller.phonenumber && <div> <li> <i className="fi fi-rr-phone-call"></i>{" "}
                        <label>Phone</label> <span>{seller.phonenumber}</span> </li> </div>}

                      <li>
                        <i className="fi fi-rr-envelope"></i>{" "}
                        <label style={{ fontSize: "15px" }}>Email : </label> <span style={{ fontSize: "17px" }}> {seller.email} </span>
                      </li>

                    </ul>
                  </div>
                  <div className="c-details-social">
                    {
                      seller.Facebook && <Link href={`${seller.Facebook}`}>
                        <i className="fa-brands fa-facebook-f"></i>
                      </Link>
                    }
                    {
                      seller.Twitter && <Link href={`${seller.Twitter}`}>
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                    }
                    {
                      seller.Instagram && <Link href={`${seller.Instagram}`}>
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                    }
                    {
                      seller.Youtube && <Link href={`${seller.Youtube}`}>
                        <i className="fa-brands fa-youtube"></i>
                      </Link>
                    }
                    <br />
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", paddingLeft: "2rem" }}>

                      <p style={{ color: "black", fontWeight: "600", paddingBottom: "1rem", fontSize: "17px" }}><i className="fa fa-phone" style={{ marginRight: "1rem" }}></i>  <Link href={'/contact'}  >Help & Support</Link>    </p>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="instructor-main-content ml-30 mb-40">
                {seller.biography && <div className="instruc-biography mb-50">
                  <h4 className="ins-bio-title mb-30">Biography</h4>
                  {seller.biography}

                </div>}
                <div className="instruc-statics mb-20">

                </div>
                <div className="instructor-tp-course mb-80">

                  <div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="instruc-biography">
                          <h2 className="ins-bio-title mb-35" style={{ textAlign: "center" }}>
                            <i className="fa fa-briefcase" style={{ marginRight: "1rem" }}></i>
                            Ads</h2>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      {tasks && tasks.length > 0 ? tasks.map((item, i) => (
                        <div key={i} className="col-xl-6 col-lg-12 col-md-6">
                          <div className="tpcourse mb-40">
                            <div className="tpcourse__thumb p-relative w-img fix" style={{ width: "100%", height: "200px", overflow: "hidden", border: "1px solid grey" }}>
                              <Link href={`/ad-details?id=${item._id}`}>
                                {item && item.images && item.images[0] ? <img style={{ width: "100%", objectFit: "contain", height: "100%" }} src={item.images[0]} alt="course-thumb" /> : <img style={{ width: "100%", objectFit: "contain", height: "100%" }} src={'https://demofree.sirv.com/nope-not-here.jpg'} alt="course-thumb" />}
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
                                  <Link href="/course-details">{item.Adname}</Link>
                                </h4>
                              </div>
                              <div className="tpcourse__meta tpcourse__meta-gap pb-15 mb-15">
                                <ul className="d-flex align-items-center">
                                  <li>
                                    <img
                                      src="/assets/img/icon/c-meta-01.png"
                                      alt="meta-icon"
                                    />
                                    <span> <TimePassed createdAt={item.createdAt} /> </span>
                                  </li>

                                </ul>
                              </div>
                              <div className="tpcourse__rating d-flex align-items-center justify-content-between">
                                <div className="tpcourse__rating-icon">
                                  {tasks.Model}

                                </div>
                                <div className="tpcourse__pricing">
                                  <h5 className="price-title"><i class="fas fa-inr" style={{ marginRight: "0.4rem" }}     ></i>{Number(item.Adprice).toLocaleString('en-IN')}</h5>
                                </div>

                              </div>

                            </div>
                          </div>
                        </div>
                      )) : <center> <h4>No Ads Published Yet</h4></center>}
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OtherPortfolioArea;

