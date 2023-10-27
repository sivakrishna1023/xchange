
import React from 'react';
import Breadcrumb from '../bredcrumb/breadcrumb';
import CounterArea from '../homes/home-3/counter-area';
import BlogArea from './blog-area';

const BlogGrid = () => {
    return (
        <>
            <Breadcrumb title="Blog Grid" subtitle="Blog Grid" isDbbl='Blog' />
            <BlogArea />
            <CounterArea />
        </>
    );
};

export default BlogGrid;