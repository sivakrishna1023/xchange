import React from "react";

const footer_data = [
  {
    id: 1,
    title: "About",
    cls: "col-xl-2",
    footer_col: "footer-col-1",
    links: [
      { name: "About Us", link: "/about" },
      { name: "Register", link: "/register" },
      { name: "Sign In", link: "/sign-in" },
      { name: "FAQ", link: "/faq" },
      // { name: "Blog", link: "/blog" },
      // { name: "Careers", link: "/careers" },
      // { name: "Jobs", link: "/" },
      // { name: "In Press", link: "/" },
    ],
  },
  {
    id: 2,
    title: "Quick Links",
    cls: "col-xl-3",
    footer_col: "footer-col-2",
    links: [
      // { name: "Ad Grid", link: "/ad-grid" },
      { name: "Explore Ads", link: "/ad-list" },
      // { name: "Seller", link: "/seller" },
      // { name: "Order Cancel", link: "/order-cancel" },
      // { name: "Privacy Policy", link: "/privacy-policy" },
    ],
  },
  {
    id: 3,
    title: "Help & Support",
    footer_col: "footer-col-3",
    cls: "col-xl-3",
    links: [
      { name: "Contact us", link: "/contact" },
      { name: "About us", link: "/about" },
      { name: "Terms & Conditions", link: "/terms-and-conditions" },
      { name: "Privacy Policy", link: "/privacy-policies" },
      // { name: "Online Chat", link: "/online-chat" },
      // { name: "Whatsapp", link: "/whatsapp" },
      // { name: "Telegram", link: "/telegram" },
      // { name: "Ticketing", link: "/ticketing" },
    ],
  },
];


// social_links
const social_links = [
  {
    link: "http://facebook.com",
    target: "_blank",
    icon: "fab fa-facebook-f",
    name: "Facebook",
  },
  {
    link: "https://www.youtube.com/channel/UC9UCydt-3mReNhDgMWwB4FA",
    target: "_blank",
    icon: "fab fa-youtube",
    name: "Youtube",
  },
  {
    link: "https://www.instagram.com/xchange.hyd?igsh=MmNhbW02ajlnbWty",
    target: "_blank",
    icon: "fab fa-instagram",
    name: "Instagram",
  },

  {
    link: "https://wa.link/xhv2rs",
    target: "_blank",
    icon: "fa-brands fa-whatsapp",
    name: "Twitter",
  },
];

const copyright = {
  logo: "/assets/img/xchange.png",
  copyright_text: (
    <>Copyright © Xchange, All Rights Reserved</>
  ),
};

const { logo, copyright_text } = copyright;
const Footer = () => {
  return (
    <>
      <footer>
        <div
          className="footer-bg theme-bg bg-bottom"
          style={{ backgroundImage: `url(/assets/img/bg/shape-bg-02.png)` }}
        >
          <div className="f-border pt-10 pb-70">
            <div className="container">
              <div className="row">
                {footer_data.map((item) => (
                  <div key={item.id} className={`${item.cls} col-md-4`}>
                    <div className={`footer-widget ${item.footer_col} mb-50`}>
                      <div className="footer-widget__text mb-35">
                        <h3 className="footer-widget__title">{item.title}</h3>
                      </div>
                      <div className="footer-widget__link">
                        <ul>
                          {item.links.map((link, i) => (
                            <li key={i}>
                              <a href={link.link}>{link.name}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="col-xl-4 col-lg-6 col-md-8">
                  <div className="footer-widget footer-col-4  mb-50">
                    <div className="footer-widget__text mb-35">
                      <h3 className="footer-widget__title">Support</h3>
                    </div>
                    <p>
                      Be the first one to know about discounts, offers and
                      events. Unsubscribe whenever you like.
                    </p>
                    <div className="footer-widget__f-newsletter mb-40">
                      <form onSubmit={(e) => e.preventDefault()}>
                        <span>
                          <i className="icon_mail_alt"></i>
                        </span>
                        <input type="email" placeholder="Enter your email" />
                        <button className="footer-widget__submit tp-border-btn2">
                          Subscribe Now
                        </button>
                      </form>
                    </div>
                    <div className="footer-widget__social d-flex align-items-center">
                      {social_links.map((link, i) => (
                        <a href={link.link} target={link.target} key={i}>
                          <i className={link.icon}></i>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="f-copyright pt-60 pb-30">
            <div className="container">
              <div className="row">
                <div className="col-md-5">
                  <div className="f-copyright__logo mb-30">
                    <a href="#">
                      <img src={logo} alt="logo" />
                    </a>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="f-copyright__text text-md-end mb-30">
                    <span>{copyright_text}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
