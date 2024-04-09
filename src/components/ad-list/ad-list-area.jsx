'use client'
import ads_list_data from "@/src/data/ads-list-data";
import Link from "next/link";
import { useRouter } from 'next/router';
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocationContext } from '@/src/utils/locationContext';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';


const AdListArea = () => { 
  const [loading,setloading]=useState(false);
  const [searchText, setSearchText] = useState("");
  const [tasks, settasks] = useState([]);
  const [req, setreq] = useState('');
  const {selectedLocation} = useLocationContext();
  const [isvalid,setisvalid]=useState(true);
  const [pagenumber,setpagenumber]=useState(1);
  const [loading2,setloading2]=useState(false);
  const [turnoff2,setturnoff2]=useState(false);
  const [loading3,setloading3]=useState(false);
  const [isnext,setisnext]=useState(true);
  const text="NO Ads Found Under Selected Location";
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
  const handle_newtasks_next=async ()=>{
    var item = localStorage.getItem('my_city');
    var value=(tasks.length/8)+1;
    setpagenumber(value);
    var req;
    if(item==null){
      req='';
    }else{
      if (item) {
        req = item !== '' ? item : selectedLocation;
      } else {
        req = selectedLocation;
      }
    }
      setloading2(true);
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
          if(item){
            if(data.found){
              setisvalid(true);
            }else{
              setisvalid(false);
            }
          }
          const ads_data = shuffleArray(data.ads);
          settasks(prevTasks => [...prevTasks, ...ads_data]);
          setisnext(data.isnext);
      }
    } catch (error) {
      console.log(error);
    }
    setloading2(false);
  }
  const handle_newtasks1 = async () => {
    var item = localStorage.getItem('my_city');
    var req;
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
            'pagenumber':pagenumber,
          },
      });
      const data = await res.json();
      if (data.success) {
          if(item){
            if(data.found){
              setisvalid(true);
            }else{
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
          setisnext(data.isnext);
      }
    } catch (error) {
      console.log(error);
    }
    setloading(false);
    
  };
  // useEffect(()=>{
  //   handle_newtasks1();
  // },
  // [selectedLocation]);
  const gettasks_next = async () => {
    const queryParams = new URLSearchParams(window.location.search);
    var select = queryParams.get('select');
    if(searchText!==''){
      select=searchText;
      setSearchText(select);
    }
    var value=(tasks.length/8)+1;
    setloading3(true);
    if(select){
      select.toString();
      try {
        const res = await fetch("/api/ads/filter",{
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'filter':`${select}`,
            'pagenumber':value,
          },
        });
        const data = await res.json();
        if (data.success) {
          const ads_data = shuffleArray(data.ads);
          // let updatedTasks = tasks.slice(); 
         
          // for (let task of ads_data) {
          //     if (!tasks.some(existingTask => arraysAreIdentical(existingTask, task))) {
          //         updatedTasks.push(task);
          //     }
          // }
          settasks(prevTasks => [...prevTasks, ...ads_data]);
          setisnext(data.isnext);
        }
      } catch (error) {
        console.log(error);
      }
    }else{
        handle_newtasks1();
    }
    setloading3(false);
  }
  const gettasks = async () => {
    const queryParams = new URLSearchParams(window.location.search);
    var select = queryParams.get('select');
    if(searchText!==''){
      select=searchText;
      setSearchText(select);
    }
    var value=(tasks.length/8)+1;
    setloading3(true);
    if(select){
      setturnoff2(true);
      select.toString();
      try {
        const res = await fetch("/api/ads/filter",{
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'filter':`${select}`,
            'pagenumber':value,
          },
        });
        const data = await res.json();
        if (data.success) {
          const ads_data = shuffleArray(data.ads);
          let updatedTasks = tasks.slice(); 
         
          for (let task of ads_data) {
              if (!tasks.some(existingTask => arraysAreIdentical(existingTask, task))) {
                  updatedTasks.push(task);
              }
          }
          settasks(updatedTasks);
          setisnext(data.isnext);
        }
      } catch (error) {
        console.log(error);
      }
    }else{
        handle_newtasks1();
    }
    setloading3(false);
  }
  useEffect(() => {
    gettasks();
  }, [])

  const handle_newtasks = async () => {
    setloading(true);
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
      if (data.success) {
        settasks(data.ads);
      }
    } catch (error) {
      console.log(error);
    }
    setloading(false);
  };
  const add_to_list=async (e)=>{
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`api/users/whishlist`, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
         },
         body: JSON.stringify({
             id:e,
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
  if(loading===true){
    return(
      <>
      <center>  <h3>  Loading... </h3>   </center> 
      </>
    )
  }
  return (
    <>
    <ToastContainer />
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
                <div style={{ position:"relative", border:"2px solid grey", marginBottom:"1rem", borderRadius:"10px"}}>
                      <i className="fa fa-search" style={{position:"absolute", right:"20px", top:"8px", color:"#5A5A5A", fontSize:"20px", cursor:"pointer"}} onClick={gettasks}></i>
                      <input style={{ width:"100%", borderRadius: "15px", border: "none", padding: "7px 20px" }} type="text" placeholder="Search..." onChange={(e)=>{setSearchText(e.target.value)}} />
                    </div>
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
                          <select onClick={(e) => { setreq(e.target.value),setSearchText(e.target.value) }}   >
                            <option value=''>Select</option>
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

                        <button onClick={gettasks} className="tp-btn">Submit</button>
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
                    <div style={{ position:"relative", border:"2px solid grey", marginBottom:"1rem", borderRadius:"10px"}}>
                      <i className="fa fa-search" style={{position:"absolute", right:"20px", top:"8px", color:"#5A5A5A", fontSize:"20px", cursor:"pointer"}} onClick={gettasks}></i>
                      <input style={{ width:"100%", borderRadius: "15px", border: "none", padding: "7px 20px" }} type="text" placeholder="Search..." onChange={(e)=>{setSearchText(e.target.value)}} />
                    </div>
                      <h4 className="course-sidebar__title mb-35">Category </h4>
                      <select onClick={(e) => { setreq(e.target.value),setSearchText(e.target.value) }}   >
                        <option value=''>Select</option>
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
                    <button onClick={gettasks} className="tp-btn">Submit</button>
                  </div>
                </div>
              )
            }
            <div className="col-lg-8 col-md-12 course-item-width ml-30">
              { !isvalid &&  <h4>{text}</h4>  }
              {tasks ? ( tasks.map((item, i) => (
                <div key={i} className="tpcourse tp-list-course mb-40">
                  <div className="row g-0">
                    <div className="col-xl-4 course-thumb-width">
                      <div className="tpcourse__thumb p-relative w-img fix">
                        <Link href={`/ad-details?id=${item._id}`}>
                          <div style={{ width: "100%", height: "200px", overflow: "hidden", border: "1px solid grey" }}>
                            {item && item.images && item.images[0] ? <img style={{ width: "100%", objectFit: "contain", height: "100%" }} src={item.images[0]} alt="course-thumb" /> : <img style={{ width: "100%", objectFit: "contain", height: "100%" }} src={'https://demofree.sirv.com/nope-not-here.jpg'} alt="course-thumb" />}
                          </div>
                        </Link>
                        <div className="tpcourse__tag">
                          <button onClick={()=>add_to_list(item._id)}  >
                          <i className="fi fi-rr-heart" style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "40px", height: "40px" }}></i>
                          </button>
                      </div>
                      </div>
                    </div>
                    <div className="col-xl-8  course-text-width">
                      <div className="course-list-content">
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
                          <h4 className="tpcourse__title tp-cours-title-color">
                            <Link href={`/ad-details?id=${item._id}`}>
                              {item.Adname}
                            </Link>
                          </h4>
                        </div>
                        <div className="tpcourse__meta tpcourse__meta-gap pb-15 mb-15">
                          <ul className="d-flex align-items-center">
                            
                            <li >
                              <i style={{ fontSize: "20px", color: "rgba(255, 102, 82, 0.9)" }} className="fa-solid fa-location-dot"></i> &nbsp;
                              {item.Address}, {item.City}
                            </li>
                          </ul>
                        </div>
                        <div className="tpcourse__rating d-flex align-items-center justify-content-between">

                          {tasks.Model}
                          <div className="tpcourse__pricing">
                            <h5 className="price-title"><i class="fas fa-inr" style={{ marginRight: "0.4rem" }}     ></i>{Number(item.Adprice).toLocaleString('en-IN')}</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))):( <div> <center>  <h4> No Ads Found</h4>  </center>  </div>)}
              {
                !turnoff2 ?(
                  isnext ? (
                    (
                      !loading2 ? <div> <center>
                        <button className="tp-btn" onClick={handle_newtasks_next}>
                         Load More
                        </button> 
                        </center> </div> : <div> <center> <h3>Please Wait</h3>  </center></div>
                    )
                  ) : (
                    <></>
                  )
                ):(
                  isnext ? (
                    (
                      !loading3 ? <div> <center>
                        <button className="tp-btn" onClick={gettasks_next}>
                         Get More
                        </button> 
                        </center> </div> : <div> <center> <h3>Please Wait</h3>  </center></div>
                    )
                  ) : (
                    <></>
                  )
                )
              }
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdListArea;
