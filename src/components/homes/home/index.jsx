import React, { useState } from "react";
import AboutArea from "./about-area";
import CategoryArea from "./category-area";
import ChooseArea from "./choose-area";
import CounterArea from "../../../common/counter-area";
import CourseArea from "./course-area";
import FeatureArea from "./feature-area";
import HeroBanner from "./hero-banner";
import InstructorArea from "../../../common/seller-area";
import SuitableArea from "../../../common/suitable-area";
import TestimonialArea from "./testimonial-area";
import BlogArea from "./blog-area";
import BrandArea from "../../../common/brand-area";
import FeedbackBox from "@/src/lib/FeedbackBox";
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import { IoIosCloseCircle } from "react-icons/io";

const Home = () => {
  const cities = [
    { id: 1, name: 'Delhi' },
    { id: 2, name: 'Mumbai' },
    { id: 3, name: 'Kolkata' },
    // Add more cities as needed
  ];

  // State to store the selected city
  const [selectedCity, setSelectedCity] = useState('');

  // Event handler for changing the selected city
  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };
  return (
    <>
      <HeroBanner />
      <Popup trigger={<button>Choose Location</button>} modal>
        {close => (<div style={{ height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', borderRadius: '20px' }}>
          <button onClick={close} style={{ position: 'absolute', top: '0', right: '0' }}><IoIosCloseCircle size={30} /></button>
          <button style={{ position: 'absolute', bottom: '0', right: '0', padding: '10px 15px', margin: '1rem', borderRadius: '10px', backgroundColor: '#19ae51', color: 'white', fontWeight: '600' }}>Confirm</button>
          <label style={{ fontSize: '20px' }}>
            Choose your location
            <select value={selectedCity} onChange={handleCityChange} style={{ backgroundColor: 'white', padding: '10px 15px', margin: '1rem', borderRadius: '10px' }}>
              <option value="">Select a city</option>
              {cities.map((city) => (
                <option key={city.id} value={city.name}>
                  {city.name}
                </option>
              ))}
            </select>
          </label>
        </div>
        )}
      </Popup>
      <CategoryArea />
      <CourseArea />
      <FeatureArea />
      <AboutArea />
      <InstructorArea />
      <ChooseArea />
      {/* <CounterArea /> */}
      {/* <TestimonialArea /> */}
      {/* <BlogArea /> */}
      {/* <BrandArea style_1={true} /> */}
    </>
  );
};

export default Home;
