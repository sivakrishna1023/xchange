'use client'
import React,{useState} from 'react'

const fogotpassword = () => {
  const [email,setemail]=useState('');
  const handler= async()=>{
    try {
      const res = await fetch("/api/users/password/settoken", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });
      const data = await res.json();
      console.log(data);
      if(data.success){
        // toast.error("Reset Link send to your mail", {
        //     position: toast.POSITION.TOP_LEFT,
        //   });
      }else{
        // toast.error("Error Try again Later", {
        //     position: toast.POSITION.TOP_LEFT,
        //   });
      }
    } catch (error) {
      console.log(error);
    //   toast.error("Internal Error Occured, Try Again After Sometimes !", {
    //     position: toast.POSITION.TOP_LEFT,
    //   });
    }
  }
  return (
    <div>
        <center>
        <div className="flex items-center justify-center h-screen p-1000">
  <div className="bg-gray-200 p-8 rounded shadow-md">
    <input
      className="w-full px-4 py-2 mb-4 rounded border border-gray-300 focus:outline-none focus:border-blue-500 focus:shadow-outline"
      onChange={(e) => {
        setemail(e.target.value);
      }}
      type="text"
      placeholder="Enter Mail to send verification link"
    /> <br></br>
    <button
      className="w-full bg-blue-500 hover:bg-blue-600 text-black font-bold py-2 px-4 rounded focus:outline-none"
      onClick={handler}
    >
      Get Link
    </button>
  </div>
</div>
</center>
</div>
  )
}

export default fogotpassword
