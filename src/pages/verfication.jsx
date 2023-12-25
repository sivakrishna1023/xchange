'use Client'
import React,{useState,useEffect} from 'react'
import Wrapper from '../layout/wrapper';
import SEO from '../common/seo';
import Breadcrumb from '../components/bredcrumb/breadcrumb';
import Link from 'next/link';

const verfication = () => {
  const get_me_verified= async()=>{
    const queryParams = new URLSearchParams(window.location.search);
    const token = queryParams.get('token');
    const email = queryParams.get('email');
       try{
        const res=await fetch(`/api/users/verify/id=${token}`,{
          method:'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              token,
              email,
           })
         })
         const data=await res.json();

       }catch(error){
        console.log(error);
       }
  }
  useEffect(() => {
    get_me_verified();
  }, []);
  return (
    <Wrapper>
    <SEO pageTitle={"verfication"} />
    <Breadcrumb title="Verification" subtitle="Verification" isDbbl="Pages" />
    <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", height:"40vh"}}>
    <h2>Your account has been veriﬁed</h2>
    <h2>Please re-click the link in the mail</h2>
    <Link href="/"><div style={{ padding: "10px", margin: "1px", backgroundColor: "#19ae50", borderRadius: "10px", color: "white", fontWeight: "bolder", marginTop: "1rem", cursor: "pointer", display: "flex", justifyContent: "center", alignItems: "center" }}>Continue posting ads</div></Link>
    </div>
  </Wrapper>
  )
}

export default verfication
