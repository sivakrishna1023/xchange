'use client'
import Count from "@/src/common/count.jsx";
import our_ads_data from "@/src/data/our-ads-data.js";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../Clients/clientcomponents";
import Script from "next/script";
import { useRouter } from "next/navigation";

const SellerPortfolioArea = () => {
  const { user } = useContext(Context);
  const createdAtDate = new Date(user.createdAt);
  const year = createdAtDate.getFullYear();
  const router = useRouter();
  var imagelink = `https://bestprofilepictures.com/wp-content/uploads/2021/08/Amazing-Profile-Picture-for-Facebook.jpg`;
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
  const handlelogout = async () => {
    localStorage.setItem('token', null);
    router.replace('/');
  }
  const gettasks = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await fetch("/api/ads/Myads", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      const data = await res.json();
      if (data.success) {
        settasks(data.ads);
      }
    } catch (error) {
    }
  }
  const handle_delete = async (id) => {
       try{
        const token = localStorage.getItem('token');
        const res = await fetch("/api/ads/delete_ad", {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }, 
          body: JSON.stringify({
            id,
          })
        })
        const data = await res.json();
        
        if (data.success) {
          window.location.reload();
        }
       }catch(error){
        console.log(error);
       }
  }
  
  const gettasks2 = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await fetch("/api/ads/mydraftads", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      })
      const data = await res.json();
      
      if (data.success) {
        settasks2(data.ads);
      }
    } catch (error) {
       console.log(error);
    }
  }
  const [tasks, settasks] = useState('');
  const [tasks2,settasks2]=useState('');
  const [tasks3,settasks3]=useState('');
  useEffect(() => {
    gettasks();
    gettasks2();
  }, [])
 
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
                <div >
                  <div className="isntruc-side-thumb mb-30 " style={{ padding: "0 3rem" }}>
                    {user && user.avatar && user.avatar ? <img style={{ borderRadius: "50%" }} src={user.avatar} alt="instructor-thumb" /> : <img
                      src={imagelink}
                      style={{ borderRadius: "50%" }}
                      alt="instructor-thumb"
                    />}
                  </div>
                  <div className="isntruc-side-content text-center">
                    <h4 className="side-instructor-title mb-15" style={{ fontSize: "35px" }}>
                      {user.firstname} {user.lastname && <span>{user.lastname}</span>}
                    </h4>
                    <p>
                      Member Since {year}
                    </p>
                  </div>
                </div>
                <div className="instructor-sidebar-widget">
  
                  <div className="cd-information instruc-profile-info mb-35">
                    <ul>
                      {user.phonenumber && <div> <li> <i className="fi fi-rr-phone-call"></i>{" "}
                        <label>Phone</label> <span>user.phonenumber</span> </li> </div>}

                      <li>
                        <i className="fi fi-rr-envelope"></i>{" "}
                        <label style={{ fontSize: "15px" }}>Email : </label> <span style={{ fontSize: "17px" }}> {user.email} </span>
                      </li>
                      
                    </ul>
                  </div>
                  <div className="c-details-social">
                    {
                      user.Facebook && <Link href={`${user.Facebook}`}>
                        <i className="fa-brands fa-facebook-f"></i>
                      </Link>
                    }
                    {
                      user.Twitter && <Link href={`${user.Twitter}`}>
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                    }
                    {
                      user.Instagram && <Link href={`${user.Instagram}`}>
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                    }
                    {
                      user.Youtube && <Link href={`${user.Youtube}`}>
                        <i className="fa-brands fa-youtube"></i>
                      </Link>
                    }
                    <br />
                    <div style={{display:"flex", flexDirection:"column", justifyContent:"center", paddingLeft:"2rem"}}>
                      <p style={{color:"black", fontWeight:"600", paddingBottom:"1rem", fontSize:"17px"}}> <i className="fa fa-briefcase" style={{marginRight:"1rem"}}></i>  <Link href={'/ad-grid'}>My Ads</Link>   </p>
                      <p style={{color:"black", fontWeight:"600", paddingBottom:"1rem", fontSize:"17px"}}>   <i class="far fa-file draft-icon"  style={{marginRight:"1rem"}}  ></i>  <Link href={'/ad-mydraft'}  > My Draft   </Link>   </p>  
                      <p style={{color:"black", fontWeight:"600", paddingBottom:"1rem", fontSize:"17px"}}> <i className="fa fa-heart" style={{marginRight:"1rem"}}></i> <Link href={'/ad-mydraft'}  > My Wishlist   </Link>   </p>
                      <p style={{color:"black", fontWeight:"600", paddingBottom:"1rem", fontSize:"17px"}}><i className="fa fa-phone" style={{marginRight:"1rem"}}></i>  <Link href={'/contact'}  >Help & Support</Link>    </p>
                      <p style={{color:"black", fontWeight:"600", paddingBottom:"1rem", fontSize:"17px"}}><i className="fa fa-cog" style={{marginRight:"1rem"}}></i>  <Link href={'/seller-profile-update'}   >Settings</Link>  </p>
                      <p style={{color:"black", fontWeight:"600", paddingBottom:"1rem", fontSize:"17px"}}>  <i class="fas fa-sign-out-alt logout-icon" style={{marginRight:"1rem"}}   ></i>  <button onClick={handlelogout}> <b>Log out</b>  </button></p>  
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="instructor-main-content ml-30 mb-40">
                {user.biography && <div className="instruc-biography mb-50">
                  <h4 className="ins-bio-title mb-30">Biography</h4>
                  {user.biography}
                  
                </div>}
                <div className="instruc-statics mb-20">
                
                </div>
                <div className="instructor-tp-course mb-80">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="instruc-biography">
                        <h2 className="ins-bio-title mb-35" style={{textAlign:"center"}}>
                        <i className="fa fa-briefcase" style={{marginRight:"1rem"}}></i>
                          My Ads</h2>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    {tasks && tasks.slice(0, 4).map((item, i) => (
                      <div key={i} className="col-xl-6 col-lg-12 col-md-6">
                        <div className="tpcourse mb-40">
                          <div className="tpcourse__thumb p-relative w-img fix" style={{ width: "100%", height: "200px", overflow: "hidden" }}>
                            <Link href={`/ad-details?id=${item._id}`}>
                              {item && item.images && item.images[0] ? <img style={{ width: "100%", objectFit: "contain", height: "100%" }} src={item.images[0]} alt="course-thumb" /> : <img style={{ width: "100%", objectFit: "contain", height: "100%" }} src={'/assets/img/icon/c-meta-01.png'} alt="course-thumb" />}
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
                                    href="/course-details"
                                  >
                                    {item.Category}
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className={item.cn_color}
                                    href="/course-details"
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
                                <h5 className="price-title"><i class="fas fa-inr"  style={{marginRight:"0.4rem"}}     ></i>{item.Adprice}</h5>
                              </div>
                              
                            </div>
                            <Link href={`/ad-update?id=${item._id}`}>Update</Link> <br />
                            <button onClick={() => {handle_delete(item._id)}}>Delete</button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                  <button style={{fontWeight: "600", fontSize: "17px", backgroundColor: "#19ae51", padding: "0.5rem 1rem", borderRadius: "5px", color: "white", cursor:"pointer"}}> <Link href={'/ad-grid'}  >Get My All Ads</Link>   </button>
                  </div>
                </div>

                <div className="instructor-tp-course mb-80">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="instruc-biography">
                        <h2 className="ins-bio-title mb-35" style={{textAlign:"center"}}>
                        <i className="fa fa-briefcase" style={{marginRight:"1rem"}}></i>
                          My Draft Ads</h2>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    {tasks2 && tasks2.slice(0, 4).map((item, i) => (
                      <div key={i} className="col-xl-6 col-lg-12 col-md-6">
                        <div className="tpcourse mb-40">
                          <div className="tpcourse__thumb p-relative w-img fix" style={{ width: "100%", height: "200px", overflow: "hidden" }}>
                            <Link href={`/ad-details?id=${item._id}`}>
                              {item && item.images && item.images[0] ? <img style={{ width: "100%", objectFit: "contain", height: "100%" }} src={item.images[0]} alt="course-thumb" /> : <img style={{ width: "100%", objectFit: "contain", height: "100%" }} src={'/assets/img/icon/c-meta-01.png'} alt="course-thumb" />}
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
                                    href="/course-details"
                                  >
                                    {item.Category}
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className={item.cn_color}
                                    href="/course-details"
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
                                  <span><TimePassed createdAt={item.createdAt} /> </span>
                                </li>
                               
                              </ul>
                            </div>
                            <div className="tpcourse__rating d-flex align-items-center justify-content-between">
                              <div className="tpcourse__rating-icon">
                                {tasks.Model}
                              
                              </div>
                              <div className="tpcourse__pricing">
                                <h5 className="price-title"><i class="fas fa-inr"  style={{marginRight:"0.4rem"}}     ></i>{item.Adprice}</h5>
                              </div>
                            </div>
                            <div className="flex justify-between">
                                <div>
                                  <Link href={`/ad-update?id=${item._id}`}>Update</Link>
                                </div>
                                <div>
                                  <button onClick={() => {handle_delete(item._id)}}>Delete</button>
                                </div>
                              </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                  <button style={{fontWeight: "600", fontSize: "17px", backgroundColor: "#19ae51", padding: "0.5rem 1rem", borderRadius: "5px", color: "white", cursor:"pointer"}}> <Link href={'/ad-mydraft'}  >Get My Draft's</Link>   </button>
                  </div>
                </div>


                <div className="instructor-tp-course">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="instruc-biography">
                        <h2 className="ins-bio-title mb-35" style={{textAlign:"center"}}>
                        <i className="fa fa-heart" style={{marginRight:"1rem"}}></i>
                          My Wishlist</h2>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    {tasks3 && tasks3.slice(0, 4).map((item, i) => (
                      <div key={i} className="col-xl-6 col-lg-12 col-md-6">
                        <div className="tpcourse mb-40">
                          <div className="tpcourse__thumb p-relative w-img fix">
                            <Link href={`/ad-details?id=${item._id}`} style={{ width: "100%", height: "200px", overflow: "hidden" }}>
                              {item && item.images && item.images[0] ? <img style={{ width: "100%", objectFit: "contain", height: "100%" }} src={item.images[0]} alt="course-thumb" /> : <img style={{ width: "100%", objectFit: "contain", height: "100%" }} src={'/assets/img/icon/c-meta-01.png'} alt="course-thumb" />}
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
                                    href="/course-details"
                                  >
                                    {item.Category}
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className={item.cn_color}
                                    href="/course-details"
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
                                  <span><TimePassed createdAt={item.createdAt} /></span>
                                </li>
                               
                              </ul>
                            </div>
                            <div className="tpcourse__rating d-flex align-items-center justify-content-between">
                              <div className="tpcourse__rating-icon">
                                {tasks.Model}
                                
                              </div>
                              <div className="tpcourse__pricing">
                                <h5 className="price-title"><i class="fas fa-inr"  style={{marginRight:"0.4rem"}}     ></i>{item.Adprice}</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                  <button style={{fontWeight: "600", fontSize: "17px", backgroundColor: "#19ae51", padding: "0.5rem 1rem", borderRadius: "5px", color: "white", cursor:"pointer"}}> <Link href={'/ad-grid'}  >Get Ads</Link>   </button>
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

export default SellerPortfolioArea;
