'use Client'
import React,{useState,useEffect} from 'react'
import Wrapper from '../layout/wrapper';
import SEO from '../common/seo';
import Breadcrumb from '../components/bredcrumb/breadcrumb';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const verfication = () => {
  const [loading,setloading]=useState(false);
  const [verified,setverified]=useState(false);
  const router = useRouter();
  useEffect(() => {
    const queryParams = router.query;
    const get_me_verify= async()=>{
      if (queryParams.token && queryParams.email) {
        const { token, email } = queryParams;
        console.log(email);
        console.log(token);
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
            console.log(data);
                const message = data.message ? data.message :"Success";
                toast.success(message, {
                  position: toast.POSITION.TOP_CENTER,
                });
                setloading(false);
                if(data.verified){
                  setverified(data.verified);
                }
           }else{
            const message = data.message ? data.message :"Success";
            toast.error(message, {
              position: toast.POSITION.TOP_CENTER,
            });
           }

         }catch(error){
          console.log(error);
          setloading(false);
          const message = data.message ? data.message :"Failed";
          toast.error(message, {
            position: toast.POSITION.TOP_CENTER,
          });
         }
      }
      setloading(false);
    }
    get_me_verify();
  }, [router.query]);
  if(loading===true){
    return (
    <>
    <ToastContainer /> 
    <Wrapper>
    <SEO pageTitle={"verfication"} />
    <Breadcrumb title="Verification" subtitle="Verification" isDbbl="Pages" />
    <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", height:"30vh"}}> <br /> <br /> <br />
    <h4>Please Wait...!!</h4>
    </div>
    </Wrapper>
    </>
    )
  }
  return (
    <> <ToastContainer /> 
    <Wrapper>
    <SEO pageTitle={"verfication"} />
    <Breadcrumb title="Verification" subtitle="Verification" isDbbl="Pages" />
    <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", height:"30vh"}}>
      {
      !verified ? ( <div><h4>Failed to Verify</h4> </div> ) 
      :(
        <Link href="/post-ad"><div style={{ padding: "10px", margin: "1px", backgroundColor: "#19ae50", borderRadius: "10px", color: "white", fontWeight: "bolder", marginTop: "1rem", cursor: "pointer", display: "flex", justifyContent: "center", alignItems: "center" }}>Continue posting ads</div></Link>
      )
      }
    </div>
    </Wrapper>
    </>
  )
}

export default verfication
