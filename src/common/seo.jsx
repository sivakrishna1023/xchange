import Head from "next/head";
import Script from "next/script";
 
const SEO = ({ pageTitle }) => (
  <>
    <Head>
      <title>
        {pageTitle ?
          `${pageTitle}` : `Xchange`}
      </title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="description" content="Your Trusted Online Market Place" />
      <meta name="robots" content="index, follow" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="google-adsense-account" content="ca-pub-6404549989973165"/>
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
  </>
);

export default SEO;
