'use client'
import ads_list_data from "@/src/data/ads-list-data";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const AdListArea = () => {
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
  const [req, setreq] = useState('');
  const gettasks = async () => {
    try {
      const res = await fetch("/api/ads/Allads", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await res.json();
      console.log(data);
      if (data.success) {
        console.log(data);
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
  const handle_newtaks = async () => {
    try {
      console.log("clicked", req);
      const res = await fetch("/api/ads/filter", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fill: req
        })
      });
      const data = await res.json();
      console.log(data);
      if (data.success) {
        console.log(data);
        settasks(data.ads);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <section
        className="course-list-area pb-120 wow fadeInUp"
        data-wow-duration=".8s"
        data-wow-delay=".2s"
      >
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-12">
              <div className="section-title mb-60 mb-60">
                <span className="tp-sub-title-box mb-15 mt-15">Our Ads</span>
                <h2 className="tp-section-title">Explore Popular Ads</h2>
              </div>
            </div>
          </div>
          <div className="row mb-20">
            {isMobile ? (
              <div className="accordion">
                <div className="accordion-item">
                  <div
                    className="accordion-title"
                    style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "1rem", cursor: "pointer" }}
                    onClick={() => setIsActive(!isActive)}>
                    <div style={{ marginRight: "1rem" }}>Show Categories</div>
                    <div style={{ fontSize: "30px" }}>{isActive ? '-' : '+'}</div>
                  </div>
                  {isActive && <div className="accordion-content">
                    <div className="col-lg-4 col-md-12 courser-list-width mb-60">
                      <div className="course-sidebar">
                        <div className="country-select">
                          <select onClick={(e) => { setreq(e.target.value) }}   >
                            <option value="select">Select</option>
                            <option value="Mobiles">Mobiles</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Vehicles">Vehicles</option>
                            <option value="Home & Living">Home & Living</option>
                            <option value="Essentials">Essentials</option>
                            <option value="Furniture">Furniture</option>
                            <option value="Properties">Properties</option>
                            <option value="Home Appliance">Home Appliance</option>
                          </select>
                        </div>

                        <div className="course-sidebar__widget mb-50">
                          <div className="course-sidebar__info c-info-list">
                            <h4 className="course-sidebar__title mb-35">
                              Mobiles
                            </h4>
                            <div className="form-check">
                              <input className="form-check-input" onClick={(e) => { setreq(e.target.value) }} type="checkbox" value="Mobiles" id="flexCheckDefault" />
                              <label className="form-check-label" htmlFor="flexCheckDefault" > Samsung </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" onClick={(e) => { setreq(e.target.value) }} type="checkbox" value="Mobiles" id="flexCheckDefault" />
                              <label className="form-check-label" htmlFor="flexCheckDefault" > Iphone  </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" onClick={(e) => { setreq(e.target.value) }} type="checkbox" value="Mobiles" id="flexCheckDefault" />
                              <label className="form-check-label" htmlFor="flexCheckDefault" > realme </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" onClick={(e) => { setreq(e.target.value) }} type="checkbox" value="Mobiles" id="flexCheckDefault" />
                              <label className="form-check-label" htmlFor="flexCheckDefault" > Other </label>
                            </div>
                          </div>
                        </div>






                        <div className="course-sidebar__widget mb-50">
                          <div className="course-sidebar__info c-info-list">
                            <h4 className="course-sidebar__title mb-35">
                              Electronics
                            </h4>
                            <div className="form-check">
                              <input className="form-check-input" onClick={(e) => { setreq(e.target.value) }} type="checkbox" value="Electronics" id="flexCheckDefault" />
                              <label className="form-check-label" htmlFor="flexCheckDefault" > Laptop </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" onClick={(e) => { setreq(e.target.value) }} type="checkbox" value="Electronics" id="flexCheckDefault" />
                              <label className="form-check-label" htmlFor="flexCheckDefault" > Power bank </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" onClick={(e) => { setreq(e.target.value) }} type="checkbox" value="Electronics" id="flexCheckDefault" />
                              <label className="form-check-label" htmlFor="flexCheckDefault" > Ear Phone's </label>


                            </div>
                            <div className="form-check">
                              <input className="form-check-input" onClick={(e) => { setreq(e.target.value) }} type="checkbox" value="Electronics" id="flexCheckDefault" />
                              <label className="form-check-label" htmlFor="flexCheckDefault" > Other </label>
                            </div>
                          </div>
                        </div>

                        <div className="course-sidebar__widget mb-50">
                          <div className="course-sidebar__info c-info-list">
                            <h4 className="course-sidebar__title mb-35">
                              Vehicles
                            </h4>
                            <div className="form-check">
                              <input className="form-check-input" onClick={(e) => { setreq(e.target.value) }} type="checkbox" value="Vehicles" id="flexCheckDefault" />
                              <label className="form-check-label" htmlFor="flexCheckDefault" > Audi </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" onClick={(e) => { setreq(e.target.value) }} type="checkbox" value="Vehicles" id="flexCheckDefault" />
                              <label className="form-check-label" htmlFor="flexCheckDefault" > lamborghini </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" onClick={(e) => { setreq(e.target.value) }} type="checkbox" value="Vehicles" id="flexCheckDefault" />
                              <label className="form-check-label" htmlFor="flexCheckDefault" > Nano  </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" onClick={(e) => { setreq(e.target.value) }} type="checkbox" value="Vehicles" id="flexCheckDefault" />
                              <label className="form-check-label" htmlFor="flexCheckDefault" > Other </label>
                            </div>
                          </div>
                        </div>

                        <div className="course-sidebar__widget mb-50">
                          <div className="course-sidebar__info c-info-list">
                            <h4 className="course-sidebar__title mb-35">
                              Home & Living
                            </h4>
                            <div className="form-check">
                              <input className="form-check-input" onClick={(e) => { setreq(e.target.value) }} type="checkbox" value="Home & Living" id="flexCheckDefault" />
                              <label className="form-check-label" htmlFor="flexCheckDefault" > 2BHK </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" onClick={(e) => { setreq(e.target.value) }} type="checkbox" value="Home & Living" id="flexCheckDefault" />
                              <label className="form-check-label" htmlFor="flexCheckDefault" > 3BHK </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" onClick={(e) => { setreq(e.target.value) }} type="checkbox" value="Home & Living" id="flexCheckDefault" />
                              <label className="form-check-label" htmlFor="flexCheckDefault" > Other </label>
                            </div>
                          </div>
                        </div>

                        <div className="course-sidebar__widget mb-50">
                          <div className="course-sidebar__info c-info-list">
                            <h4 className="course-sidebar__title mb-35">
                              Furniture
                            </h4>
                            <div className="form-check">
                              <input className="form-check-input" onClick={(e) => { setreq(e.target.value) }} type="checkbox" value="Furniture" id="flexCheckDefault" />
                              <label className="form-check-label" htmlFor="flexCheckDefault" > Sofa</label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" onClick={(e) => { setreq(e.target.value) }} type="checkbox" value="Furniture" id="flexCheckDefault" />
                              <label className="form-check-label" htmlFor="flexCheckDefault" > Bed </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" onClick={(e) => { setreq(e.target.value) }} type="checkbox" value="Furniture" id="flexCheckDefault" />
                              <label className="form-check-label" htmlFor="flexCheckDefault" > Chair's  </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" onClick={(e) => { setreq(e.target.value) }} type="checkbox" value="Furniture" id="flexCheckDefault" />
                              <label className="form-check-label" htmlFor="flexCheckDefault" > Other </label>
                            </div>
                          </div>
                        </div>


                        <div className="course-sidebar__widget mb-50">
                          <div className="course-sidebar__info c-info-list">
                            <h4 className="course-sidebar__title mb-35">
                              Home Appliance
                            </h4>
                            <div className="form-check">
                              <input className="form-check-input" onClick={(e) => { setreq(e.target.value) }} type="checkbox" value="Home Appliance" id="flexCheckDefault" />
                              <label className="form-check-label" htmlFor="flexCheckDefault" > Sofa</label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" onClick={(e) => { setreq(e.target.value) }} type="checkbox" value="Home Appliance" id="flexCheckDefault" />
                              <label className="form-check-label" htmlFor="flexCheckDefault" > Bed </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" onClick={(e) => { setreq(e.target.value) }} type="checkbox" value="Home Appliance" id="flexCheckDefault" />
                              <label className="form-check-label" htmlFor="flexCheckDefault" > Chair's  </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" onClick={(e) => { setreq(e.target.value) }} type="checkbox" value="Home Appliance" id="flexCheckDefault" />
                              <label className="form-check-label" htmlFor="flexCheckDefault" > Other </label>
                            </div>
                          </div>
                        </div>
                        <div className="course-sidebar__widget mb-50">
                          <div className="course-sidebar__info c-info-list">
                            <h4 className="course-sidebar__title mb-35">
                              Properties
                            </h4>
                            <div className="form-check">
                              <input className="form-check-input" onClick={(e) => { setreq(e.target.value) }} type="checkbox" value="Properties" id="flexCheckDefault" />
                              <label className="form-check-label" htmlFor="flexCheckDefault" > Land </label>
                            </div>

                            <div className="form-check">
                              <input className="form-check-input" onClick={(e) => { setreq(e.target.value) }} type="checkbox" value="Properties" id="flexCheckDefault" />
                              <label className="form-check-label" htmlFor="flexCheckDefault" > Other </label>
                            </div>
                          </div>
                        </div>

                        <button onClick={handle_newtaks} className="tp-btn">Submit</button>
                      </div>
                    </div>
                  </div>
                  }
                </div>
              </div>
            )
              :
              (
                <div className="col-lg-4 col-md-12 courser-list-width mb-60">
                  <div className="course-sidebar">
                    <div className="country-select">
                      <h4 className="course-sidebar__title mb-35">Category </h4>
                      <select onClick={(e) => { setreq(e.target.value) }}   >
                        <option value="select">Select</option>
                        <option value="Mobiles">Mobiles</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Vehicles">Vehicles</option>
                        <option value="Home & Living">Home & Living</option>

                        <option value="Furniture">Furniture</option>
                        <option value="Properties">Properties</option>
                        <option value="Home Appliance">Home Appliance</option>
                      </select>
                    </div>

                    <div className="course-sidebar__widget mb-50">
                      <div className="course-sidebar__info c-info-list">
                        <h4 className="course-sidebar__title mb-35">
                          Mobiles
                        </h4>
                        <div className="form-check">
                          <input className="form-check-input" onClick={(e) => { setreq(e.target.value) }} type="checkbox" value="Mobiles" id="flexCheckDefault" />
                          <label className="form-check-label" htmlFor="flexCheckDefault" > Samsung </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" onClick={(e) => { setreq(e.target.value) }} type="checkbox" value="Mobiles" id="flexCheckDefault" />
                          <label className="form-check-label" htmlFor="flexCheckDefault" > Iphone  </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" onClick={(e) => { setreq(e.target.value) }} type="checkbox" value="Mobiles" id="flexCheckDefault" />
                          <label className="form-check-label" htmlFor="flexCheckDefault" > realme </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" onClick={(e) => { setreq(e.target.value) }} type="checkbox" value="Mobiles" id="flexCheckDefault" />
                          <label className="form-check-label" htmlFor="flexCheckDefault" > Other </label>
                        </div>
                      </div>
                    </div>






                    <div className="course-sidebar__widget mb-50">
                      <div className="course-sidebar__info c-info-list">
                        <h4 className="course-sidebar__title mb-35">
                          Electronics
                        </h4>
                        <div className="form-check">
                          <input className="form-check-input" onClick={(e) => { setreq(e.target.value) }} type="checkbox" value="Electronics" id="flexCheckDefault" />
                          <label className="form-check-label" htmlFor="flexCheckDefault" > Laptop </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" onClick={(e) => { setreq(e.target.value) }} type="checkbox" value="Electronics" id="flexCheckDefault" />
                          <label className="form-check-label" htmlFor="flexCheckDefault" > Power bank </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" onClick={(e) => { setreq(e.target.value) }} type="checkbox" value="Electronics" id="flexCheckDefault" />
                          <label className="form-check-label" htmlFor="flexCheckDefault" > Ear Phone's </label>


                        </div>
                        <div className="form-check">
                          <input className="form-check-input" onClick={(e) => { setreq(e.target.value) }} type="checkbox" value="Electronics" id="flexCheckDefault" />
                          <label className="form-check-label" htmlFor="flexCheckDefault" > Other </label>
                        </div>
                      </div>
                    </div>

                    <div className="course-sidebar__widget mb-50">
                      <div className="course-sidebar__info c-info-list">
                        <h4 className="course-sidebar__title mb-35">
                          Vehicles
                        </h4>
                        <div className="form-check">
                          <input className="form-check-input" onClick={(e) => { setreq(e.target.value) }} type="checkbox" value="Vehicles" id="flexCheckDefault" />
                          <label className="form-check-label" htmlFor="flexCheckDefault" > Audi </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" onClick={(e) => { setreq(e.target.value) }} type="checkbox" value="Vehicles" id="flexCheckDefault" />
                          <label className="form-check-label" htmlFor="flexCheckDefault" > lamborghini </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" onClick={(e) => { setreq(e.target.value) }} type="checkbox" value="Vehicles" id="flexCheckDefault" />
                          <label className="form-check-label" htmlFor="flexCheckDefault" > Nano  </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" onClick={(e) => { setreq(e.target.value) }} type="checkbox" value="Vehicles" id="flexCheckDefault" />
                          <label className="form-check-label" htmlFor="flexCheckDefault" > Other </label>
                        </div>
                      </div>
                    </div>

                    <div className="course-sidebar__widget mb-50">
                      <div className="course-sidebar__info c-info-list">
                        <h4 className="course-sidebar__title mb-35">
                          Home & Living
                        </h4>
                        <div className="form-check">
                          <input className="form-check-input" onClick={(e) => { setreq(e.target.value) }} type="checkbox" value="Home & Living" id="flexCheckDefault" />
                          <label className="form-check-label" htmlFor="flexCheckDefault" > 2BHK </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" onClick={(e) => { setreq(e.target.value) }} type="checkbox" value="Home & Living" id="flexCheckDefault" />
                          <label className="form-check-label" htmlFor="flexCheckDefault" > 3BHK </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" onClick={(e) => { setreq(e.target.value) }} type="checkbox" value="Home & Living" id="flexCheckDefault" />
                          <label className="form-check-label" htmlFor="flexCheckDefault" > Other </label>
                        </div>
                      </div>
                    </div>

                    <div className="course-sidebar__widget mb-50">
                      <div className="course-sidebar__info c-info-list">
                        <h4 className="course-sidebar__title mb-35">
                          Furniture
                        </h4>
                        <div className="form-check">
                          <input className="form-check-input" onClick={(e) => { setreq(e.target.value) }} type="checkbox" value="Furniture" id="flexCheckDefault" />
                          <label className="form-check-label" htmlFor="flexCheckDefault" > Sofa</label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" onClick={(e) => { setreq(e.target.value) }} type="checkbox" value="Furniture" id="flexCheckDefault" />
                          <label className="form-check-label" htmlFor="flexCheckDefault" > Bed </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" onClick={(e) => { setreq(e.target.value) }} type="checkbox" value="Furniture" id="flexCheckDefault" />
                          <label className="form-check-label" htmlFor="flexCheckDefault" > Chair's  </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" onClick={(e) => { setreq(e.target.value) }} type="checkbox" value="Furniture" id="flexCheckDefault" />
                          <label className="form-check-label" htmlFor="flexCheckDefault" > Other </label>
                        </div>
                      </div>
                    </div>


                    <div className="course-sidebar__widget mb-50">
                      <div className="course-sidebar__info c-info-list">
                        <h4 className="course-sidebar__title mb-35">
                          Home Appliance
                        </h4>
                        <div className="form-check">
                          <input className="form-check-input" onClick={(e) => { setreq(e.target.value) }} type="checkbox" value="Home Appliance" id="flexCheckDefault" />
                          <label className="form-check-label" htmlFor="flexCheckDefault" > Sofa</label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" onClick={(e) => { setreq(e.target.value) }} type="checkbox" value="Home Appliance" id="flexCheckDefault" />
                          <label className="form-check-label" htmlFor="flexCheckDefault" > Bed </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" onClick={(e) => { setreq(e.target.value) }} type="checkbox" value="Home Appliance" id="flexCheckDefault" />
                          <label className="form-check-label" htmlFor="flexCheckDefault" > Chair's  </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" onClick={(e) => { setreq(e.target.value) }} type="checkbox" value="Home Appliance" id="flexCheckDefault" />
                          <label className="form-check-label" htmlFor="flexCheckDefault" > Other </label>
                        </div>
                      </div>
                    </div>
                    <div className="course-sidebar__widget mb-50">
                      <div className="course-sidebar__info c-info-list">
                        <h4 className="course-sidebar__title mb-35">
                          Properties
                        </h4>
                        <div className="form-check">
                          <input className="form-check-input" onClick={(e) => { setreq(e.target.value) }} type="checkbox" value="Properties" id="flexCheckDefault" />
                          <label className="form-check-label" htmlFor="flexCheckDefault" > Land </label>
                        </div>

                        <div className="form-check">
                          <input className="form-check-input" onClick={(e) => { setreq(e.target.value) }} type="checkbox" value="Properties" id="flexCheckDefault" />
                          <label className="form-check-label" htmlFor="flexCheckDefault" > Other </label>
                        </div>
                      </div>
                    </div>
                    <button onClick={handle_newtaks} className="tp-btn">Submit</button>
                  </div>
                </div>
              )
            }
            <div className="col-lg-8 col-md-12 course-item-width ml-30">
              {tasks && tasks.map((item, i) => (
                <div key={i} className="tpcourse tp-list-course mb-40">
                  <div className="row g-0">
                    <div className="col-xl-4 course-thumb-width">
                      <div className="tpcourse__thumb p-relative w-img fix">
                        <Link href={`/ad-details?id=${item._id}`}>
                          <div style={{ width: "100%", height: "200px", overflow: "hidden", border: "1px solid grey" }}>
                            {item && item.images && item.images[0] ? <img style={{ width: "100%", objectFit: "contain", height: "100%" }} src={item.images[0]} alt="course-thumb" /> : <img style={{ width: "100%", objectFit: "contain", height: "100%" }} src={'/assets/img/icon/c-meta-01.png'} alt="course-thumb" />}
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col-xl-8  course-text-width">
                      <div className="course-list-content">
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
                          <h4 className="tpcourse__title tp-cours-title-color">
                            <Link href="/course-details">
                              {item.Adname}
                            </Link>
                          </h4>
                        </div>
                        <div className="tpcourse__meta tpcourse__meta-gap pb-15 mb-15">
                          <ul className="d-flex align-items-center">
                            {/* <li>
                              <img
                                src="/assets/img/icon/c-meta-01.png"
                                alt="meta-icon"
                              />
                              <TimePassed createdAt={item.createdAt} />
                            </li> */}
                            <li >
                              <i style={{ fontSize: "20px", color: "rgba(255, 102, 82, 0.9)" }} className="fa-solid fa-location-dot"></i> &nbsp;
                              Kothapet, Hyderabad
                            </li>
                          </ul>
                        </div>
                        <div className="tpcourse__rating d-flex align-items-center justify-content-between">

                          {tasks.Model}
                          <div className="tpcourse__pricing">
                            <h5 className="price-title"><i class="fas fa-inr" style={{ marginRight: "0.4rem" }}     ></i>{item.Adprice}</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdListArea;
