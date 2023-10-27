import MapArea from "@/src/common/map-area";
import React from "react";
import Breadcrumb from "../bredcrumb/breadcrumb";
import ContactForm from "../form/contact-form";
import CounterArea from "../homes/home-3/counter-area";
import LocationArea from "./location-area";

const Contact = () => {
  return (
    <>
      <Breadcrumb  title="Contact Us" subtitle="contact" />
      <LocationArea />
      <ContactForm />
      {/* <MapArea /> */}
      <CounterArea />
    </>
  );
};

export default Contact;
