import React, { useState, createContext, useContext, useEffect } from "react";

export const Context = createContext({ user: {} });

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");

      fetch("/api/users/me", {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setUser(data.user);
      });
    }
  }, []);

  return (
    <Context.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </Context.Provider>
  );
};
