'use client'

import { useState,createContext, useContext,useEffect} from "react";

export const  Context= createContext({user:{}});

export const ContextProvider=({children})=>{
    const [user,setUser]=useState({});
    useEffect(() => {
      fetch("/api/users/me")
        .then((res) => res.json())
        .then((data) => {
          if (data.success) setUser(data.user);
        });
    }, []);
    return ( <Context.Provider
    value={{
        user,
        setUser,
        }} >
    {children}
    </Context.Provider> )
}
