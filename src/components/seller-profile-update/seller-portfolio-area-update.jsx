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
  const initialFirstname = user.firstname ? user.firstname : '';
  const initialLastname = user.lastname ? user.lastname  : '';
  const initialEmail = user.email ? user.email : '';
  const initialPhonenumber = user.Phonenumber ? user.Phonenumber : '';
  const initialLocation = user.Location ? user.Location : '';
  const initialWebsite =  user.website ? user.website : '';
  const initialBiography =  user.Biograpy ? user.Biograpy : '';
  const initialFacebook =  user.Facebook ? user.Facebook  : '';
  const initialYoutube =  user.Youtube ? user.Youtube : '';
  const initialInstagram =  user.Instagram ?user.Instagram : '';
  const initialTiktok =  user.Tiktok ? user.Tiktok : '';
  const initialLinkedin =  user.Linkedin ? user.Linkedin : '';
  const initialSnapchat =  user.Snapchat ? user.Snapchat : '';
  const initialPinterest =  user.Pinterest ? user.Pinterest : '';
  const initialTwitter = user.Twitter ? user.Twitter : '';
  const initialReddit =  user.Reddit ? user.Reddit : '';

  const [avatar, setImages] = useState('');
  const [firstname, setFirstname] = useState(initialFirstname);
  const [lastname, setLastname] = useState(initialLastname);
  const [email, setEmail] = useState(initialEmail);
  const [Phonenumber, setPhonenumber] = useState(initialPhonenumber);
  const [Location, setLocation] = useState(initialLocation);
  const [website, setWebsite] = useState(initialWebsite);
  const [Biography, setBiography] = useState(initialBiography);
  const [FaceBook, setFacebook] = useState(initialFacebook);
  const [Youtube, setYoutube] = useState(initialYoutube);
  const [Instagram, setInstagram] = useState(initialInstagram);
  const [Tiktok, setTiktok] = useState(initialTiktok);
  const [Linkedin, setLinkedin] = useState(initialLinkedin);
  const [Snapchat, setSnapchat] = useState(initialSnapchat);
  const [Pinterest, setPinterest] = useState(initialPinterest);
  const [Twitter, setTwitter] = useState(initialTwitter);
  const [Reddit, setReddit] = useState(initialReddit);
  useEffect(()=>{
    const initialFirstname = user.firstname ? user.firstname : '';
    const initialLastname = user.lastname ? user.lastname  : '';
    const initialEmail = user.email ? user.email : '';
    const initialPhonenumber = user.Phonenumber ? user.Phonenumber : '';
    const initialLocation = user.Location ? user.Location : '';
    const initialWebsite =  user.website ? user.website : '';
    const initialBiography =  user.Biograpy ? user.Biograpy : '';
    const initialFacebook =  user.Facebook ? user.Facebook  : '';
    const initialYoutube =  user.Youtube ? user.Youtube : '';
    const initialInstagram =  user.Instagram ?user.Instagram : '';
    const initialTiktok =  user.Tiktok ? user.Tiktok : '';
    const initialLinkedin =  user.Linkedin ? user.Linkedin : '';
    const initialSnapchat =  user.Snapchat ? user.Snapchat : '';
    const initialPinterest =  user.Pinterest ? user.Pinterest : '';
    const initialTwitter = user.Twitter ? user.Twitter : '';
    const initialReddit =  user.Reddit ? user.Reddit : '';
    setFirstname(initialFirstname);
    setLastname(initialLastname);
    setEmail(initialEmail);
    setPhonenumber(initialPhonenumber);
    setLocation(initialPhonenumber);
    setLocation(initialLocation)
    setWebsite(initialWebsite)
    setBiography(initialBiography)
    setFacebook(initialFacebook)
    setYoutube(initialYoutube)
    setInstagram(initialInstagram)
    setTiktok(initialTiktok)
    setLinkedin(initialLinkedin)
    setSnapchat(initialSnapchat)
    setPinterest(initialPinterest)
    setTwitter(initialTwitter)
    setReddit(initialTwitter)
  },[user])
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
      const token = localStorage.getItem('token');
      const res=await fetch(`api/users/update/id=${user._id}`,{
         method:'POST',
         headers: {
            'Content-Type': 'application/json', 
            'Authorization': `Bearer ${token}`
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
      {user && <section
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
                         <input onChange={(e)=>{setFirstname(e.target.value)}} style={{marginLeft:"1rem", marginTop:"1rem", width:"100%"}} type="text" placeholder={`${firstname}`} />
                      </li>
                      <li>
                        <i className="fi fi-rr-briefcase"></i>{" "}
                        <label>Change Last Name: </label> 
                         <input onChange={(e)=>{setLastname(e.target.value)}}   style={{marginLeft:"1rem", marginTop:"1rem", width:"100%"}} type="text" placeholder={`${lastname}`} />
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
                        <input onChange={(e)=>{setFacebook(e.target.value)}}  style={{marginLeft:"1rem", marginTop:"1rem", width:"100%"}} type="text" placeholder={`${FaceBook}`} />
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
                        <input onChange={(e)=>{setYoutube(e.target.value)}}   style={{marginLeft:"1rem", marginTop:"1rem", width:"100%"}} type="text" placeholder={`${Youtube}`}  />
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
                    <textarea onChange={(e)=>{setBiography(e.target.value)}}   style={{width:"100%"}} name="" id="" cols="30" rows="10" placeholder="Write About Yourself"></textarea>
                  </p>
                  <h4 className="ins-bio-title mb-30">Add Adress</h4>
                  <p>
                    <textarea onChange={(e)=>{setLocation(e.target.value)}}   style={{width:"100%"}} name="" id="" cols="30" rows="4" placeholder="Your Location"></textarea>
                  </p>
                  <center   >
                  <button  className="tp-border-btn w-40" onClick={handlesubmit}   >update</button>   </center>
                </div>
              </div>
            </div>
          </div>
                 
            </form>
        </div>
      </section>}
    </>
  );
};

export default SellerPortfolioAreaUpdate;
