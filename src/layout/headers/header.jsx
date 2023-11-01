'use Client'
import useSticky from "@/hooks/use-sticky";
import Link from "next/link";
import React, {useContext, useEffect, useState} from "react";
import NavMenu from "./nav-menu";
import Sidebar from "./sidebar";
import { Context } from "@/src/components/Clients/clientcomponents";
const Header = () => {
  const {sticky} = useSticky();
  const [isActive, setIsActive] = useState(false);
  const {user}=useContext(Context);
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
                    {/* <div className="header-cat-menu ml-40 d-none d-md-block">
                      <nav>
                        <ul>
                          <li>
                            <a href="#">
                              Categorie {" "}
                              <span>
                                <i className="arrow_carrot-down"></i>
                              </span>
                            </a>
                            <ul className="sub-menu">
                              {category_data.map((item, i) => 
                               <li key={i}>
                               <Link href="/course-grid">{item.title}</Link>
                             </li>
                              )}
                            </ul>
                          </li>
                        </ul>
                      </nav>
                    </div> */}
                  </div>
                </div>
                <div className="col-xxl-9 col-xl-9 col-lg-7 col-md-6 col-6 d-flex align-items-center justify-content-end">
                  <div className="main-menu d-flex justify-content-end mr-15">
                    <nav id="mobile-menu" className="d-none d-xl-block">
                      <NavMenu />
                    </nav>
                  </div>
                  <div className="header-right d-md-flex align-items-center">
                    {/* <div className="header__search d-none d-lg-block">
                      <form onSubmit={e => e.preventDefault()}>
                        <div className="header__search-input">
                          <button className="header__search-btn">
                            <i className="fa-regular fa-magnifying-glass"></i>
                          </button>
                          <input type="text" placeholder="Search Ads" />
                        </div>
                      </form>
                    </div> */}
                    <div className="header-meta">
                      <ul>
                        <li>
                          {/* <Button
                            // className="submenu"
                             className="bg-[#dfdfdf24] border-none rounded mr-3 text-[#fff]"
                            size="md"
                          >
                            <Link href={'sign-in'} >Sign in</Link>
                          </Button> */}
                          {/* <Link href="/sign-in" className="d-none d-md-block">
                            <i className="fi fi-rr-user"></i>
                          </Link> */}
                        </li>
                        {/* <li>
                          <Link href="/cart" className="d-none d-md-block">
                            <i className="fi fi-rr-shopping-bag"></i>
                          </Link>
                        </li> */}
                        <li>
                          <a onClick={() => setIsActive(true)}  href="#" className="tp-menu-toggle d-xl-none">
                            <i className="icon_ul"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
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
