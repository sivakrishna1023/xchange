'use Client'
import React,{useState,useEffect} from 'react'
import Wrapper from '../layout/wrapper';
import SEO from '../common/seo';
import Breadcrumb from '../components/bredcrumb/breadcrumb';
import Link from 'next/link';
import { useRouter } from 'next/router';

const verfication = () => {
  const [loading,setloading]=useState(false);
  const [verified,setverified]=useState(false);
  const router = useRouter();
  const get_me_verified=async()=>{
    const queryParams = router.query;
    const token = queryParams.token;
    const email = queryParams.email;
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
              setloading(false);
              setverified(true);
         }
       }catch(error){
        setloading(false);
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
    <Breadcrumb title="Verification" subtitle="Verification" isDbbl="Pages" />
    <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", height:"30vh"}}> <br /> <br /> <br />
    <h4>Please Wait...!!</h4>
    </div>
    </Wrapper>
    )
  }
  return (
    <Wrapper>
    <SEO pageTitle={"verfication"} />
    <Breadcrumb title="Verification" subtitle="Verification" isDbbl="Pages" />
    <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", height:"30vh"}}>
      {
      !verified ? ( <div><h4>Failed to Verify</h4>
      <h4>  <button style={{color:"blue"}}  onClick={()=>get_me_verified()}> Click here </button> to try again</h4> </div> ) 
      :(
        <Link href="/post-ad"><div style={{ padding: "10px", margin: "1px", backgroundColor: "#19ae50", borderRadius: "10px", color: "white", fontWeight: "bolder", marginTop: "1rem", cursor: "pointer", display: "flex", justifyContent: "center", alignItems: "center" }}>Continue posting ads</div></Link>
      )
      }
    </div>
    </Wrapper>
  )
}

export default verfication
