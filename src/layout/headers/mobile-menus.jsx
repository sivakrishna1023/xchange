'use client'
import Link from "next/link";
import React, { useContext, useState,useEffect } from "react";
import { Context } from "@/src/components/Clients/clientcomponents";
// internal
import menu_data from "./menu-data";
import { CiCircleChevDown } from "react-icons/ci";

const MobileMenus = () => {
  const [navTitle, setNavTitle] = useState("");
  const {user,setUser}=useContext(Context);
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])
  //openMobileMenu
  const openMobileMenu = (menu) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };
  return (
    <>
      <nav className="mean-nav">
        <ul>
        <li> <Link href="/" >Home</Link> </li>
          {menu_data.map((menu, i) => (
            <React.Fragment key={i}>
              {menu.has_dropdown && (
                <li className="has-dropdown">
                  <Link href={menu.link}>{menu.title}</Link>
                  <ul
                    className="submenu"
                    style={{
                      display: navTitle === menu.title ? "block" : "none",
                    }}
                  >
                    {menu.sub_menus.map((sub, i) => (
                      <li key={i}>
                        <Link href={sub.link}>{sub.title}</Link>
                      </li>
                    ))}
                  </ul>
                  <a
                    className={`mean-expand ${
                      navTitle === menu.title ? "mean-clicked" : ""
                    }`}
                   
                    onClick={() => openMobileMenu(menu.title)}
                    style={{ fontSize: "18px", cursor: "pointer", display:"flex", justifyContent:"center", alignItems:"center", border:"none" }}
                  >
                    <CiCircleChevDown size={30} />
                  </a>
                </li>
              )}
              {!menu.has_dropdown && (
                <li>
                  <Link href={menu.link}>{menu.title}</Link>
                </li>
              )}

            </React.Fragment>
          ))}
              {isClient && token ? <li> <Link href={'seller-profile'}  >Profile</Link> </li> : <li> <Link href={'sign-in'}  >Sign In</Link> </li>}    
              {isClient && token ? <li></li> : <li> <Link href={'register'}  >Get Started</Link> </li> }
        </ul>
      </nav>
    </>
  );
};

export default MobileMenus;
