'use Client'
import useSticky from "@/hooks/use-sticky";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from 'next/router';
import NavMenu from "./nav-menu";
import Sidebar from "./sidebar";
import { Context } from "@/src/components/Clients/clientcomponents";
import NavMenu2 from "./nav-menu2";
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import { IoIosCloseCircle } from "react-icons/io";
  
const Header = () => {
  const cities = [
    { id: 1, name: 'Delhi' },
    { id: 2, name: 'Mumbai' },
    { id: 3, name: 'Kolkata' },
    // Add more cities as needed
  ];

  // State to store the selected city
  const [selectedCity, setSelectedCity] = useState('');

  // Event handler for changing the selected city
  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };
  const [isMobile, setIsMobile] = useState(false);
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  const isAdListRoute = router.pathname === '/ad-list';

  const handleSearch = () => {
    if (searchText !== '') {
      window.location.href = `/ad-list?select=${searchText}`;
    }
  }
  const handlesubmit = ()=>{
    console.log(selectedCity);
  }
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const { sticky } = useSticky();
  const [isActive, setIsActive] = useState(false);
  const { user } = useContext(Context);
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

  return (
    <>
      <header className="header__transparent ">
        <div className="header__area">
          <div className={`main-header header-xy-spacing ${sticky ? "header-sticky" : ""}`} id="header-sticky">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-xxl-3 col-xl-3 col-lg-5 col-md-6 col-6">
                  <div className="logo-area d-flex align-items-center">
                    <div className="logo">
                      <Link href="/">
                        <img src="/assets/img/logo/logo.png" alt="logo" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-9 col-xl-9 col-lg-7 col-md-6 col-6 d-flex align-items-center justify-content-end">
                  {(isMobile || isAdListRoute) ? (
                    <div >

                    </div>
                  ) : (
                    <div style={{ marginRight: "1rem", position: "relative" }}>
                      <i className="fa fa-search" style={{ position: "absolute", right: "20px", top: "8px", color: "#5A5A5A", fontSize: "20px", cursor: "pointer" }} onClick={handleSearch}></i>
                      <input style={{ width: "300px", borderRadius: "15px", border: "none", padding: "7px 20px", marginRight: "0.5rem" }} type="text" placeholder="Search..." onChange={(e) => { setSearchText(e.target.value) }} />
                      {console.log(searchText)}
                    </div>
                  )}
                  <div className="main-menu d-flex justify-content-end">
                    <nav id="mobile-menu" className="d-none d-xl-block">
                      <NavMenu />
                    </nav>
                    <Link href={user._id ? "/post-ad" : "/sign-in"}  style={{ padding: "15px", margin: "10px 0", fontFamily: "sans-serif", backgroundColor: "rgba(255, 255, 255, 0.1)", display: "flex", justifyContent: "center", alignItems: "center", border: "1px solid white" }} className="tp-btn">SELL</Link>
                    <Popup trigger={<button style={{ padding: "15px", margin: "10px 0 10px 10px", fontFamily: "sans-serif", backgroundColor: "rgba(255, 255, 255, 0.1)", display: "flex", justifyContent: "center", alignItems: "center", border: "1px solid white" }} className="tp-btn">Location</button>} modal>
        {close => (<div style={{ height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', borderRadius: '20px' }}>
          <button onClick={close} style={{ position: 'absolute', top: '0', right: '0' }}><IoIosCloseCircle size={30} /></button>
          <button onClick={handlesubmit}  style={{ position: 'absolute', bottom: '0', right: '0', padding: '10px 15px', margin: '1rem', borderRadius: '10px', backgroundColor: '#19ae51', color: 'white', fontWeight: '600' }}>Confirm</button>
          <label style={{ fontSize: '20px' }}>
            Choose your location
            <select  onChange={handleCityChange} style={{ backgroundColor: 'white', padding: '10px 15px', margin: '1rem', borderRadius: '10px' }}>
              <option value="">Select a city</option>
              {cities.map((city) => (
                <option key={city.id} value={city.name}>
                  {city.name}
                </option>
              ))}
            </select>
          </label>
        </div>
        )}
      </Popup>
                  </div>
                  <div className="header-right d-md-flex align-items-center">
                    <div className="header-meta">
                      <ul>
                        <div style={{ display: "flex" }}>
                          <li style={{ margin: "0" }}>
                            <a onClick={() => setIsActive(true)} href="#" className="tp-menu-toggle d-xl-none">
                              <i className="icon_ul"></i>
                            </a>
                          </li>
                        </div>

                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 d-flex align-items-center justify-content-md-end justify-content-lg-center">
                  <div className="main-menu d-flex justify-content-end">
                    <nav id="mobile-menu" className="d-none d-xl-block">
                      <NavMenu2 />
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Sidebar isActive={isActive} setIsActive={setIsActive} />
    </>
  );
};

export default Header;
