'use client'
import Count from "@/src/common/count.jsx";
import our_ads_data from "@/src/data/our-ads-data.js";
import Link from "next/link";
import React,{useState,useEffect,useContext} from "react";
import { Context } from "../Clients/clientcomponents";

// counter data 
const counter_data = [
   {
     id: 1,
     icon: "fi fi-rr-user",
     count_number: 276,
     thousand: "K",
     title: "Products Sold",
   },
   {
     id: 2,
     icon: "fi fi-rr-document",
     count_number: 35,
     thousand: "",
     title: "Products Bought",
   },
   {
     id: 3,
     icon: "fi fi-rr-star",
     count_number: 407,
     thousand: "K",
     title: "Ads Posted",
   },
 ];

const SellerPortfolioAreaUpdate = () => {
  const {user}=useContext(Context);
  // console.log(user);
  const [avatar,setImages]=useState('');
  const [firstname,setfirstname]=useState(user.firstname);
  const [lastname,setlastname]=useState(user.lastname);
  const [email,setemail]=useState(user.email);
  const [Phonenumber,setPhonenumber]=useState(user.Phonenumber);
  const [Location,setlocation]=useState(user.Location);
  const [website,setwebsite]=useState(user.website);
  const [Biography,setBiograpy]=useState(user.Biography);
  const [FaceBook,setfacebook]=useState(user.FaceBook);
  const [Youtube,setyoutube]=useState(user.Youtube);
  const [Instagram,setInstagram]=useState(user.Instagram);
  const [Tiktok,settiktok]=useState(user.Tiktok);
  const [Linkedin,setLinkedin]=useState(user.Linkedin);
  const [Snapchat,setsnapchat]=useState(user.Snapchat);
  const [Pinterest,setPinterest]=useState(user.Pinterest);
  const [Twitter,setTwitter]=useState(user.Twitter);
  const [Reddit,setReddit]=useState(user.Reddit);

  const createProductImagesChange = (e) => {
    const files = Array.from(e.target.files);
    setImages([]);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
          setImages((old) => [...old, reader.result]); 
      };
      reader.readAsDataURL(file);
    });
  };
  const handlesubmit= async()=>{
    try{
      const res=await fetch(`api/users/update/id=${user._id}`,{
         method:'POST',
         headers: {
            'Content-Type': 'application/json' 
         },
         body: JSON.stringify({
            firstname,
            lastname,
            email,
            Phonenumber,
            Location,
            website,
            Biography,
            FaceBook,
            Youtube,
            Instagram,
            Tiktok,
            Linkedin,
            Snapchat,
            Pinterest,
            Twitter,
            Reddit,
            avatar
         })
      })
   const data= await res.json();
   if(data.success){
        router.replace('/seller-profile')
   }
}catch(error){
   console.log(error);
}
  }
  return (
    <>
      <section
        className="instructor-portfolio pt-120 pb-80 wow fadeInUp"
        data-wow-duration=".8s"
        data-wow-delay=".2s"
      >
        <div className="container">
        <form >
          <div className="row">
            
            <div className="col-xl-4 col-lg-5">
              <div className="instruc-sidebar mb-40">
                <div className="isntruc-side-thumb mb-30">
                  <p>Change The Profile</p>
                    { user && user.avatar && user.avatar.url  ?  <img
                    src={`${user.avatar.url}`}
                    alt="instructor-thumb"
                  /> :  <img
                    src="https://as1.ftcdn.net/v2/jpg/03/53/11/00/1000_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg"
                    alt="instructor-thumb"
                  /> }
              <input onChange={createProductImagesChange}  type="file" name="avatar" id=""  multiple />
                </div>
                <div className="instructor-sidebar-widget">
                  <div className="isntruc-side-content text-center">
                    <h4 className="side-instructor-title mb-15">
                    </h4>
                    <p>
                    </p>
                  </div>
                  <div className="cd-information instruc-profile-info mb-35">
                    <ul>
                      <li>
                        <i className="fi fi-rr-briefcase"></i>{" "}
                        <label>Change First Name: </label> 
                         <input onChange={(e)=>{setfirstname(e.target.value)}} style={{marginLeft:"1rem", marginTop:"1rem", width:"100%"}} type="text" placeholder={`${firstname}`} />
                      </li>
                      <li>
                        <i className="fi fi-rr-briefcase"></i>{" "}
                        <label>Change Last Name: </label> 
                         <input onChange={(e)=>{setlastname(e.target.value)}}   style={{marginLeft:"1rem", marginTop:"1rem", width:"100%"}} type="text" placeholder={`${lastname}`} />
                      </li>

                      <li>
                       <i className="fi fi-rr-phone-call"></i>{" "}
                        <label>Phone Number</label> 
                        <input onChange={(e)=>{setPhonenumber(e.target.value)}}  style={{marginLeft:"1rem", marginTop:"1rem", width:"100%"}} type="text" placeholder={`${Phonenumber}`} />
                      </li>
                      <li>
                        <i className="fi fi-rr-envelope"></i>{" "}
                        <label>Email</label> 
                        <input disabled onChange={(e)=>{setemail(e.target.value)}}   style={{marginLeft:"1rem", marginTop:"1rem", width:"100%"}} type="text"  placeholder={`${email}`}   />
                      </li>
                      <li>
                      <i className="fa-brands fa-facebook-f"></i>{" "}
                        <label>FaceBook Link:-</label> 
                        <input onChange={(e)=>{setfacebook(e.target.value)}}  style={{marginLeft:"1rem", marginTop:"1rem", width:"100%"}} type="text" placeholder={`${FaceBook}`} />
                      </li>
                      {/* <li>
                      <i className="fa-brands fa-facebook-f"></i>{" "}
                        <label>Experiences</label>
                        <input style={{marginLeft:"1rem", marginTop:"1rem", width:"100%"}} type="text" />
                      </li> */}
                      <li>
                      <i className="fa-brands fa-twitter"></i>{" "}
                        <label>Twitter Link:- </label>
                        <input onChange={(e)=>{setTwitter(e.target.value)}}  style={{marginLeft:"1rem", marginTop:"1rem", width:"100%"}} type="text" placeholder={`${Twitter}`} />
                      </li>
                      <li>
                      <i className="fa-brands fa-instagram"></i>{" "}
                        <label>Instagram Link:- </label>
                        <input onChange={(e)=>{setInstagram(e.target.value)}}  style={{marginLeft:"1rem", marginTop:"1rem", width:"100%"}} type="text" placeholder={`${Instagram}`}  />
                      </li>
                      <li>
                      <i className="fa-brands fa-youtube"></i>{" "}
                        <label>Youtube Link:- </label>
                        <input onChange={(e)=>{setyoutube(e.target.value)}}   style={{marginLeft:"1rem", marginTop:"1rem", width:"100%"}} type="text" placeholder={`${Youtube}`}  />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="instructor-main-content ml-30 mb-40">
                <div className="instruc-biography mb-50">
                  <h4 className="ins-bio-title mb-30">Biography</h4>
                  <p>
                    <textarea onChange={(e)=>{setBiograpy(e.target.value)}}   style={{width:"100%"}} name="" id="" cols="30" rows="10" placeholder="Write About Yourself"></textarea>
                  </p>
                  <h4 className="ins-bio-title mb-30">Add Adress</h4>
                  <p>
                    <textarea onChange={(e)=>{setlocation(e.target.value)}}   style={{width:"100%"}} name="" id="" cols="30" rows="4" placeholder="Your Location"></textarea>
                  </p>
                  <center   >
                  <button  className="tp-border-btn w-40" onClick={handlesubmit}   >update</button>   </center>
                </div>
              </div>
            </div>
          </div>
                 
            </form>
        </div>
      </section>
    </>
  );
};

export default SellerPortfolioAreaUpdate;
