'use client'
import Link from "next/link";
import React,{useContext} from "react";
import { useState } from "react";
import { Context } from "../Clients/clientcomponents";
import { redirect } from 'next/navigation';
import { useRouter } from 'next/router';
const RegisterhtmlForm = () => {
  const {user,setUser}=useContext(Context);
  const [firstname,setfirstname]=useState('')
  const [lastname,setlastname]=useState('');
  const [email,setemail]=useState('');
  const [password,setpassword]=useState('');
  const router= useRouter();
  const handlesubmit= async(e)=>{
    e.preventDefault();
    try{
        const res= await fetch('/api/users/Register',{
         method:'POST',
         headers: {
           'Content-Type': 'application/json' 
         },
         body: JSON.stringify({
           firstname,
           lastname,
           email,
           password,
         })
        })
        const data=await res.json();
        console.log(data);
        if(data.success){
             setUser(data.user);
        }
    }catch(error){
      console.log(error);
    }
  }
  // if(user._id)  return  redirect('/');
  if(user._id) {
    router.push('/');
    return null;
  }

  return (
    <>
      <section
        className="login-area pt-100 pb-100 wow fadeInUp"
        data-wow-duration=".8s"
        data-wow-delay=".5s"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="basic-login">
                <h3 className="text-center mb-60">Sign up From Here</h3>
                <form onSubmit={handlesubmit}>
                  <label htmlFor="name">
                    First Name <span>**</span>
                  </label>
                  <input  required onChange={(e)=>{setfirstname(e.target.value)}} id="name" type="text" placeholder="First Name" />
                  <label htmlFor="name">
                    Last Name <span>**</span>
                  </label>
                  <input  required onChange={(e)=>{setlastname(e.target.value)}} id="name" type="text" placeholder="Last Name" />
                  <label htmlFor="email-id">
                    Email Address <span>**</span>
                  </label>
                  <input
                    required
                    id="email-id"
                    type="text"
                    placeholder="Email address..."
                    onChange={(e)=>{setemail(e.target.value)}}
                  />
                  <label htmlFor="pass">
                    Password <span>**</span>
                  </label>
                  <input
                    required
                    id="pass"
                    type="password"
                    placeholder="Enter password..."
                    onChange={(e)=>{setpassword(e.target.value)}}
                  />
                  <div className="mt-10"></div>
                  <button className="tp-btn w-100">Register Now</button>
                  <div className="or-divide">
                    <span>or</span>
                  </div>
                  <Link href="/sign-in" className="tp-border-btn w-100">
                    login Now
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterhtmlForm;
