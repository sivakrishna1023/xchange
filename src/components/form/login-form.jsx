"use client";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Link from "next/link";
import React, { useEffect } from "react";
import CityLocator from "./geolocation"
import { useState, useContext } from "react";
import { redirect } from "next/navigation";
import { Context } from "../Clients/clientcomponents";
import {  toast } from "react-toastify";
import { useRouter } from "next/router";
import Script from "next/script";


const LoginForm = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setloading] = useState(false);
  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };


  const { user, setUser } = useContext(Context);
  const router = useRouter();
  const handler = async (e) => {
    setloading(true);
    e.preventDefault();
    try {
      const res = await fetch("/api/users/Login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await res.json();
      if (data.success) {
        toast.success("Logged In Successfully !", {
          position: toast.POSITION.TOP_CENTER,
        });
        setUser(data.user);
        localStorage.setItem('token', data.token);
        setloading(false);
        setTimeout(() => {
          window.location.href = '/';
        }, 1000);
      } else {
        const message = data.message;
        if (message) {
          toast.error(message, {
            position: toast.POSITION.TOP_CENTER,
          });
        } else {
          toast.error("Failed to Login !", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
        setloading(false);
      }
    } catch (error) {
      setloading(false);
      toast.error("Internal Error Occured, Try Again After Sometimes !", {
        position: toast.POSITION.TOP_LEFT,
      });
    }
  };
  if (user._id) {
    <Script id="redirect">{`document.location.href="/";`}</Script>;
  }
  if (loading === true) {
    return (
      <>
        <center> <h3>Please wait...</h3>   </center>
      </>
    )
  }
  return (
    <>
      {/* <CityLocator/> */}
      <section
        className="login-area pt-5pb-100 wow fadeInUp"
        data-wow-duration=".8s"
        data-wow-delay=".5s"
      >

        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="basic-login">
                <h3 className="text-center mb-60">Login From Here</h3>
                <form onSubmit={handler}>
                  <label htmlFor="name">
                    Email<span>**</span>
                  </label>
                  <input
                    required
                    onChange={(e) => setemail(e.target.value)}
                    id="name"
                    type="email"
                    placeholder="Enter Email"
                  />

                  <label htmlFor="pass">
                    Password <span>**</span>
                  </label>
                  <div className="password-input" style={{ position: "relative" }}>
                    <input
                      required
                      onChange={(e) => setpassword(e.target.value)}
                      id="pass"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter password..."
                    />
                    <span
                      style={{ position: "absolute", top: "20%", right: "5%", cursor: "pointer" }}
                      className={`password-toggle ${showPassword ? "show" : "hide"
                        }`}
                      onClick={handlePasswordToggle}
                    >
                      {showPassword ? "Hide" : "Show"}
                    </span>
                  </div>

                  <div className="mt-10"></div>
                  <button className="tp-btn w-100">Login Now</button>
                  <div style={{ textAlign: "center", cursor: "pointer", color: "green", marginTop: "1rem" }}>
                    <Link href={`/forgotpassword`}   >forgot password</Link>
                  </div>
                  <div className="or-divide">
                    <span>or</span>
                  </div>
                  <Link href="/register" className="tp-border-btn w-100">
                    Register Now
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

export default LoginForm;
