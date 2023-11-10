'use Client'
import React,{useState,useEffect} from 'react'

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
    <div>
      <center>   Verifying.....!!   </center> 
    </div>
  )
}

export default verfication
