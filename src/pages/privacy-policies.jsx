'use Client'
import React from 'react'
import Wrapper from '../layout/wrapper';
import SEO from '../common/seo';
import Breadcrumb from '../components/bredcrumb/breadcrumb';

const privacyPolicies = () => {
  return (
    <>
      <Wrapper>
        <SEO pageTitle={"Privacy Policy"} />
        <Breadcrumb title="Privacy Policy" subtitle="Privacy Policy" isDbbl="Pages" />
        <div>
          1. Introduction
          1.1. Welcome to Xchange ("Xchange," "we," "our," or "us"). This Privacy Policy outlines how we collect, use, and protect the information you provide when using our classified website.
          2. Information We Collect
          2.1. Personal Information:
          - We may collect user email, location, and phone number for website functioning purposes.
          - In the future, we may introduce features requiring ID numbers for authentication.
          - We may collect personal identification information from users in various ways, including when they visit our platform, register on the platform, subscribe to our newsletter, respond to a survey, or fill out a form.
          - Users may be asked for their name, email address, phone number, location information, and other relevant details. We will collect personal identification information from users only if they voluntarily submit such information to us.
          - Users can always refuse to supply personal identification information, except that it may prevent them from engaging in certain platform-related activities.

          2.2. Non-Personal Information:
          - We may collect non-personal identification information about users whenever they interact with our platform. This may include the browser name, type of device, internet service provider, and other similar information.
          3. Use of Information
          3.1. We collect and use personal information to provide, improve, and personalize our services. This includes facilitating transactions, authenticating users, and enhancing user experience.
          3.2. User information, including email, location, and phone number, may be used for communication, support, and to send important notices.
          4. Protection of Information
          4.1. We take measures to protect user information and employ industry-standard security practices to safeguard against unauthorized access, disclosure, alteration, or destruction.

          5. User Privacy Measures
          5.1. Xchange is committed to continuously improving user privacy measures. We implement security protocols, conduct regular security audits, and update our privacy practices to protect user information.
          6. Third-Party Services
          6.1. Xchange may use third-party services for analytics, advertising, or other business purposes. These third parties may have their own privacy policies, and users are encouraged to review them.
          7. Judicial Proceedings
          7.1. Any judicial proceedings related to privacy matters shall be conducted in Hyderabad, as specified in the Terms and Conditions.
          8. Contact Information
          8.1. For any privacy-related inquiries or concerns, please contact us at xchange.hyderabad@gmail.com.
          9. Updates to Privacy Policy
          9.1. This Privacy Policy may be updated from time to time. Users will be notified of any changes, and the latest version will be available on our website.
          10. Your Products, Our Trust
          10.1. At Xchange, we believe in fostering trust. Our commitment is reflected in our tagline, "Your products, our Trust."
        </div>
      </Wrapper>
    </>
  )
}

export default privacyPolicies
