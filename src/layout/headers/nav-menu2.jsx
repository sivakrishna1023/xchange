import Link from "next/link";
import React from "react";
import menu_data2 from "./menu-data2"; 
import { useRouter } from 'next/router';
const NavMenu2 = () => {
  const router = useRouter();
  const isAdListRoute = router.pathname === '/ad-list';
  return (
    <>
      {
        !isAdListRoute ? <div> <ul>
          <li className="dropdown"> <Link href={'/'}>Categories</Link> </li> 
        {menu_data2.map((item) => (
          <li key={item.id} className=""> 
            <Link href={item.link}>{item.title}</Link>
            <ul className="">
              {  item.sub_menus  &&  item.sub_menus.map((sub, i) => (
                <li key={i}>
                  <Link href={sub.link}>{sub.title}</Link>
                </li>
              ))}
            </ul>
          </li>
        ))} </ul>
        </div> :<div></div>
      }
     
    </>
  );
};

export default NavMenu2;
