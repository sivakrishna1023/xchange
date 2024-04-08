'use Client'
import our_ads_data from "@/src/data/our-ads-data";
import Link from "next/link";
import React,{useState,useEffect,useContext} from "react";
import { Context } from "../Clients/clientcomponents";
import { useRouter } from "next/router";
const AdArea = () => {
  const { user } = useContext(Context);
  const [tasks,setTasks]=useState('');
  const router = useRouter();
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
  const getTasks = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await fetch("/api/ads/mydraftads", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      });
      const data = await res.json();
      if (data.success) {
        console.log(data.ads);
        setTasks(data.ads);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getTasks();
  }, []);
  return (
    <>
      <section className="course-area pb-120">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title text-center mb-65">
                <span className="tp-sub-title-box mb-15">My All Ads</span>
                <h2 className="tp-section-title mb-20">  
                </h2>
              </div>
            </div>
          </div>
          <div className="row mb-20">
                                   { tasks ?   tasks.map((item, i) => (
                                                          <div key={i} className="col-xl-3 col-lg-6 col-md-3">
                                                            <div className="tpcourse mb-40">
                                                              <div className="tpcourse__thumb p-relative w-img fix">
                                                              <Link href={`/ad-details?id=${item._id}`}>
                                                                { item && item.images && item.images[0] ?   <img src={item.images[0]} alt="course-thumb" /> : <img src={'https://demofree.sirv.com/nope-not-here.jpg'} alt="course-thumb" />  }
                                                                </Link>
                                                                
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
                                                                    <h5 className="price-title"><i class="fas fa-inr"  style={{marginRight:"0.4rem"}}     ></i>{Number(ad.Adprice).toLocaleString('en-IN')}</h5>
                                                                  </div>
                                                                  
                                                                </div>
                                                                   <Link href={`/ad-update?id=${item._id}`}>Update</Link> <br />
                                                                   <button onClick={() => {handle_delete(item._id)}}>Delete</button>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        )) : <div> Your Bin is empty </div>} 
          </div>
         
        </div>
      </section>
    </>
  );
};

export default AdArea;
