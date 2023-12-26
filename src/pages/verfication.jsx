'use Client'
import React,{useState,useEffect} from 'react'
import Wrapper from '../layout/wrapper';
import SEO from '../common/seo';
import Breadcrumb from '../components/bredcrumb/breadcrumb';
import Link from 'next/link';

const verfication = () => {
  const [loading,setloading]=useState(false);
  const [verified,setverified]=useState(false);
  const get_me_verified= async()=>{
    const queryParams = new URLSearchParams(window.location.search);
    const token = queryParams.get('token');
    const email = queryParams.get('email');
    setloading(true);
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
         if(data.success){
              setverified(data.verified);
         }
       }catch(error){
       }
    setloading(false);
  }
  useEffect(() => {
    get_me_verified();
  }, []);
  if(loading===true){
    return (
    <Wrapper>
    <SEO pageTitle={"verfication"} />
    <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", height:"40vh"}}>
    <h2>Please Wait...!!</h2>
    </div>
    </Wrapper>
    )
  }
  return (
    <Wrapper>
    <SEO pageTitle={"verfication"} />
    <Breadcrumb title="Verification" subtitle="Verification" isDbbl="Pages" />
    <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", height:"40vh"}}>
    {
      !verified && !loading ? ( <div><h2>Failed to Verify</h2>
      <h1>  <button onClick={get_me_verified()}> Click here </button> to try again</h1> </div> ) :(
         <div></div>
      )
    }
    {
      verified ? (
        <Link href="/"><div style={{ padding: "10px", margin: "1px", backgroundColor: "#19ae50", borderRadius: "10px", color: "white", fontWeight: "bolder", marginTop: "1rem", cursor: "pointer", display: "flex", justifyContent: "center", alignItems: "center" }}>Continue posting ads</div></Link>
      ) : (<div> </div> )
    }
    </div>
    </Wrapper>
  )
}

export default verfication
