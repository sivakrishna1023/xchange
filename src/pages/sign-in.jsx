import React from "react";
import SEO from "../common/seo";
import SignIn from "../components/sign-in";
import Wrapper from "../layout/wrapper";
import Head from "next/head";
import Script from "next/script";

const index = () => {
  return (
    <Wrapper>
      <Head>
      <title>
        {`sign in`}
      </title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="description" content="Your Trusted Online Market Place" />
      <meta name="robots" content="noindex, follow" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link rel="icon" href="/favicon.png" />
      <link rel="canonical" href={'https://xchangehyd.com/'} />
      {/* Google tag (gtag.js) */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-9Y6ZP8048W"></script>
      <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-9Y6ZP8048W', {
            page_path: window.location.pathname,
          });
        `,
          }}
        />
    </Head>
      <SignIn />
    </Wrapper>
  );
};

export default index;
