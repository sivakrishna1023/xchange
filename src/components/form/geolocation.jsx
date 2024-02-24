import React,{ useEffect } from "react";

function CityLocator() {
    useEffect(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showCity);
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    }, []);
  
    function showCity(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const api_key='_66x00GShtCezTFxge4HsH8rxafcTbrD9agSbnVk0L4';
      console.log(latitude);
      console.log(longitude);
      // Making a request to a Geocoding API 
      const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${api_key}`;
  
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          // Parse the city name from the API response
          const city = data.results[0].address_components.find((component) =>
            component.types.includes("locality")
          ).long_name;
  
          console.log(`Your city is ${city}.`);
        })
        .catch((error) => console.log(error));
    }
  
    return (
      <div>
      </div>
    );
  }
  export default CityLocator;