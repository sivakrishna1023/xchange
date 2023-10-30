'use Client'
import our_ads_data from "@/src/data/our-ads-data";
import Link from "next/link";
import React,{useState,useEffect,useContext} from "react";
import { Context } from "../Clients/clientcomponents";
import { useRouter } from "next/router";
const AdArea = () => {
  const { user } = useContext(Context);
  const [tasks,settasks]=useState('');
  const router = useRouter();
  useEffect(() => {
    const getTasks = async () => {
      try {
        const res = await fetch("/api/ads/Myads", {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
        });
        const data = await res.json();
        console.log(data);
        if (data.success) {
          console.log(data);
          setTasks(data.ads);
        }
      } catch (error) {
        console.log(error);
      }
    }

    if (!user._id) {
      router.replace('/sign-in');
    }
    getTasks();
  }, []);
  // const gettasks=async()=>{
  //   try{
  //     const res=await fetch("/api/ads/Myads",{
  //       method:'GET',
  //       headers: {
  //         'Content-Type': 'application/json' 
  //       },
  //      })
  //     const data= await res.json();
  //     console.log(data);
  //     if(data.success){
  //          console.log(data);
  //          settasks(data.ads);
  //     }  
  //   }catch(error){
  //     console.log(error);
  //   }
  // }
  // const [tasks,settasks]=useState('');
  // useEffect(()=>{
  //      gettasks(); 
  // },[])
  // if(!user._id){
  //   return router.replace('/sign-in');
  // }
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
                                   { tasks &&  tasks.map((item, i) => (
                                                          <div key={i} className="col-xl-3 col-lg-6 col-md-3">
                                                            <div className="tpcourse mb-40">
                                                              <div className="tpcourse__thumb p-relative w-img fix">
                                                              <Link href={`/ad-details?id=${item._id}`}>
                                                                { item.images[0].url ?  <img src={item.images[0].url} alt="course-thumb" /> : <img src={'/assets/img/icon/c-meta-01.png'} alt="course-thumb" />  }
                                                                  {/* <img src={'/assets/img/icon/c-meta-01.png'} alt="course-thumb" /> */}
                                                                </Link>
                                                                <div className="tpcourse__tag">
                                                                  <Link href="#">
                                                                    <i className="fi fi-rr-heart"></i>
                                                                  </Link>
                                                                </div>
                                                                {/* <div className="tpcourse__img-icon">
                                                                  <img src={item.icon} alt="course-avata" />
                                                                </div> */}
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
                                                                      <span>{item.createdAt}</span>
                                                                    </li>
                                                                    {/* <li>
                                                                      <img
                                                                        src="/assets/img/icon/c-meta-02.png"
                                                                        alt="meta-icon"
                                                                      />
                                                                      <span>{item.st_text}</span>
                                                                    </li> */}
                                                                  </ul>
                                                                </div>
                                                                <div className="tpcourse__rating d-flex align-items-center justify-content-between">
                                                                  <div className="tpcourse__rating-icon">
                                                                    {tasks.Model}
                                                                    {/* <span>4.7</span>
                                                                    <i className="fi fi-ss-star"></i>
                                                                    <i className="fi fi-ss-star"></i>
                                                                    <i className="fi fi-ss-star"></i>
                                                                    <i className="fi fi-ss-star"></i>
                                                                    <i className="fi fi-rs-star"></i>
                                                                    <p>(125)</p> */}
                                                                  </div>
                                                                  <div className="tpcourse__pricing">
                                                                    <h5 className="price-title">${item.Adprice}</h5>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        ))}
          </div>
          {/* <div className="basic-pagination">
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

export default AdArea;
