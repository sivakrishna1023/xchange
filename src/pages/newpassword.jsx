'use Client'
import React, { useState } from 'react'

const newpassword = () => {
  const [password,setpassword]=useState('');
  const handler= async ()=>{
    const queryParams = new URLSearchParams(window.location.search);
    const token = queryParams.get('token');
    const email = queryParams.get('email');
    try{
        const res=await fetch(`/api/users/password/id=${token}`,{
          method:'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              token,
              email,
              password,
           })
         })
         const data=await res.json();
         console.log(data);
       }catch(error){
        console.log(error);
    }
  }
  return (
    <div>
      <center>
        <input type="text" placeholder='Enter New Password' onChange={(e)=>{setpassword(e.target.value)}}/>
        <input type="text" placeholder='Confirm New Password' />
        <button onClick={handler}> submit </button>
      </center>
    </div>
  )
}

export default newpassword
