import Link from "next/link";
import React, { useEffect, useState } from "react";

const category_data = [
  {
    id: 1,
    img: "/assets/img/category/category-01.svg",
    title: "Mobiles",
    link: `ad-list?select=Mobiles`,
  },
  {
    id: 2,
    img: "/assets/img/category/category-02.svg",
    title: "Electronics",
    link: "ad-list?select=Electronics",
  },
  {
    id: 3,
    img: "/assets/img/category/category-03.svg",
    title: "Vehicles",
    link: "ad-list?select=Vehicles",
  },
  {
    id: 4,
    img: "/assets/img/category/category-04.svg",
    title: "Home & Living",
    link: "ad-list?select=Home & Living",
  },
  {
    id: 5,
    img: "/assets/img/category/category-05.svg",
    title: "Essentials",
    link: "ad-list?select=Essentials",
  },
  {
    id: 6,
    img: "/assets/img/category/category-06.svg",
    title: "Furniture",
    link: "ad-list?select=Furniture",
  },
  {
    id: 7,
    img: "/assets/img/category/category-07.svg",
    title: "Properties",
    link: "ad-list?select=Properties",
  },
  {
    id: 8,
    img: "/assets/img/category/category-08.svg",
    title: "Home Appliance",
    link: "ad-list?select=Home Appliance",
  },
  {
    id: 9,
    img: "/assets/img/category/category-09.svg",
    title: "Rent",
    link: "ad-list?select=Rent",
  },
  {
    id: 10,
    img: "/assets/img/category/category-10.svg",
    title: "Sports",
    link: "ad-list?select=Sports",
  },
];
const CategoryArea = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    // Check window width on mount
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Add event listener to update on window resize
    window.addEventListener('resize', handleResize);

    // Call the handleResize function once on mount
    handleResize();

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // The empty dependency array ensures that this effect runs only on mount and unmount
  return (
    <>
      <section
        className="tp-category-area bg-bottom grey-bg pt-10   mb-10 wow fadeInUp"
        data-wow-duration="1.5s"
        data-wow-delay=".4s"
        style={{ backgroundImage: `url(/assets/img/bg/shape-bg-1.png)`, paddingTop: "40px" }}
      >
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-12">
              <div className="section-title mb-10 lg:mb-65 ">
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
                        <Link href={item.link}>{item.title}</Link>
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
                        <Link href={item.link}>{item.title}</Link>
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
