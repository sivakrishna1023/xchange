import React from 'react';
import SEO from '../common/seo';
import Seller from '../components/seller';
import Wrapper from '../layout/wrapper';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Instructor"} />
            <Seller />
        </Wrapper>
    );
};

export default index;