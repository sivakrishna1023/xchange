'use Client'
import useSticky from "@/hooks/use-sticky";
import Link from "next/link";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useRouter } from 'next/router';
import NavMenu from "./nav-menu";
import Sidebar from "./sidebar";
import { Context } from "@/src/components/Clients/clientcomponents";
import NavMenu2 from "./nav-menu2";
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import { IoIosCloseCircle } from "react-icons/io";
import { useLocationContext } from "@/src/utils/locationContext";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

const formatResult = (item) => {
  return (
    <>
      {/* <span style={{ display: 'block', textAlign: 'left' }}>id: {item.id}</span> */}
      <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
    </>
  )
}

const handleOnSearch = (string, results) => {
  // onSearch will have as the first callback parameter
  // the string searched and for the second the results.
  console.log(string, results)
}

const Header = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const { selectedLocation, setSelectedLocation } = useLocationContext();
  const cities = [
    { id: 1, name: 'Miyapur' },
    { id: 2, name: 'JNTU College' },
    { id: 3, name: 'KPHB Colony' },
    { id: 4, name: 'Kukatpally' },
    { id: 5, name: 'Dr. B. R. Ambedkar Balanagar' },
    { id: 6, name: 'Moosapet' },
    { id: 7, name: 'Bharat Nagar' },
    { id: 8, name: 'Erragadda' },
    { id: 9, name: 'ESI Hospital' },
    { id: 41, name: 'S.R. Nagar' },
    { id: 10, name: 'Raidurg' },
    { id: 11, name: 'HITEC City' },
    { id: 12, name: 'Durgam Cheruvu' },
    { id: 13, name: 'Madhapur' },
    { id: 14, name: 'Peddamma Gudi' },
    { id: 15, name: 'Jubilee Hills Checks Post' },
    { id: 16, name: 'Jubilee Hills' },
    { id: 17, name: 'Yusufguda' },
    { id: 18, name: 'Madhura Nagar' },
    { id: 19, name: 'Ameerpet' },
    { id: 20, name: 'Kothapet' },
    { id: 21, name: 'Prashanthi Hills Nizampet' },
    { id: 22, name: 'L B Nagar' },
    { id: 23, name: 'Nizampet' },
  ];

  const handleOnSelect = (item) => {
    setSelectedCity(item.name);
    setSelectedLocation(item.name);
    console.log(item.name);
  }

  const popupRef = useRef(null); // Create a ref for the Popup component

  useEffect(() => {
    // You can trigger the popup in useEffect
    if (popupRef.current) {
      popupRef.current.open();
    }
  }, []);

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
                    <Link href={user._id ? "/post-ad" : "/sign-in"} style={{ padding: "15px", margin: "10px 0", fontFamily: "sans-serif", backgroundColor: "rgba(255, 255, 255, 0.1)", display: "flex", justifyContent: "center", alignItems: "center", border: "1px solid white" }} className="tp-btn">SELL</Link>
                    <Popup
                      trigger={
                        <Link
                          href={'/'}
                          style={{
                            padding: "15px",
                            margin: "10px 0 10px 10px",
                            fontFamily: "sans-serif",
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            border: "1px solid white"
                          }}
                          className="tp-btn"
                        >
                          {selectedLocation ? selectedLocation : 'Location'}
                        </Link>
                      }
                      modal
                      contentStyle={{ width: '80%', height: '150px', borderRadius: '20px' }}
                      ref={popupRef}
                    >
                      {(close) => (
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 5 }}>
                          <button onClick={close} style={{ position: 'absolute', top: '3', right: '3' }}>
                            <IoIosCloseCircle size={30} />
                          </button>
                          <div style={{ width: '100%', marginTop: 30 }}>
                            <ReactSearchAutocomplete
                              items={cities}
                              onSearch={handleOnSearch}
                              onSelect={handleOnSelect}
                              autoFocus
                              formatResult={formatResult}
                              placeholder="Enter Your City Here"
                            />
                          </div>
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
