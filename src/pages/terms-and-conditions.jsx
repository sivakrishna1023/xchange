'use Client'
import React, { useEffect, useState } from 'react'
import Wrapper from '../layout/wrapper';
import SEO from '../common/seo';
import Breadcrumb from '../components/bredcrumb/breadcrumb';

const termsAndConditions = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <Wrapper>
        <SEO pageTitle={"Terms & Conditions"} />
        <Breadcrumb title="Terms & Conditions" subtitle="Terms & Conditions" isDbbl="Pages" />
        <div style={isMobile ?{padding:"2rem"}:{padding:"4rem 18rem"}}>
        <h3> Acceptance of Terms </h3>
        <p> By accessing and using the Xchange website, you agree to comply with and be bound by these Terms and Conditions. If you do not agree to these terms, please refrain from using the Platform.</p>
        <p> These Terms and Conditions govern your use of the Xchange website and mobile application operated by XChange.</p>
        <h3> User Registration </h3>
        <p> To use certain features of the Xchange, users may be required to register an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.</p>
        <p> You agree to provide accurate, current, and complete information during the registration process.</p>
        <h3> User Conduct </h3>
        <p> Users are prohibited from engaging in any unlawful or prohibited activities while using the Platform. </p>
        <p> Users agree not to post any content that is defamatory, libelous, obscene, or otherwise offensive. </p>
        <p> Users are responsible for their activities and content posted on the platform. </p>
        <p> Users must provide accurate and updated information while using the platform. </p>
        <h3> Listings and Transactions </h3>
        <p> Xchange is a marketplace for users to list and discover classified advertisements. Xchange is not involved in the actual transaction between buyers and sellers. </p>
        <p> Users are responsible for the accuracy and legality of their listings.</p>
        <p> Xchange reserves the right to remove any content that violates these terms or is deemed inappropriate.</p>
        <h3> Privacy Policy </h3>
        <p> User information is subject to our Privacy Policy, which can be found [here](link-to-privacy-policy).</p>
        <p> In accordance with Information Technology Act 2000 & Consumer Protection Act and rules made there under.</p>
        <h3> Intellectual Property </h3>
        <p> The content on the Platform, including text, graphics, logos, and images, is the property of Xchange and is protected by intellectual property laws. </p>

        <h3> Limitation of Liability </h3>
        <p> Xchange is not liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use the Platform. </p>
        <h3> Platform Usage </h3>
        <p> The platform provides a marketplace for users to buy/sell used goods and connect with local service providers. </p>
        <p> The platform does not guarantee the quality, accuracy, or legality of listings, services, or content posted by users. However, it has some features which indicates or represent the quality or trustworthiness of the products.</p>
        <p> Users must adhere to the platform's community guidelines and refrain from posting offensive, misleading, or prohibited content. </p>
        <h3> Termination </h3>
        <p> Xchange reserves the right to terminate or suspend user accounts and access to the Platform at its discretion. </p>
          <h3> Governing Law and Jurisdiction </h3>
          <p> These Terms and Conditions are governed by and construed in accordance with the laws of the state of Telangana, India.</p>
          <p> Any judicial proceedings related to these terms shall be exclusively held in the courts of Hyderabad, Telangana.</p>
          <h3> Changes to Terms and Conditions </h3>
          <p> XChange reserves the right to modify or replace these Terms and Conditions at any time. Users are responsible for regularly reviewing these terms for any changes.</p>
          <h3> Contact Information </h3>
         <p> If you have any questions about these Terms and Conditions, please contact us at </p>
          <p><b> Email:</b> <a href="mailto:xchange.hyderabad@gmail.com" style={{color:"green", fontWeight:"bolder"}}>xchange.hyderabad@gmail.com</a></p>
         <p><b>Place:</b>  Hyderabad, Telangana.</p>
        </div>
      </Wrapper>
    </>
  )
}

export default termsAndConditions
