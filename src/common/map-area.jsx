import React from "react";

const MapArea = () => {
  return (
    <>
      <div
        className="map-area wow fadeInUp"
        data-wow-duration=".8s"
        data-wow-delay=".2s"
      >
        <div className="map-wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d16421992.915334428!2d-74.54900526175051!3d53.308708074896664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1654426516184!5m2!1sen!2sbd"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default MapArea;
