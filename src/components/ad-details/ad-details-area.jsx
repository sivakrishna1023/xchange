'use client'
import review_content from '@/src/data/review-data';
import VideoPopup from '@/src/modals/video-popup';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Slider from 'react-slick';
import { FaWhatsapp } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react';

const AdDetailsArea = () => {
   const [isVideoOpen, setIsVideoOpen] = useState(false);
   const { query } = useRouter();
   const { asPath } = useRouter();
   const [ad, setad] = useState();
   const [aduser, setaduser] = useState();
   const router = useRouter();
   const [loading,setloading]=useState(false);
   var imagelink =  `https://res.cloudinary.com/dsoonimzu/image/upload/v1698428270/Ads/mi1eqaaimoekc6z2tuqn.jpg`;
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
   setTimeout(() => {
      if(localStorage.getItem('token')==='null'){
         window.location.href='/sign-in';
      }
    }, 1000);
   const getdetails = async () => {
      // const token = localStorage.getItem('token');
      // if (token === ) {
      //    router.replace('/sign-in');
      // }
      setloading(true);
      try {
         const id = new URLSearchParams(asPath.split('?')[1]).get('id');
         const token = localStorage.getItem('token');
         const res = await fetch(`/api/ads/single/id=${id}`, {
            method: 'GET',
            headers: {
               'Content-Type': 'application/json',
               'Authorization': `Bearer ${token}`
            },
         })
         const data = await res.json();
         if (data.success) {
            setad(data.ad);
            const user_id = data.ad.user;
            try {
               const token = localStorage.getItem('token');
               const res = await fetch(`/api/users/single/id=${user_id}`, {
                  method: 'GET',
                  headers: {
                     'Content-Type': 'application/json',
                     'Authorization': `Bearer ${token}`
                  },
               })
               const data = await res.json();
               if (data.success) {
                  setaduser(data.user);
               }
            } catch (error) {
               console.log(error);
            }
         }
         setloading(false);
      } catch (error) {
         console.log(error);
         setloading(false);
      }
   }
   useEffect(() => {
      getdetails();
   }, [])

   const CustomPrevArrow = (props) => (
      <div {...props} className="slick-arrow custom-prev-arrow" style={{ position: "absolute", top: "50%", left: "0", fontSize: "2rem", padding: "0 1rem", zIndex: "1", color: "black",}}>
         <IoIosArrowBack />
      </div>
   );

   const CustomNextArrow = (props) => (
      <div {...props} className="slick-arrow custom-next-arrow" style={{ position: "absolute", top: "50%", right: "0", fontSize: "2rem", padding: "0 1rem", zIndex: "1", color: "black" }}>
         <IoIosArrowForward />
      </div>
   );
   const settings = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: <CustomPrevArrow/>,
      nextArrow: <CustomNextArrow/>,
   };
   if(loading===true){
      return(
         <> 
         <center> <h3>Please wait...</h3>   </center>
         </>
       )
   }
   return (
      <>
         <>
            {
               ad && aduser && <div> <section className="c-details-area pt-120 pb-50 wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".2s">
                  <div className="container">
                     <div className="row">
                        <div className="col-lg-8 col-md-12">
                           <div className="c-details-wrapper mr-25">
                              <div className="c-details-thumb p-relative mb-40" style={{ width: "100%", height: "100%", overflow: "hidden" }}>
                                 {ad && ad.images && ad.images[0] ? (
                                    <Slider {...settings}>
                                       {ad.images.map((image, index) => (
                                          <div key={index} >
                                             <img style={{ width: "100%", height: "100%", objectFit: "contain" }} src={image} alt={`course-thumb-${index}`} />
                                          </div>
                                       ))}
                                    </Slider>
                                 ) : (
                                    <img src={'/assets/img/icon/c-meta-01.png'} alt="course-thumb" />
                                 )}
                                 <div className="c-details-ava d-md-flex align-items-center">
                                    {/* <img src="/assets/img/course/c-details-ava-01.png" alt="avata" /> */}
                                    {/* <span>By <a href="#">{aduser.firstname}</a></span> */}
                                 </div>
                              </div>
                              <div className="course-details-content mb-45">
                                 <div className="tpcourse__category mb-15">
                                    <ul className="tpcourse__price-list d-flex align-items-center">
                                       <li><a className="c-color-green" href="#">Brand : {ad.Brand}</a></li>
                                       <li><a className="c-color-yellow" href="#">Model : {ad.Model}</a></li>
                                    </ul>
                                 </div>
                                 <div className="tpcourse__ava-title mb-25">
                                    <h4 className="c-details-title"><a href="#">{ad.Adname}</a></h4>
                                 </div>
                                 <div className="tpcourse__meta course-details-list">
                                    <ul className="d-flex align-items-center">
                                       {/* <li>
                                    <div className="rating-gold d-flex align-items-center">
                                       <p>4.7</p>
                                       <i className="fi fi-ss-star"></i>
                                       <i className="fi fi-ss-star"></i>
                                       <i className="fi fi-ss-star"></i>
                                       <i className="fi fi-ss-star"></i>
                                       <i className="fi fi-rs-star"></i>
                                       <span>(125)</span>
                                    </div>
                                 </li> */}
                                       <li><img src="/assets/img/icon/c-meta-01.png" alt="meta-icon" /> <span><TimePassed createdAt={ad.createdAt} /></span></li>
                                       {/* <li><img src="/assets/img/icon/c-meta-02.png" alt="meta-icon" /> <span>20 Requests</span></li> */}
                                    </ul>
                                 </div>
                              </div>
                              <div className="c-details-about mb-40">
                                 <h5 className="tp-c-details-title mb-20">About This Ad</h5>
                                 <p>
                                    {ad.Description}
                                 </p>
                              </div>
                              <div className="c-details-about mb-40">
                                 <h5 className="tp-c-details-title mb-20">Features</h5>
                                 <p>
                                    {ad.Features}
                                 </p>
                              </div>

                              <div className="c-details-review pb-15">
                                 <div className="c-review-title-wrapper">
                                    {/* <h5 className="c-review-title mb-40">Review</h5> */}
                                 </div>
                                 <div className="course-reviewer-item-wrapper">


                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                           <div className="c-details-sidebar">
                              <div className="c-video-thumb p-relative mb-25">

                                 <div className="cor-details-instructor" style={{ width: "100%", marginBottom: "1rem", padding: "1rem" }} >
                                    <h6 className="tp-c-details-title mb-40">Seller</h6>
                                    <div className="course-instructor-details d-flex f-wrap align-items-center" style={{ display: "flex", flexDirection: "row" }}>
                                       <div className="course-avata mr-30 mb-20">
                                          {aduser.avatar ? <img style={{ borderRadius: "100%", width: "110px", height: "100px" }} src={aduser.avatar} alt="instructor-thumb" /> : <img
                                             src={imagelink}
                                             alt="instructor-thumb"
                                          />}                      </div>
                                       <div className="course-avatar-details">
                                          <h5 className="c-avata-title">{aduser.firstname}   {aduser.lastname}</h5>
                                          <p>{aduser.email}</p>
                                          {/* <div className="c-details-stu">
                                          <ul>
                                             <li className="d-flex align-items-center"><img src="/assets/img/icon/c-details-02.png" alt="meta-icon" /> <span>2,35,687 Followers</span></li>
                                          </ul>
                                       </div> */}
                                       </div>
                                    </div>
                                 </div>

                              </div>
                              <div className="course-details-widget">
                                 <div className="cd-video-price">
                                    <h3 className="pricing-video text-center mb-15"><i class="fas fa-inr" style={{ marginRight: "0.4rem" }} ></i>{ad.Adprice}</h3>
                                    <div className="cd-pricing-btn text-center mb-30">

                                       <input style={{ width: "100%", marginBottom: "1rem", padding: "1rem" }} type="text" placeholder='Write Review Here' />
                                       <Link className="tp-vp-btn-green" href="/course-details">Review</Link>
                                    </div>
                                 </div>

                                 <div className="c-details-social">
                                    <h5 className="cd-social-title mb-25">Share Now:</h5>
                                    <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                    <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                    <a href="#"><i className="fa-brands fa-youtube"></i></a>
                                 </div>
                                 <div style={{ border: "2px solid #777C90", padding: "10px 20px", margin: "20px 0", borderRadius: "5px", color: "#777C90" }}>Posted At : {ad.Address}</div>
                                 <div className="cd-pricing-btn text-center mb-30">
                                 <Popover placement="right">
                        <PopoverTrigger>
                                    <div className="tp-vp-btn-green">Chat With Seller</div>
                                    </PopoverTrigger>
                        <PopoverContent>
                          <div className="px-1 py-2">
                            <div className="text-small font-bold" style={{ border: "2px solid black", borderRadius: "5px", padding: "10px", backgroundColor:"white" }}>This Feature is Coming Soon</div>
                          </div>
                        </PopoverContent>
                      </Popover>
                                 </div>
                                 <div style={{display:"flex", justifyContent:"space-around"}}>
                                 <div className="cd-pricing-btn text-center" style={{width:"40%"}}>
                                    <Link className="tp-vp-btn-green" style={{padding:"7px", fontSize:"15px"}} href={`https://wa.me/+91${ad.phone}`}>Chat Through Whatsapp  <FaWhatsapp size={30} /></Link>
                                 </div>
                                 <div className="cd-pricing-btn text-center" style={{width:"40%"}}>
                                    <Link className="tp-vp-btn-green" style={{padding:"7px", fontSize:"15px"}} href={`tel:+91${ad.phone}`}>Call the Seller <IoIosCall size={30}/></Link>
                                 </div>
                                                                     
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </section>


                  <VideoPopup
                     isVideoOpen={isVideoOpen}
                     setIsVideoOpen={setIsVideoOpen}
                     videoId={"W-bgMEvrd2E"}
                  />

               </div>
            }
         </>
      </>
   );
};

export default AdDetailsArea;