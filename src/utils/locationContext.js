import React, { createContext, useContext, useState } from 'react';

 
const LocationContext = createContext();

export const useLocationContext = () => {
  return useContext(LocationContext);
};

export const LocationContextProvider = ({ children }) => {
  const [selectedLocation, setSelectedLocation] = useState('India');

  return (
    <LocationContext.Provider value={{ selectedLocation, setSelectedLocation}}>
      {children}
    </LocationContext.Provider>
  );
};