import Link from "next/link";
import React, { useContext } from "react";
import menu_data from "./menu-data";
import { Context } from "@/src/components/Clients/clientcomponents";
const NavMenu = () => {
  const {user,setUser}=useContext(Context);
  var imagelink = 'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg';
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
         {user._id ?
          //  <div>
            <li className="dropdown">
               {user && user.avatar && user.avatar ? <img style={{ borderRadius: "50%", width:"40px", height:"40px", marginRight:"1rem" }} src={user.avatar} alt="instructor-thumb" /> : <img
                      src={imagelink}
                      style={{ borderRadius: "50%", width:"40px", height:"40px", marginRight:"1rem" }}
                      alt="instructor-thumb"
                    />}
            <Link href={'seller-profile'}  >
              {/* Profile */}
              {user.firstname}
              </Link> </li> 
            // </div>
           :
           <li className="dropdown"  > <Link href={'sign-in'}  >Sign In</Link> </li>
           }    
         {user._id? <li className="dropdown"  ></li> : <li className="dropdown"  > <Link href={'register'}  >Get Started</Link> </li> }
      </ul>
    </>
  );
};

export default NavMenu;
