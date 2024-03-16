'use client'
import { animationCreate } from "@/utils/utils";
import React, {useContext, useEffect} from "react";
import BackToTop from "../lib/BackToTop";
import Footer from "./footers/footer";
import Header from "./headers/header";
import { Context, ContextProvider } from "../components/Clients/clientcomponents";
import FeedbackBox from "../lib/FeedbackBox";
import { LocationContextProvider } from "../utils/locationContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {NextUIProvider} from "@nextui-org/react";
import SellBox from "../lib/SellBox";
const Wrapper = ({ children }) => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate()
    }, 500);
  },[])
  return (
    <>
    <LocationContextProvider>
    <NextUIProvider>
      <ContextProvider>
      <Header />
      <ToastContainer/>
      {children}
      <Footer />
      <BackToTop/>
      <FeedbackBox/>
      <SellBox/>
      </ContextProvider>
      </NextUIProvider>
      </LocationContextProvider>
    </>
  );
};

export default Wrapper;
