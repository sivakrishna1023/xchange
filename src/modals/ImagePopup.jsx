import React from "react";
import Lightbox from "react-18-image-lightbox";

const ImagePopup = ({ images, setIsOpen, photoIndex, setPhotoIndex }) => {
  return (
    <React.Fragment>
      <Lightbox
        mainSrc={images[photoIndex]}
        nextSrc={images[(photoIndex + 1) % images.length]}
        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
        onCloseRequest={() => setIsOpen(false)}
        onMovePrevRequest={() =>
          setPhotoIndex((photoIndex + images.length - 1) % images.length)
        }
        onMoveNextRequest={() =>
          setPhotoIndex((photoIndex + 1) % images.length)
        }
      />
    </React.Fragment>
  );
};

export default ImagePopup;
