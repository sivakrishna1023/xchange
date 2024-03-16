'use client'
import seller_info_data from "@/src/data/seller-data";
import Link from "next/link";
import React, { useState, useEffect } from "react";


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

const SellerArea = () => {
  const [user, setUser] = useState('');
  var imagelink = `https://bestprofilepictures.com/wp-content/uploads/2021/08/Amazing-Profile-Picture-for-Facebook.jpg`;
  const getuser = async () => {
    try {
      const res = await fetch("/api/users/Allusers", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      })
      const data = await res.json();
      if (data.success) {
        console.log(data);
        setUser(data.users);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getuser();
  }, [])
  return (
    <>
      <section className="instructor-area pb-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title mb-10 lg:mb-65  text-center">
                <span className="tp-sub-title-box mb-15 mt-60">Members</span>
                <h2 className="tp-section-title"> All Sellers</h2>
              </div>
            </div>
          </div>
          <div className="row">

            {user && user.map((item) => (
              <div key={item._id} className="col-lg-4 col-md-6 col-12">

                <div className="tp-instructor text-center p-relative mb-30">
                  <div className="tp-instructor__thumb mb-25">
                    {item.avatar ? <img
                      src={item.avatar}
                      alt="instructor-thumb"
                    /> : <img
                      src={imagelink}
                      alt="instructor-thumb"
                    />}
                  </div>
                  <div className="tp-instructor__content">
                    <h4 className="tp-instructor__title mb-20">
                      <Link href="/instructor-profile">{item.firstname}</Link>
                    </h4>
                    <span>Seller Since: {item.createdAt}</span>
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
          </div>
          {/* <div className="row">
            <div className="col-lg-12">
              <div className="instructor-btn text-center mt-20">
                <Link className="tp-btn" href="/instructor">
                  All Instructor
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
