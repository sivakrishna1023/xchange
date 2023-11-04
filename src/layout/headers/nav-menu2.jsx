import Link from "next/link";
import React from "react";
import menu_data2 from "./menu-data2";
const NavMenu2 = () => {
  return (
    <>
      <ul>
      <li className="dropdown"> <Link href={'/'}>Categories</Link> </li> 
        {menu_data2.map((item) => (
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
      </ul>
    </>
  );
};

export default NavMenu2;
