'use Client'
import React, { useEffect, useState } from 'react'
import Wrapper from '../layout/wrapper';
import SEO from '../common/seo';
import Breadcrumb from '../components/bredcrumb/breadcrumb';

const privacyPolicies = () => {
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
        <SEO pageTitle={"Privacy Policy"} />
        <Breadcrumb title="Privacy Policy" subtitle="Privacy Policy" isDbbl="Pages" />
        <div style={isMobile ?{padding:"2rem"}:{padding:"4rem 18rem"}}>
          <h3>Introduction</h3>
          <p>Welcome to Xchange ("Xchange," "we," "our," or "us"). This Privacy Policy outlines how we collect, use, and protect the information you provide when using our classified website.</p>
          <h3>Information We Collect</h3>
          <p>Personal Information:
          </p>
          
              <p>- We may collect user email, location, and phone number for website functioning purposes.</p>
              <p>- In the future, we may introduce features requiring ID numbers for authentication.</p>
              <p>- We may collect personal identification information from users in various ways, including when they visit our platform, register on the platform, subscribe to our newsletter, respond to a survey, or fill out a form.</p>
              <p>- Users may be asked for their name, email address, phone number, location information, and other relevant details. We will collect personal identification information from users only if they voluntarily submit such information to us.</p>
              <p>- Users can always refuse to supply personal identification information, except that it may prevent them from engaging in certain platform-related activities.</p>
            
          <p>Non-Personal Information:
          </p>
              <p>- We may collect non-personal identification information about users whenever they interact with our platform. This may include the browser name, type of device, internet service provider, and other similar information.</p>
            <h3>Use of Information</h3> 
          <p> We collect and use personal information to provide, improve, and personalize our services. This includes facilitating transactions, authenticating users, and enhancing user experience.</p>
          <p>User information, including email, location, and phone number, may be used for communication, support, and to send important notices.</p>
          <h3>Protection of Information</h3>
          <p> We take measures to protect user information and employ industry-standard security practices to safeguard against unauthorized access, disclosure, alteration, or destruction.</p>

          <h3>User Privacy Measures</h3>
          <p>Xchange is committed to continuously improving user privacy measures. We implement security protocols, conduct regular security audits, and update our privacy practices to protect user information.</p> 
          <h3> Third-Party Services</h3>
          <p> Xchange may use third-party services for analytics, advertising, or other business purposes. These third parties may have their own privacy policies, and users are encouraged to review them.</p> 
          <h3>Judicial Proceedings</h3>
          <p> Any judicial proceedings related to privacy matters shall be conducted in Hyderabad, as specified in the Terms and Conditions.</p> 
          <h3>Contact Information</h3> 
          <p> For any privacy-related inquiries or concerns, please contact us at xchange.hyderabad@gmail.com.</p> 
          <h3>Updates to Privacy Policy</h3>
          <p> This Privacy Policy may be updated from time to time. Users will be notified of any changes, and the latest version will be available on our website.</p> 
          <h3>Your Products, Our Trust</h3>
          <p> At Xchange, we believe in fostering trust. Our commitment is reflected in our tagline, "Your products, our Trust."</p> 
        </div>
      </Wrapper>
    </>
  )
}

export default privacyPolicies
