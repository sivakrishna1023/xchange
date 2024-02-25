'use client'
import { animationCreate } from "@/utils/utils";
import React, {useContext, useEffect} from "react";
import BackToTop from "../lib/BackToTop";
import Footer from "./footers/footer";
import Header from "./headers/header";
import { Context, ContextProvider } from "../components/Clients/clientcomponents";
import FeedbackBox from "../lib/FeedbackBox";
import { LocationContextProvider } from "../utils/locationContext";
const Wrapper = ({ children }) => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate()
    }, 500);
  },[])
  return (
    <>
    <LocationContextProvider>
      <ContextProvider>
      <Header />
      {children}
      <Footer />
      <BackToTop/>
      <FeedbackBox/>
      </ContextProvider>
      </LocationContextProvider>
    </>
  );
};

export default Wrapper;
