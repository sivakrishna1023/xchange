import React, { createContext, useContext, useState } from 'react';

// Creating a context to manage first_time state
const FirstTimeContext = createContext();

// Custom hook to consume the FirstTimeContext
export const useFirstTimeContext = () => {
  return useContext(FirstTimeContext);
};

// Provider component to wrap around the application, providing first_time state
export const FirstTimeContextProvider = ({ children }) => {
  // State to manage the first_time state
  const [first_time, setFirstTime] = useState(true);

  return (
    // Providing the first_time state and its setter function to children components
    <FirstTimeContext.Provider value={{ first_time, setFirstTime }}>
      {children}
    </FirstTimeContext.Provider>
  );
};
