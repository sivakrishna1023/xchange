'use client'
import ads_data from "@/src/data/ads-data";
import Link from "next/link";
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../Clients/clientcomponents";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocationContext } from "@/src/utils/locationContext";

const CourseArea = () => {

  const { selectedLocation } = useLocationContext();
  const currtime = Date.now();
  const [loading, setloading] = useState(false);
  const { user } = useContext(Context);
  const [tasks, settasks] = useState([]);
  const text = "No Ads Found Under Selected Location";
  const [isvalid, setisvalid] = useState(true);
  const [pagenumber,setpagenumber]=useState(0);
  const [isnext,setisnext]=useState(true);
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    } 
    return array;
  }
  function arraysAreIdentical(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

const handle_newtasks_next = async () => {
  var item = localStorage.getItem('my_city');
  var req;
  const value=tasks.length/8+1;
  if(item==null){
    req='';
  }else{
    if (item) {
      req = item !== '' ? item : selectedLocation;
    } else {
      req = selectedLocation;
    }
  }
  setloading(true);
  try {
      const res = await fetch("/api/ads/cityfilter", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'filter':`${req}`,
          'pagenumber':value,
        },
      });
    const data = await res.json();
    if (data.success) {
      if (item) {
        if (data.found) {
          setisvalid(true);
        } else {
          setisvalid(false);
        }
      }
        const ads_data = shuffleArray(data.ads);
        settasks(prevTasks => [...prevTasks, ...ads_data]);
        setisnext(data.isnext);
    }
  } catch (error) {
    setloading(false);
    console.log(error);
  }
  setloading(false);
};

  const handle_newtasks = async () => {
    var item = localStorage.getItem('my_city');
    var req;
    const value=tasks.length/8+1;
    if(item==null){
      req='';
    }else{
      if (item) {
        req = item !== '' ? item : selectedLocation;
      } else {
        req = selectedLocation;
      }
    }
    setloading(true);
    try {
        const res = await fetch("/api/ads/cityfilter", {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'filter':`${req}`,
            'pagenumber':value,
          },
        });
      const data = await res.json();
      if (data.success) {
        if (item) {
          if (data.found) {
            setisvalid(true);
          } else {
            setisvalid(false);
          }
        }
        const ads_data = shuffleArray(data.ads);
          let updatedTasks = tasks.slice(); 
         
          for (let task of ads_data) {
              if (!tasks.some(existingTask => arraysAreIdentical(existingTask, task))) {
                  updatedTasks.push(task);
              }
          }
          settasks(updatedTasks);
          // settasks(prevTasks => [...prevTasks, ...ads_data]);
          setisnext(data.isnext);
      }
    } catch (error) {
      setloading(false);
      console.log(error);
    }
    setloading(false);
  };
  // useEffect(() => {
  //   handle_newtasks1();
  // }, [])
  useEffect(() => {
    handle_newtasks();
  },
  [selectedLocation]);
  
  const add_to_list = async (e) => {
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`api/users/whishlist`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          id: e,
        })
      })
      const data = await res.json();
      if (data.success) {
        const message = data.message ? data.message : "Added to Favorites";
        toast.success(message, {
          position: toast.POSITION.TOP_CENTER
        });
      } else {
        const message = data.message ? data.message : "Failed to Add in Favorites";
        toast.error(message, {
          position: toast.POSITION.TOP_CENTER
        });
      }
    } catch (error) {
      toast.error("Connection failed try again later !", {
        position: toast.POSITION.TOP_CENTER
      });
    }
  }

  return (
    <>
      <ToastContainer />
      <section
        className="course-area pt-10 pb-110 wow fadeInUp"
        data-wow-duration=".8s"
        data-wow-delay=".4s"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title mb-10 lg:mb-65 ">
                <h2 className="tp-section-title mb-20 mt-20">
                  Explore Popular Ads
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="row">
              {!isvalid && <h4>{text} <br /> </h4>}
              {tasks ? tasks.map((item, i) => (
                <div key={i} className="col-xl-3 col-lg-12 col-md-3">
                  <div className="tpcourse mb-40">
                    <div className="tpcourse__thumb p-relative w-img fix">
                      {       
                        user._id ? <Link href={`/ad-details?id=${item._id}`}>
                          <div style={{ width: "100%", height: "200px", overflow: "hidden", border: "1px solid grey" }}>
                            {item.images && item.images[0] && item.images[0] ? <img style={{ width: "100%", objectFit: "contain", height: "100%" }} src={item.images[0]} alt="course-thumb" /> : <img style={{ width: "100%", objectFit: "contain", height: "100%" }} src={'https://demofree.sirv.com/nope-not-here.jpg'} alt="course-thumb" />}
                          </div>
                        </Link> : <Link href={`/sign-in`}>
                          <div style={{ width: "100%", height: "200px", overflow: "hidden", border: "1px solid grey" }}>
                            {item.images && item.images[0] && item.images[0] ? <img style={{ width: "100%", objectFit: "contain", height: "100%" }} src={item.images[0]} alt="course-thumb" /> : <img style={{ width: "100%", objectFit: "contain", height: "100%" }} src={'https://demofree.sirv.com/nope-not-here.jpg'} alt="course-thumb" />}
                          </div>
                        </Link>
                      }
                      <div className="tpcourse__tag">
                        <button onClick={() => add_to_list(item._id)}  >
                          <i className="fi fi-rr-heart" style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "40px", height: "40px" }}></i>
                        </button>
                      </div>

                    </div>
                    <div className="tpcourse__content-2">
                      <div className="tpcourse__category mb-10">
                        <ul className="tpcourse__price-list d-flex align-items-center">
                          <li>
                            <Link
                              style={{ padding: "6px 9px", fontSize: "13px" }}
                              className={item.ct_color}
                              href={`/ad-details?id=${item._id}`}
                            >
                              {item.Category}
                            </Link>
                          </li>
                          <li>
                            <Link
                              style={{ padding: "6px 9px", fontSize: "13px" }}
                              className={item.cn_color}
                              href={`/ad-details?id=${item._id}`}
                            >
                              {item.Brand}
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="tpcourse__ava-title mb-15">
                        <h4 className="tpcourse__title" style={{ margin: "0" }}>
                          <Link href={`/ad-details?id=${item._id}`}>{item.Adname}</Link>
                        </h4>
                      </div>
                      <div className="tpcourse__meta tpcourse__meta-gap pb-15 mb-15">
                        <ul className="d-flex align-items-center">
                          {/* <li >
                            <img
                              src="/assets/img/icon/c-meta-01.png"
                              alt="meta-icon"
                            />
                            <TimePassed createdAt={item.createdAt} />
                          </li> */}
                          <li >
                            <i style={{ fontSize: "20px", color: "rgba(255, 102, 82, 0.9)" }} className="fa-solid fa-location-dot"></i> &nbsp;
                            {item.Address}, {item.City}
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
              )) : (
                <div> <center> <h3>Please Wait</h3>  </center></div>
              )}
            </div>
          </div>
          <div className="row text-center">
            <div className="col-lg-12">
              <div className="course-btn mt-20">
              {user._id ? (
                  isnext ? (
                    (
                      !loading ? <button className="tp-btn" onClick={handle_newtasks_next}>
                      Load More
                      </button> : <div> <center> <h3>Please Wait</h3>  </center></div>
                    )
                  ) : (
                    <Link className="tp-btn" href={'/ad-list'}>
                      Browse All Ads
                    </Link>
                  )
                ) : (
                   !loading ?
                  (
                  <Link className="tp-btn" href={'/sign-in'}>
                    Browse All Ads
                  </Link>
                  ):(
                    <div> <center>  <h3>Please Wait</h3> </center></div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseArea;
