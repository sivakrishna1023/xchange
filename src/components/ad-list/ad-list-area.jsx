'use client'
import ads_list_data from "@/src/data/ads-list-data";
import Link from "next/link";
import React,{useState,useEffect} from "react";

const  AdListArea = () => {
  const gettasks=async()=>{
    try{
      const res=await fetch("/api/ads/Allads",{
        method:'GET',
        headers: {
          'Content-Type': 'application/json' 
        },
       })
      const data= await res.json();
      console.log(data);
      if(data.success){
           console.log(data);
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
        className="course-list-area pb-120 wow fadeInUp"
        data-wow-duration=".8s"
        data-wow-delay=".2s"
      >
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-12">
              <div className="section-title mb-60">
                <span className="tp-sub-title-box mb-15">Our Ads</span>
                <h2 className="tp-section-title">Explore Popular Ads</h2>
              </div>
            </div>
          </div>
          <div className="row mb-20">
            <div className="col-lg-4 col-md-12 courser-list-width mb-60">
              <div className="course-sidebar">
                <div className="country-select">
                  <h4 className="course-sidebar__title mb-35">Category </h4>
                  <select>
                    <option value="volvo">All Category</option>
                    <option value="saab">General</option>
                    <option value="mercedes">Electronics</option>
                    <option value="audi">Vehicles</option>
                    <option value="audi2">Property</option>
                  </select>
                </div>
                <div className="course-sidebar__widget mb-50">
                  <div className="course-sidebar__info c-info-list">
                    <h4 className="course-sidebar__title mb-35">
                      Electronics
                    </h4>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        Mobile Phone
                      </label>
                      <span className="f-right">99</span>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckChecked"
                      > 
                       Laptop
                      </label>
                      <span className="f-right">63</span>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked3"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckChecked3"
                      >
                        Ear Phones
                      </label>
                      <span className="f-right">96</span>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked4"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckChecked4"
                      >
                        Television
                      </label>
                      <span className="f-right">35</span>
                    </div>
                  </div>
                </div>
                <div className="course-sidebar__widget mb-50">
                  <div className="course-sidebar__info c-info-list">
                    <h4 className="course-sidebar__title mb-30">
                      Men's Wear
                    </h4>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault5"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault5"
                      >
                        T-Shirts
                      </label>
                      <span className="f-right">13</span>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked6"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckChecked6"
                      >
                        Shirts
                      </label>
                      <span className="f-right">25</span>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked7"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckChecked7"
                      >
                        Trousers
                      </label>
                      <span className="f-right">99</span>
                    </div>
                  </div>
                </div>
                <div className="course-sidebar__widget mb-50">
                  <div className="course-sidebar__info c-info-list">
                    <h4 className="course-sidebar__title mb-35">Women's Wear</h4>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault8"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault8"
                      >
                        T-Shirt
                      </label>
                      <span className="f-right">55</span>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked9"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckChecked9"
                      >
                        Shoes
                      </label>
                      <span className="f-right">40</span>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked10"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckChecked10"
                      >
                        Trouser
                      </label>
                      <span className="f-right">26</span>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked11"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckChecked11"
                      >
                        Jacket
                      </label>
                      <span className="f-right">35</span>
                    </div>
                  </div>
                </div>
                <div className="course-sidebar__widget mb-50">
                  <div className="course-sidebar__info c-info-list">
                    <h4 className="course-sidebar__title mb-35">
                      Car
                    </h4>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault12"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault12"
                      >
                        Audi
                      </label>
                      <span className="f-right">96</span>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked13"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckChecked13"
                      >
                        Ferrari
                      </label>
                      <span className="f-right">27</span>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked14"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckChecked14"
                      >
                        lamborghini
                      </label>
                      <span className="f-right">88</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-12 course-item-width ml-30">
              {tasks &&  tasks.map((item, i)=> (
                <div key={i} className="tpcourse tp-list-course mb-40">
                  <div className="row g-0">
                    <div className="col-xl-4 course-thumb-width">
                      <div className="tpcourse__thumb p-relative w-img fix">
                      <Link href={`/ad-details?id=${item._id}`}>
                        { item.images[0].url ?  <img src={item.images[0].url} alt="course-thumb" /> : <img src={'/assets/img/icon/c-meta-01.png'} alt="course-thumb" />  }
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
                            <li>
                              <img
                                src="/assets/img/icon/c-meta-01.png"
                                alt="meta-icon"
                              />
                              <span>35 Classes</span>
                            </li>
                            <li>
                              <img
                                src="/assets/img/icon/c-meta-02.png"
                                alt="meta-icon"
                              />
                              <span>291 Students</span>
                            </li>
                          </ul>
                        </div>
                        <div className="tpcourse__rating d-flex align-items-center justify-content-between">
                        {tasks.Model}
                          {/* <div className="tpcourse__rating-icon">
                            <span>4.7</span>
                            <i className="fi fi-ss-star"></i>
                            <i className="fi fi-ss-star"></i>
                            <i className="fi fi-ss-star"></i>
                            <i className="fi fi-ss-star"></i>
                            <i className="fi fi-rs-star"></i>
                            <p>(125)</p>
                          </div> */}
                          <div className="tpcourse__pricing">
                            <h5 className="price-title">${item.Adprice}</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* <div className="basic-pagination text-center">
            <nav>
              <ul>
                <li>
                  <Link href="/blog">
                    <i className="far fa-angle-left"></i>
                  </Link>
                </li>
                <li>
                  <span className="current">1</span>
                </li>
                <li>
                  <Link href="/blog">2</Link>
                </li>
                <li>
                  <Link href="/blog">3</Link>
                </li>
                <li>
                  <Link href="/blog">
                    <i className="far fa-angle-right"></i>
                  </Link>
                </li>
              </ul>
            </nav>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default AdListArea;
