'use client'
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import { Popover, PopoverTrigger, PopoverContent, Button } from "@nextui-org/react";

// instructor_info
const seller_info = [
  {
    id: 1,
    img: "/assets/img/bg/instructor-bg-01.jpg",
    name: "Devon Lane",
    number_of_items_sold: "100",
  },
  {
    id: 2,
    img: "/assets/img/bg/instructor-bg-02.jpg",
    name: "Jane Cooper",
    number_of_items_sold: "57",
  },
  {
    id: 3,
    img: "/assets/img/bg/instructor-bg-03.jpg",
    name: "Courtney Henry",
    number_of_items_sold: "86",
  },
  {
    id: 4,
    img: "/assets/img/bg/instructor-bg-04.jpg",
    name: "Devon Lane",
    number_of_items_sold: "99",
  },
];

// social_links
const social_links = [
  {
    link: "http://facebook.com",
    target: "_blank",
    icon: "fab fa-facebook-f",
    name: "Facebook",
  },
  {
    link: "http://twitter.com",
    target: "_blank",
    icon: "fab fa-twitter",
    name: "Twitter",
  },
  {
    link: "https://www.instagram.com/",
    target: "_blank",
    icon: "fab fa-instagram",
    name: "Instagram",
  },
  {
    link: "https://www.youtube.com/",
    target: "_blank",
    icon: "fab fa-youtube",
    name: "Youtube",
  },
];

// setting
const setting = {
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  // autoplay: true,
  arrows: false,
  dots: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const SellerArea = ({ style_2 }) => {
  const [loading, setloading] = useState(false);
  const DisplayMonthAndYear = ({ createdAt }) => {
    const displayMonthAndYear = (createdAt) => {
      const date = new Date(createdAt);
      const months = [
        'Jan', 'Feb', 'March', 'April', 'May', 'Jun', 'July',
        'Aug', 'Sepr', 'Oct', 'Nov', 'Dec'
      ];

      const month = months[date.getMonth()];
      const year = date.getFullYear();

      return `${month} ${year}`;
    };

    const formattedDate = displayMonthAndYear(createdAt);

    return (
      <span style={{ color: "grey" }}>{formattedDate}</span>
    );
  };
  const [user, setUser] = useState('');
  var imagelink = 'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg';
  const sliderRef = useRef(null);
  const getuser = async () => {
    setloading(true);
    try {
      const res = await fetch("/api/users/Allusers", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      })
      const data = await res.json();
      if (data.success) {
        //  console.log(data);
        setUser(data.users);
      }
      setloading(false);
    } catch (error) {
      setloading(false);
    }
  }
  useEffect(() => {
    getuser();
  }, [])
  if (loading === true) {
    return (
      <>
        <center> <h3>Loading...</h3>   </center>
      </>
    )
  }
  return (
    <>
      <section
        className="instructor-area pt-10   pb-110 wow fadeInUp"
        data-wow-duration="1s"
        data-wow-delay=".4s"
        style={{ paddingTop: "40px" }}
      >
        <div className="container">
          <div className="row">
            {style_2 ? (
              <div className="col-lg-12">
                <div className="section-title mb-35 text-center">
                  <span className="tp-sub-title-box mb-15">Sellers</span>
                  <h2 className="tp-section-title">Our Expert Sellers</h2>
                </div>
              </div>
            ) : (
              <>
                <div className="col-xl-6 col-lg-8 col-md-7 col-12">
                  <div className="section-title mb-10 lg:mb-65 ">
                    <h2 className="tp-section-title mb-20">
                      Our Trusted Sellers
                    </h2>
                  </div>
                </div>

                <div className="col-xl-6 col-lg-4 col-md-5 col-6">
                  <div className="tp-instruc-arrow d-flex justify-content-md-end">
                    <button
                      type="button"
                      onClick={() => sliderRef.current.slickPrev()}
                      className="slick-prev slick-arrow"
                    >
                      <i className="arrow_carrot-left"></i>
                    </button>
                    <button
                      type="button"
                      onClick={() => sliderRef.current.slickNext()}
                      className="slick-next slick-arrow"
                    >
                      <i className="arrow_carrot-right"></i>
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="intruc-active mb-15 tp-slide-space">
            <Slider {...setting} ref={sliderRef}>
              {user  && user.slice(0, 5).map((item) => (
                <div key={item.id} className="tp-instruc-item">
                  <div className="tp-instructor text-center p-relative mb-30" style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                    <div className="tp-instructor__thumb mb-25" style={{ width: "200px", height: "200px", overflow: "hidden", borderRadius: "100%" }}>
                      {item.avatar ? <img
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        src={item.avatar}
                        alt="instructor-thumb"
                      /> : <img
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        src={imagelink}
                        alt="instructor"
                      />}
                    </div>
                    <div className="tp-instructor__content">
                      <h4 className="tp-instructor__title mb-20">
                        <Link href="/instructor-profile">{item.firstname}</Link>
                      </h4>
                      <div style={{ textTransform: "capitalize", marginBottom: "10px", color: "green" }}>Seller Since: <span style={{ marginLeft: "5px" }}><DisplayMonthAndYear createdAt={item.createdAt} /></span></div>
                      <Popover placement="right">
                        <PopoverTrigger>
                          <span style={{ textTransform: "capitalize", padding: "8px 50px", borderRadius: "10px", backgroundColor: "#6b4ff7", color: "white" }}>Trust Index<span style={{ marginLeft: "5px", color: "white" }}></span></span>
                        </PopoverTrigger>
                        <PopoverContent>
                          <div className="px-1 py-2">
                            <div className="text-small font-bold" style={{ border: "2px solid black", borderRadius: "5px", padding: "10px", backgroundColor: "white" }}>This Feature is Coming Soon</div>
                          </div>
                        </PopoverContent>
                      </Popover>
                      <br />
                      <Link href={`/other-profile?id=${item._id}`}><div style={{ padding: "10px", backgroundColor: "#19ae50", borderRadius: "10px", color: "white", fontWeight: "bolder", marginTop: "1rem", cursor: "pointer" }}>View Seller Profile</div></Link>
                      <div className="tp-instructor__social">
                        <ul>
                          {
                            item.Facebook && <li >
                              <a target={"_blank"} href={item.Facebook}>
                                <i className={"fab fa-facebook-f"}></i>
                              </a>
                            </li>
                          }
                          {
                            item.Youtube && <li >
                              <a target={"_blank"} href={item.Youtube}>
                                <i className={"fab fa-twitter"}></i>
                              </a>
                            </li>
                          }
                          {
                            item.Instagram && <li >
                              <a target={"_blank"} href={item.Instagram}>
                                <i className={"fab fa-instagram"}></i>
                              </a>
                            </li>
                          }
                          {
                            item.Twitter && <li >
                              <a target={"_blank"} href={item.Twitter}>
                                <i className={"fab fa-youtube"}></i>
                              </a>
                            </li>
                          }
                          {/* {social_links.map((link, i) => (
                            <li key={i}>
                              <a target={link.target} href={link.link}>
                                <i className={link.icon}></i>
                              </a>
                            </li>
                          ))} */}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          {/* <div className="row">
            <div className="col-lg-12">
              <div className="instructor-btn text-center">
                <Link className="tp-btn" href="/seller">
                  All Sellers
                </Link>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default SellerArea;
