'use client'
import Count from "@/src/common/count.jsx";
import our_ads_data from "@/src/data/our-ads-data.js";
import Link from "next/link";
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../Clients/clientcomponents";
import { Popover, PopoverTrigger, PopoverContent, Button } from "@nextui-org/react";
import { MdDelete } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SellerPortfolioAreaUpdate = () => {
  const { user } = useContext(Context);
  const [loading, setloading] = useState(false);
  const [verifymail, setverifymail] = useState('');
  if (!user) {
    return <>
      <center> Loading please wait...!!</center>
    </>
  }
  const initialFirstname = user.firstname ? user.firstname : '';
  const initialLastname = user.lastname ? user.lastname : '';
  const initialEmail = user.email ? user.email : '';
  const initialPhonenumber = user.Phonenumber ? user.Phonenumber : '';
  const initialLocation = user.Location ? user.Location : '';
  const initialWebsite = user.website ? user.website : '';
  const initialBiography = user.Biograpy ? user.Biograpy : '';
  const initialFacebook = user.Facebook ? user.Facebook : '';
  const initialYoutube = user.Youtube ? user.Youtube : '';
  const initialInstagram = user.Instagram ? user.Instagram : '';
  const initialTiktok = user.Tiktok ? user.Tiktok : '';
  const initialLinkedin = user.Linkedin ? user.Linkedin : '';
  const initialSnapchat = user.Snapchat ? user.Snapchat : '';
  const initialPinterest = user.Pinterest ? user.Pinterest : '';
  const initialTwitter = user.Twitter ? user.Twitter : '';
  const initialReddit = user.Reddit ? user.Reddit : '';

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
  useEffect(() => {
    const initialFirstname = user.firstname ? user.firstname : '';
    const initialLastname = user.lastname ? user.lastname : '';
    const initialEmail = user.email ? user.email : '';
    const initialPhonenumber = user.Phonenumber ? user.Phonenumber : '';
    const initialLocation = user.Location ? user.Location : '';
    const initialWebsite = user.website ? user.website : '';
    const initialBiography = user.Biograpy ? user.Biograpy : '';
    const initialFacebook = user.Facebook ? user.Facebook : '';
    const initialYoutube = user.Youtube ? user.Youtube : '';
    const initialInstagram = user.Instagram ? user.Instagram : '';
    const initialTiktok = user.Tiktok ? user.Tiktok : '';
    const initialLinkedin = user.Linkedin ? user.Linkedin : '';
    const initialSnapchat = user.Snapchat ? user.Snapchat : '';
    const initialPinterest = user.Pinterest ? user.Pinterest : '';
    const initialTwitter = user.Twitter ? user.Twitter : '';
    const initialReddit = user.Reddit ? user.Reddit : '';
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
  }, [user])

  const creatingavatarimages = (e) => {
    const files = Array.from(e.target.files);
    setImages('');
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const image = new Image();
        image.src = event.target.result;

        image.onload = () => {
          const canvas = document.createElement('canvas');
          let width = image.width;
          let height = image.height;
          canvas.width = width;
          canvas.height = height;

          const ctx = canvas.getContext('2d');
          ctx.drawImage(image, 0, 0, width, height);

          const compressedImages = [
            canvas.toDataURL('image/jpeg', 0.1),
            canvas.toDataURL('image/jpeg', 0.2),
            canvas.toDataURL('image/jpeg', 0.3),
            canvas.toDataURL('image/jpeg', 0.4),
            canvas.toDataURL('image/jpeg', 0.5),
            canvas.toDataURL('image/jpeg', 0.6),
            canvas.toDataURL('image/jpeg', 0.7),
            canvas.toDataURL('image/jpeg', 0.8),
            canvas.toDataURL('image/jpeg', 0.9),
          ];
          let selectedImage = event.target.result;
          for (let i = 0; i < compressedImages.length; i++) {
            if (compressedImages[i].length <= 300 * 1024) {
              selectedImage = compressedImages[i];
            } else {
              break;
            }
          }
          setImages(selectedImage);
        };
      };
      reader.readAsDataURL(file);
    });
  };
  const handle_delete = async () => {
    setloading(true);
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`api/users/delete`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      })
      const data = await res.json();
      if (data.success) {
        setloading(false);
        localStorage.setItem('token', null);
        router.replace('/');
      }
    } catch (error) {
      setloading(false);
      router.replace('/seller-profile');
    }
  }
  const handle_verify_link = async () => {
    setloading(true);
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`/api/users/verifytoken`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          email: verifymail,
        })
      })
      const data = await res.json();
      if (data.success) {
        toast.success("Verification Link has been sent to your mail", {
          position: toast.POSITION.TOP_CENTER
        });
        setloading(false);
      } else {
        console.log(data);
        toast.error("Unable to send Mail", {
          position: toast.POSITION.TOP_CENTER
        });
        setloading(false);
      }
    } catch (error) {
      toast.error("Connection failed try again later !", {
        position: toast.POSITION.TOP_CENTER
      });
      setloading(false);
    }
  }
  const handlesubmit = async () => {
    setloading(true);
    try {
      var vals = '';
      if (JSON.stringify(avatar) === JSON.stringify(vals)) {
        vals = user.avatar;
      } else {
        vals = avatar;
      }
      const token = localStorage.getItem('token');
      const res = await fetch(`api/users/update/id=${user._id}`, {
        method: 'POST',
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
          avatar: vals,
        })
      })
      const data = await res.json();
      if (data.success) {
        setloading(false);
        router.replace('/seller-profile')
      }
    } catch (error) {
      setloading(false);
    }
  }
  if (loading === true) {
    return (
      <>
        <ToastContainer />
        <center> <h3>Please wait...</h3>   </center>
      </>
    )
  }
  return (
    <>
      <ToastContainer />
      {user && <section
        className="instructor-portfolio pt-10 mb-10 wow fadeInUp"
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
                    {user && user.avatar && user.avatar !== "" ? <img
                      src={`${user.avatar}`}
                      alt="instructor-thumb"
                    /> : <img
                      src="https://as1.ftcdn.net/v2/jpg/03/53/11/00/1000_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg"
                      alt="instructor-thumb"
                    />}
                    <input onChange={creatingavatarimages} type="file" accept='image/*' /> <br />
                    {avatar ? <p>New Profile: </p> : <div />}
                    {avatar && avatar !== "" ? <img width={100} height={100} src={avatar} /> : <div />}
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
                        <li className="checkout-form-list" style={{ display: "flex", flexDirection: "column" }}>
                          <div style={{ display: "flex", justifyContent: 'start', alignItems: "center" }}>
                            <i className="fi fi-rr-briefcase"></i>{" "}
                            <label>Change First Name: </label>
                          </div>
                          <input onChange={(e) => { setFirstname(e.target.value) }} style={{ marginLeft: "1rem", marginTop: "1rem", width: "100%" }} type="text" value={firstname !== '' ? firstname : ""} placeholder="Enter the First Name" />
                        </li>
                        <li className="checkout-form-list" style={{ display: "flex", flexDirection: "column" }}>
                          <div style={{ display: "flex", justifyContent: 'start', alignItems: "center" }}>
                            <i className="fi fi-rr-briefcase"></i>{" "}
                            <label>Change Last Name: </label> </div>
                          <input onChange={(e) => { setLastname(e.target.value) }} style={{ marginLeft: "1rem", marginTop: "1rem", width: "100%" }} type="text" value={lastname !== '' ? lastname : ""} placeholder='Enter the Last Name' />
                        </li>

                        <li className="checkout-form-list" style={{ display: "flex", flexDirection: "column" }}>
                          <div style={{ display: "flex", justifyContent: 'start', alignItems: "center" }}>
                            <i className="fi fi-rr-phone-call"></i>{" "}
                            <label>Phone Number</label> </div>
                          <input onChange={(e) => { setPhonenumber(e.target.value) }} style={{ marginLeft: "1rem", marginTop: "1rem", width: "100%" }} type="text" value={Phonenumber !== '' ? Phonenumber : ""} placeholder='Enter Phone number' />
                        </li>
                        <li className="checkout-form-list" style={{ display: "flex", flexDirection: "column" }}>
                          <div style={{ display: "flex", justifyContent: 'start', alignItems: "center" }}>
                            <i className="fi fi-rr-envelope"></i>{" "}
                            <label>Email:</label> </div>
                          <input disabled style={{ marginLeft: "1rem", marginTop: "1rem", width: "100%" }} type="text" value={email !== '' ? email : ""} />
                        </li>
                        <li className="checkout-form-list" style={{ display: "flex", flexDirection: "column" }}>
                          <div style={{ display: "flex", justifyContent: 'start', alignItems: "center" }}>
                            <i className="fa-brands fa-facebook-f"></i>{" "}
                            <label>FaceBook Link:</label> </div>
                          <input onChange={(e) => { setFacebook(e.target.value) }} style={{ marginLeft: "1rem", marginTop: "1rem", width: "100%" }} type="text" value={FaceBook !== '' ? FaceBook : ""} placeholder='Add Facebook Link' />
                        </li>

                        <li className="checkout-form-list" style={{ display: "flex", flexDirection: "column" }}>
                          <div style={{ display: "flex", justifyContent: 'start', alignItems: "center" }}>
                            <i className="fa-brands fa-twitter"></i>{" "}
                            <label>Twitter Link: </label> </div>
                          <input onChange={(e) => { setTwitter(e.target.value) }} style={{ marginLeft: "1rem", marginTop: "1rem", width: "100%" }} type="text" value={Twitter !== '' ? Twitter : ""} placeholder="Add Twitter Link" />
                        </li>
                        <li className="checkout-form-list" style={{ display: "flex", flexDirection: "column" }}>
                          <div style={{ display: "flex", justifyContent: 'start', alignItems: "center" }}>
                            <i className="fa-brands fa-instagram"></i>{" "}
                            <label>Instagram Link: </label> </div>
                          <input onChange={(e) => { setInstagram(e.target.value) }} style={{ marginLeft: "1rem", marginTop: "1rem", width: "100%" }} type="text" value={Instagram !== '' ? Instagram : ""} placeholder="Add Instagram Link" />
                        </li>
                        <li className="checkout-form-list" style={{ display: "flex", flexDirection: "column" }}>
                          <div style={{ display: "flex", justifyContent: 'start', alignItems: "center" }}>
                            <i className="fa-brands fa-youtube"></i>{" "}
                            <label>Youtube Link: </label> </div>
                          <input onChange={(e) => { setYoutube(e.target.value) }} style={{ marginLeft: "1rem", marginTop: "1rem", width: "100%" }} type="text" value={Youtube !== '' ? Youtube : ""} placeholder="Add Youtube Link" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-8 col-lg-7">
                <div className="instructor-main-content ml-30 mb-40">
                  <div className="instruc-biography">
                    <div className="cd-information instruc-profile-info mb-35">
                      <ul>
                        <li className="checkout-form-list" style={{ display: "flex", flexDirection: "column" }}>
                          <div style={{ display: "flex", justifyContent: 'start', alignItems: "center" }}>
                            <i className="fa fa-user"></i>{" "}
                            <label>Biography: </label> </div>
                          <textarea onChange={(e) => { setBiography(e.target.value) }} style={{ width: "100%", padding: "10px", borderRadius: "15px", marginTop: "10px" }} name="" id="" cols="30" rows="10" value={Biography !== '' ? Biography : ""} placeholder="Write About Yourself"></textarea>
                        </li>
                        <li className="checkout-form-list" style={{ display: "flex", flexDirection: "column" }}>
                          <div style={{ display: "flex", justifyContent: 'start', alignItems: "center" }}>
                            <i className="fa fa-address-card"></i>{" "}
                            <label>Adress: </label> </div>
                          <textarea onChange={(e) => { setLocation(e.target.value) }} style={{ width: "100%", padding: "10px", borderRadius: "15px", marginTop: "10px" }} name="" id="" cols="30" rows="4" value={Location !== '' ? Location : ""} placeholder="Your Location"></textarea>
                        </li>
                      </ul>
                    </div>
                    <center   >
                      <button className="tp-border-btn w-40" onClick={handlesubmit}   >update</button>   </center>
                    <center   >
                      <Popover placement="top">
                        <PopoverTrigger>
                          <div style={{ padding: "10px", backgroundColor: "#e34c4ced", borderRadius: "10px", color: "white", fontWeight: "bolder", marginTop: "1rem", cursor: "pointer", display: "flex", justifyContent: "center", alignItems: "center", width: "200px" }}><MdDelete size={20} /> &nbsp; Delete My Account</div>
                        </PopoverTrigger>
                        <PopoverContent>
                          <div className="px-1 py-2">
                            <div className="text-small font-bold" style={{ padding: "10px", backgroundColor: "white" }}>Are You Sure ? <br /> Your Ads also deleted by this action..!! &nbsp; <button onClick={handle_delete} style={{ backgroundColor: "#e34c4ced", padding: "10px", color: "white", borderRadius: "10px" }} >Yes</button></div>
                          </div>
                        </PopoverContent>
                      </Popover> </center>
                  </div>
                  <center> <br /> <br />
                    {user && !user.isverified ? <div>
                      <div className="col-md-3" style={{ width: "100%" }}>
                        <div className="checkout-form-list">
                          <label> Please get verified to continue  <span className="required">*</span></label>
                          <input onChange={(e) => { setverifymail(e.target.value) }} type="text" placeholder="Please Enter Email to verify" style={{ width: "100%" }} />
                        </div>

                      </div>
                      <div className="col-md-2">
                        <div className="order-button-payment mt-20">
                          <button onClick={handle_verify_link} className="tp-btn">Get Link</button>
                        </div>
                      </div>
                    </div> : <div> </div>}
                  </center>  <br />
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
