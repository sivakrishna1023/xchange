const menu_data = [
  // {
  //   id: 1,
  //   title: "Home",
  //   link: "/",
  //   has_dropdown: false,
  //   sub_menus: [
  //     { link: "/", title: "Home" },
  //   ],
  // },
  {
    id: 2,
    title: "Explore",
    link: "/about",
    has_dropdown: true,
    sub_menus: [
      { link: "/about", title: "About" },
      { link: "/contact", title: "Contact" },
      { link: "/post-ad", title: "Post Ad" },
      { link: "/faq", title: "FAQ" },
    ],
  },
  // {
  //   id: 3,
  //   title: "Sellers",
  //   link: "/sellers",
  //   has_dropdown: true,
  //   sub_menus: [
  //     { link: "/seller", title: "Know All" },
  //   ],
  // },
  {
    id: 4,
    title: "Ads",
    link: "/ad-grid",
    has_dropdown: true,
    sub_menus: [
      { link: "/ad-grid", title: "Get My Ads" },
      { link: "/ad-list", title: "Know All Ads" },
    ],
  },
];
export default menu_data;
