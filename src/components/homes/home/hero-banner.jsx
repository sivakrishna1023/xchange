import Link from 'next/link';
import React from 'react';

const HeroBanner = () => {
    return (
        <>
     <section className="banner-area fix p-relative">
         <div className="banner-bg"   style={{backgroundImage: `url(/assets/img/banner/banner-1.png)`}}>
            <div className="container">
               <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-8">
                     <div className="hero-content">
                        <span>Your Products Our Trust</span>
                        <h2 className="hero-title mb-35">Buy and Sell with Ease and <i>Trust</i>.</h2>
                        <p>Connecting local buyers and sellers on Xchange!</p>
                        <div className="tp-banner-btn">
                           <Link href="/post-ad" className="tp-btn">Post Ads</Link>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-6 col-lg-6">
                     <div className="banner-info d-none">
                        <ul>
                           <li><span>235K</span>Worldwide Students</li>
                           <li><span>3.5K</span>Free Pro Courses</li>
                           <li><span>4.7<i className="fi fi-rr-star "></i></span>Worldwide Review</li>
                        </ul>
                     </div>
                  </div>
                  <div className="banner-shape d-none d-lg-block">
                     <img src="/assets/img/banner/banner-shape-01.png" style={{height:"600px", bottom:"20%", right:"10%"}} alt="banner-shape" className="b-shape" />
                  </div>
               </div>
            </div>
         </div>
      </section>
        </>
    );
};

export default HeroBanner;