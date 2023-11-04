'use client'
import Link from 'next/link';
import React from 'react';
import { useState,useContext } from 'react';
import  {redirect } from 'next/navigation';
import { Context } from '../Clients/clientcomponents';
import { useRouter } from 'next/router';
import Script from 'next/script';
const LoginForm = () => {
   const [email,setemail]=useState('');
   const [password,setpassword]=useState('');
   const {user,setUser}=useContext(Context);
   const router=useRouter();
   const handler= async(e) => {
     e.preventDefault();
     try{
         console.log('Trying to Login...!!')
         console.log(email, password);
          const res=await fetch("/api/users/Login",{
           method:'POST',
           headers: {
             'Content-Type': 'application/json',
           },
           body: JSON.stringify({
             email,
             password,
           })
          })
         const data= await res.json();
         if(data.success){
              localStorage.setItem('token', data.token); console.log("i am clicked")
              setUser(data.user);
         }  
     }catch(error){
       console.log(error);
       toast.error("Failed to login")
     }
   };
    // if(user._id)  return  redirect('/');
  if(user._id){
    <Script id='redirect'>
        {`document.location.href="/";`}
    </Script>
  }

    return (
        <>
        <section className="login-area pt-100 pb-100 wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".5s">
         <div className="container">
               <div className="row">
                  <div className="col-lg-8 offset-lg-2">
                     <div className="basic-login">
                           <h3 className="text-center mb-60">Login From Here</h3>
                           <form onSubmit={handler}>
                              <label htmlFor="name">Email<span>**</span></label>
                              <input required onChange={(e)=>{setemail(e.target.value)}} id="name" type="email" placeholder="Enter Username" />
                              <label htmlFor="pass">Password <span>**</span></label>
                              <input required onChange={(e)=>{setpassword(e.target.value)}} id="pass" type="password" placeholder="Enter password..." />
                              <div className="mt-10"></div>
                              <button className="tp-btn w-100">login Now</button>
                              <div className="or-divide"><span>or</span></div>
							  <Link href="/register" className="tp-border-btn w-100">Register Now</Link>
                           </form>
                     </div>
                  </div>
               </div>
         </div>
      </section>
        </>
    );
};

export default LoginForm;