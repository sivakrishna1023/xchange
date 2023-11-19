import Link from "next/link";
import { useState } from "react";

const forgotpassword = () => {
  const [email, setemail] = useState('');
  const handler = async () => {
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
      if (data.success) {
        // toast.error("Reset Link send to your mail", {
        //     position: toast.POSITION.TOP_LEFT,
        //   });
      } else {
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
      <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", padding:"4rem 0"}}>
          <input
            className=" px-4 py-2 mb-4 rounded border border-gray-300 focus:outline-none focus:border-blue-500 focus:shadow-outline"
           style={{width:"80%"}}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            type="text"
            placeholder="Enter Mail to send verification link"
          />
          <br />
          <button style={{backgroundColor:"#19ae51", color:"white", padding:"0.5rem 1rem", width:"300px", borderRadius:"10px"}}
            onClick={handler}
          >
            Get Link
          </button>
      </div>
  )
}

export default forgotpassword