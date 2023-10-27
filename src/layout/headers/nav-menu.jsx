import Link from "next/link";
import React, { useContext } from "react";
import menu_data from "./menu-data";
import { Context } from "@/src/components/Clients/clientcomponents";
const NavMenu = () => {
  const {user,setUser}=useContext(Context);
  return (
    <>
      <ul>
      <li className="dropdown"> <Link href={'/'}>Home</Link> </li> 
        {menu_data.map((item) => (
          <li key={item.id} className="has-dropdown"> 
            <Link href={item.link}>{item.title}</Link>
            <ul className="submenu">
              {  item.sub_menus  &&  item.sub_menus.map((sub, i) => (
                <li key={i}>
                  <Link href={sub.link}>{sub.title}</Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
         {user._id ? <li className="dropdown"> <Link href={'seller-profile'}  >Profile</Link> </li> : <li className="dropdown"  > <Link href={'sign-in'}  >Sign In</Link> </li>}    
         {user._id? <li className="dropdown"  ></li> : <li className="dropdown"  > <Link href={'register'}  >Get Started</Link> </li> }
      </ul>
    </>
  );
};

export default NavMenu;
