import React from 'react';

// location_info
const location_info = [
    {
        id: 1,
        icon: "fa-light fa-phone",
        info: "(209) 555-0104"
    }, 
    {
        id: 2,
        icon: "fa-light fa-location-dot",
        info: "Hyderabad"
    }, 
    {
        id: 3,
        icon: "fi fi-rr-envelope",
        info: "Support@xchange.com"
    },
]


const LocationArea = () => {
    return (
        <>
            <section className="location-area pt-120 pb-85 wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".2s">
         <div className="container">
            <div className="row">               
               <div className="col-xl-4 col-md-6">
                  <div className="location-item text-center mb-30 wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".2s">
                     <div className="location-icon mb-25">
                        <i className="fa-light fa-phone"></i>
                     </div>
                     <div className="location-content">
                        <h5 className="location-title"><a href="tell:(209)555-0104">(209) 555-0104</a></h5>
                     </div>
                  </div>
               </div>
               <div className="col-xl-4 col-md-6">
                  <div className="location-item text-center mb-30 wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".4s">
                     <div className="location-icon mb-25">
                        <i className="fa-light fa-location-dot"></i>
                     </div>
                     <div className="location-content">
                        <h5 className="location-title">Hyderabad</h5>
                     </div>
                  </div>
               </div>
               <div className="col-xl-4 col-md-6">
                  <div className="location-item text-center mb-30 wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".6s">
                     <div className="location-icon mb-25">
                        <i className="fi fi-rr-envelope"></i>
                     </div>
                     <div className="location-content">
                        <h5 className="location-title"><a href="mailto:Support@xchange.com">Support@xchange.com</a></h5>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
        </>
    );
};

export default LocationArea;