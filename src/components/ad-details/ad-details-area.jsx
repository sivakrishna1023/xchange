'use client' 
import review_content from '@/src/data/review-data';
import VideoPopup from '@/src/modals/video-popup';
import Link from 'next/link';
import  {useState,useEffect} from 'react';
import { useRouter } from 'next/router';

const AdDetailsArea = () => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const { query } = useRouter();
    const { asPath  }=useRouter();
    const [ad,setad]=useState();
    const [aduser,setaduser]=useState();
    const router= useRouter();
    var imagelink=`https://bestprofilepictures.com/wp-content/uploads/2021/08/Amazing-Profile-Picture-for-Facebook.jpg`;
    
    const getdetails= async()=>{
      const token = localStorage.getItem('token');
      if(token==='null'){
         router.replace('/sign-in');
      }
      try{
         const id = new URLSearchParams(asPath.split('?')[1]).get('id');
         const token = localStorage.getItem('token');
         const res=await fetch(`/api/ads/single/id=${id}`,{
           method:'GET',
           headers: {
             'Content-Type': 'application/json',
             'Authorization': `Bearer ${token}`
           },
          })
         const data= await res.json();
         if(data.success){
              setad(data.ad);
              const user_id=data.ad.user;
              try{
               const token = localStorage.getItem('token');
               const res=await fetch(`/api/users/single/id=${user_id}`,{
                  method:'GET',
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                  },
                 })
                const data= await res.json();
               if(data.success){
                  setaduser(data.user);
               }
              }catch(error){
               console.log(error);
              }
         }  
       }catch(error){
         console.log(error);
       }
    } 
    useEffect(()=>{
      getdetails();
     },[])
    return (
        <>
         <>
         {
            ad && aduser && <div> <section className="c-details-area pt-120 pb-50 wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".2s">
            <div className="container">
               <div className="row">
                  <div className="col-lg-8 col-md-12">
                     <div className="c-details-wrapper mr-25">
                        <div className="c-details-thumb p-relative mb-40">
                        { ad && ad.images &&  ad.images[0]  ?  <img src={ad.images[0]} alt="course-thumb" /> : <img src={'/assets/img/icon/c-meta-01.png'} alt="course-thumb" />  }
                           <div className="c-details-ava d-md-flex align-items-center">
                              {/* <img src="/assets/img/course/c-details-ava-01.png" alt="avata" /> */}
                              <span>By <a href="#">{aduser.firstname}</a></span>
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
                                 <li><img src="/assets/img/icon/c-meta-01.png" alt="meta-icon" /> <span>2 hours ago</span></li>
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
                        <div className="cor-details-instructor mb-40">
                           <h4 className="tp-c-details-title mb-40">Seller</h4>
                           <div className="course-instructor-details d-flex f-wrap align-items-center">
                              <div className="course-avata mr-30 mb-20">
                              { aduser.avatar ?  <img src= {aduser.avatar} alt="instructor-thumb"/> : <img
                  src= {imagelink}
                  alt="instructor-thumb"
                />}                      </div>
                              <div className="course-avatar-details mb-20">
                                 <h5 className="c-avata-title mb-10">{aduser.firstname}   {aduser.lastname}</h5>
                                 <p>{aduser.email}</p>
                                 <div className="c-details-list mb-5">
                                    <ul className="d-flex align-items-center">
                                       <li>
                                        
                                       </li>
                                       {/* <li><span>350 Ads Posted</span></li> */}
                                    </ul>
                                 </div>
                                 <div className="c-details-stu">
                                    <ul>
                                       <li className="d-flex align-items-center"><img src="/assets/img/icon/c-details-02.png" alt="meta-icon"/> <span>2,35,687 Followers</span></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
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
                              
                              {ad && ad.images && ad.images.length > 1 && ad.images.slice(1).map((item, index) => (
                                 <img key={index} style={{ margin: "0 0 1rem 0" }} src={item} alt="missing" />
                             ))}                             

                        </div>
                        <div className="course-details-widget">
                           <div className="cd-video-price">
                              <h3 className="pricing-video text-center mb-15">${ad.Adprice}</h3>
                              <div className="cd-pricing-btn text-center mb-30">
                             
                                 <input style={{width:"100%", marginBottom:"1rem", padding:"1rem"}} type="text" placeholder='Write Review Here' />
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