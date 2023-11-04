import { useEffect, useState } from "react";
import SEO from "../common/seo";
import Home from "../components/homes/home";
import Wrapper from "../layout/wrapper";


const index = () => {
  const [showImage, setShowImage] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowImage(false);
    }, 5000);
    return () => clearTimeout(timeout);
  }, []);


  return (
    <Wrapper>
      <SEO pageTitle={'Xchange'} />
      <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>

      {showImage && (
        <img width="95%" src="/assets/img/hb.png" alt="Your Image" />
      )}
      </div>
      <Home />
    </Wrapper>
  );
};

export default index;