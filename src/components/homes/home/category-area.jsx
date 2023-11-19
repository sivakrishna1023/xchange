import Link from "next/link";
import React, { useEffect, useState } from "react";

const CategoryArea = () => {
  const [isMobile, setIsMobile] = useState(false);
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
  return (
    <>
      <section
        className="tp-category-area bg-bottom grey-bg pt-110 pb-80 wow fadeInUp"
        data-wow-duration="1.5s"
        data-wow-delay=".4s"
        style={{ backgroundImage: `url(/assets/img/bg/shape-bg-1.png)` }}
      >
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-12">
              <div className="section-title mb-65">
                <h2 className="tp-section-title">Top Categories</h2>
              </div>
            </div>
          </div>
          <div>
      {isMobile ? (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {category_data.map((item) => (
            <div key={item.id} style={{ width: '50%' }}>
              <div
                style={{
                  display: 'flex',
                  backgroundColor: 'white',
                  margin: '1rem 5px',
                  alignItems: 'center',
                }}
              >
                <div className="tp-category-icon mr-15">
                  <img src={item.img} alt="category-img" />
                </div>
                <h7 className="">
                  <Link href={'/ad-list'}>{item.title}</Link>
                </h7>
              </div>
            </div>
          ))} 
        </div>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {category_data.map((item) => (
            <div key={item.id} className="col-md-6 col-lg-4 col-xl-3">
              <div className="tp-cat-item mb-40 d-flex align-items-center">
                <div className="tp-category-icon mr-15">
                  <img src={item.img} alt="category-img" />
                </div>
                <h4 className="tp-category-title">
                  <Link href={'/ad-list'}>{item.title}</Link>
                </h4>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>

        </div>
      </section>
    </>
  );
};

export default CategoryArea;
