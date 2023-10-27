import React from 'react';
import SEO from '../common/seo';
import Blog from '../components/blog';
import Wrapper from '../layout/wrapper';
// import WrapperFour from '../layout/wrapper-4';

const index = () => {
    return (
          <Wrapper>
           <SEO pageTitle={"Blog"} /> 
           <Blog />
           </Wrapper>
    );
};

export default index;