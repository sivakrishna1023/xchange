'use Client'
import useSticky from "@/hooks/use-sticky";
import Link from "next/link";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useRouter } from 'next/router';
import NavMenu from "./nav-menu";
import Sidebar from "./sidebar";
import { Context } from "@/src/components/Clients/clientcomponents";
import NavMenu2 from "./nav-menu2";
import { Popover, PopoverTrigger, PopoverContent, Button } from "@nextui-org/react";
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
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
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
    { id: 24, name: 'Adilabad' },
    { id: 25, name: 'Kumurambheem Asifabad' },
    { id: 26, name: 'Nirmal' },
    { id: 27, name: 'Mancherial' },
    { id: 28, name: 'Nizamabad' },
    { id: 29, name: 'Jagtial' },
    { id: 30, name: 'Peddapalli' },
    { id: 31, name: 'Kamareddy' },
    { id: 32, name: 'Rajanna Sircilla' },
    { id: 33, name: 'Karimnagar' },
    { id: 34, name: 'Jayashankar Bhupatpally' },
    { id: 35, name: 'Sangarreddy' },
    { id: 36, name: 'Medak' },
    { id: 37, name: 'Siddipet' },
    { id: 38, name: 'Hanumakonda' },
    { id: 39, name: 'Warangal Rural' },
    { id: 40, name: 'Mulugu' },
    { id: 41, name: 'Vikarabad' },
    { id: 42, name: 'Hyderabad' },
    { id: 43, name: 'Medchal Maikajgiri' },
    { id: 44, name: 'Jangaon' },
    { id: 45, name: 'Mahabubabad' },
    { id: 46, name: 'Bhadradri Knthagudem' },
    { id: 47, name: 'Narayanpet' },
    { id: 48, name: 'Mahabubnagar' },
    { id: 49, name: 'Rangareddy' },
    { id: 50, name: 'Yadadri Bhuvanagiri' },
    { id: 51, name: 'Suryapet' },
    { id: 52, name: 'Khanmmam' },
    { id: 53, name: 'Jogulamba Gadwal' },
    { id: 54, name: 'Wanaparthy' },
    { id: 55, name: 'Nagarkurnool' },
    { id: 56, name: 'Nalgonda' },
    { id: 57, name: 'Malakpet' },
    { id: 58, "name": "Panjagutta" },
{ id: 59, "name": "Irrum Manzil" },
{ id: 60, "name": "Khairatabad" },
{ id: 61, "name": "Lakdi-ka-pul" },
{ id: 62, "name": "Assembly" },
{ id: 63, "name": "Nampally" },
{ id: 64, "name": "Gandhi Bhavan" },
{ id: 65, "name": "Osmania Medical College" },
{ id: 66, "name": "MG Bus Station" },
{ id: 67, "name": "New Market" },
{ id: 68, "name": "Musarambagh" },
{ id: 69, "name": "Dilsukhnagar" },
{ id: 70, "name": "Chaitanyapuri" },
{ id: 71, "name": "Nagole" },
{ id: 72, "name": "Uppal" },
{ id: 73, "name": "Stadium" },
{ id: 74, "name": "NGRI" },
{ id: 75, "name": "Habsiguda" },
{ id: 76, "name": "Tarnaka" },
{ id: 77, "name": "Mettuguda" },
{ id: 78, "name": "Secunderabad" },
{ id: 79, "name": "Parade Ground" },
{ id: 80, "name": "Raipur" },
{ id: 81, "name": "Bhilai" },
{id: 82, "name": "Durg" },
{ id: 83, "name": "Bilaspur" },
{ id: 84, "name": "Korba" },
{ id: 85, "name": "Naya Raipur" },
{ id: 86, "name": "Vishakapatnam" },
{ id: 87, "name": "Srikakulam" },
{ id: 88, "name": "Ichapuram" },
{ id: 89, "name": "Sompeta" },
{ id: 90, "name": "Palasa" },
{ id: 91, "name": "Tekkali" },
{ id: 92, "name": "Kotabommali" },
{ id:93, "name": "Budithi" },
{ id: 94, "name": "Narasannapeta" },
{ id: 95, "name": "Kotturu" },
{ id: 96, "name": "Paralakhemundi" },
{ id: 97, "name": "Seethampeta" },
{ id: 98, "name": "Palakonda" },
{ id: 99, "name": "Razam" },
{ id: 100, "name": "Ranasthalam" },
{ id: 101, "name": "Cheepuripalli" },
{ id: 102, "name": "Gajapatinagaram" },
{ id: 103, "name": "Vizianagaram" },
{ id: 104, "name": "Nellimarla" },
{ id: 105, "name": "Thagarapuvalasa" },
{ id: 106, "name": "Bheemunipatnam" },
{ id: 107, "name": "Madhurawada" },
{ id: 108, "name": "kothavalasa" },
{ id: 109, "name": "Chodavaram" },
{ id: 110,"name": "Anakapalle" },
{ id: 111, "name": "Yelamanchili"},
{ id: 112, "name": "Narsipatnam" },
{ id: 113, "name": "Kothakota" },
{ id: 114, "name": "Nakkapalle" },
{ id: 115, "name": "Tuni" },
{ id: 116, "name": "Annavaram" },
{ id: 117, "name": "Pithapuram" },
{ id: 118, "name": "Samalkot" },
{ id: 119, "name": "Kakinada" },
{ id: 120, "name": "Rajanagaram" },
{ id: 121, "name": "Korukonda" },
{ id: 122, "name": "Rajamundry" },
{ id: 123, "name": "Amalapuram" },
{ id: 124, "name": "Tanuku" },
{ id: 125, "name": "Tadepalligudem" },
{ id: 126, "name": "Nidadavole" },
{ id: 127, "name": "Dwaraka Tirumala" },
{ id: 128, "name": "Bhimavaram" },
{ id: 129, "name": "Eluru" },
{ id: 130, "name": "Gudivada" },
{ id: 131, "name": "Vijayawada" },
{ id: 132, "name": "Machilipatnam" },
{ id: 133, "name": "Guntur" },
{ id: 134, "name": "Narasaraopet" },
{ id: 135, "name": "Ongole" },
{ id: 136, "name": "Nellore" },
{ id: 137, "name": "Chirala" },
{ id: 138, "name": "Kadapa" },
{ id: 139, "name": "Tirupathi"},
{ id: 140, "name": "Nandyal" },
{ id: 141, "name": "Kurnool" },
{ id: 142, "name": "Anantapur"},
{ id: 143, "name": "Tadipatri" },
{ id: 144, "name": "Madanapalli" },
{ id: 145, "name": 'NIT Raipur' }
];

  const handleOnSelect = (item) => {
    setSelectedCity(item.name);
    setSelectedLocation(item.name);
    localStorage.setItem('my_city', `${item.name}`);
    setIsPopoverOpen(false);
  }

  const popupRef = useRef();
  const [mycity, setmycity] = useState('');
  useEffect(() => {
    var value = localStorage.getItem('my_city');
    setmycity(value);
  }, [selectedLocation])
  useEffect(() => {
    var value = localStorage.getItem('my_city');
    setmycity(value);
    setSelectedCity(value);
    setSelectedLocation(value);
    // Check if the popup has already been shown
    const popupShownBefore = localStorage.getItem('popupShownBefore');

    // If the popup has not been shown before, open it and set the flag in localStorage
    if (!popupShownBefore && popupRef.current) {
      popupRef.current.open();
      localStorage.setItem('popupShownBefore', 'true');
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
                  <div style={{ display: 'flex' }}>
                    <div className="main-menu d-flex justify-content-end">
                      <nav id="mobile-menu" className="d-none d-xl-block">
                        <NavMenu />
                      </nav>
                      {/* <Link href={user._id ? "/post-ad" : "/sign-in"} style={{ padding: "15px", margin: "10px 0", fontFamily: "sans-serif", backgroundColor: "rgba(255, 255, 255, 0.1)", display: "flex", justifyContent: "center", alignItems: "center", border: "1px solid white" }} className="tp-btn">SELL</Link> */}
                      <Popover placement="bottom" isOpen={isPopoverOpen} onClose={() => setIsPopoverOpen(false)}>
                        <PopoverTrigger>
                          <div
                            style={{
                              padding: "10px",
                              margin: "10px 0 10px 10px",
                              fontFamily: "sans-serif",
                              backgroundColor: "rgba(255, 255, 255, 0.1)",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              border: "1px solid white",
                              cursor: 'pointer'
                            }}
                            className="tp-btn"
                            onClick={() => setIsPopoverOpen(true)}
                          >
                            {mycity ? mycity : 'Location'}
                          </div>
                        </PopoverTrigger>
                        <PopoverContent>
                          <div className="bg-white" style={{ padding: 5, width: '400px' }}>
                            <ReactSearchAutocomplete
                              items={cities}
                              onSearch={handleOnSearch}
                              onSelect={handleOnSelect}
                              autoFocus
                              formatResult={formatResult}
                              placeholder="Enter Your City Here"
                            />
                          </div>
                        </PopoverContent>
                      </Popover>
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
