import { useEffect, useState } from "react";
import SEO from "../common/seo";
import Home from "../components/homes/home";
import Wrapper from "../layout/wrapper";
import FeedbackBox from "../lib/FeedbackBox";


const index = () => {
  const [showImage, setShowImage] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowImage(false);
    }, 10000);
    return () => clearTimeout(timeout);
  }, []);


  return (
    <Wrapper>
      <SEO pageTitle={'Xchange'} />
      <Home />
    </Wrapper>
  );
};

export default index;
