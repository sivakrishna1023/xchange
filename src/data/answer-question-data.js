const answer_question_data = [
  {
    id: 1,
    question: "How do I create an account on the platform?",
    answer: (
      <>
        To create an account, click on the "Sign Up" button on the homepage. Fill in the required details such as your name, email address, and password. Follow the verification process, and your account will be created.
      </>
    ),
    accordion_id: "headingOne",
    collapsed: "",
    data_bs_target: "#collapseOne",
    aria_expanded: true,
    aria_controls: "collapseOne",
    show: "show",
  },
  {
    id: 2,
    question: "How can I post an item for sale?",
    answer: (
      <>
       Log in to your account and click on the "Post Ad" or "Sell" button. Provide details about your item, such as title, description, category, and attach relevant photos. Set a reasonable price, and your ad will be live after a brief review.
      </>
    ),
    accordion_id: "headingTwo",
    collapsed: "collapsed",
    data_bs_target: "#collapseTwo",
    aria_expanded: false,
    aria_controls: "collapseTwo",
    show: "",
  },
  {
    id: 3,
    question: "Is it free to post an ad on the platform?",
    answer: (
      <>
        Yes, basic ad listings are usually free. However, there might be optional paid features or upgrades to enhance the visibility of your ad.
      </>
    ),
    accordion_id: "headingThree",
    collapsed: "collapsed",
    data_bs_target: "#collapseThree",
    aria_expanded: false,
    aria_controls: "collapseThree",
    show: "",
  },
  {
    id: 4,
    question: "How can I communicate with a buyer/seller?",
    answer: (
      <>
        Once you find an item you're interested in, click on the ad to view the details. Use the provided contact options such as messaging or email to communicate directly with the buyer or seller.
      </>
    ),
    accordion_id: "headingFour",
    collapsed: "collapsed",
    data_bs_target: "#collapseFour",
    aria_expanded: false,
    aria_controls: "collapseFour",
    show: "",
  },
  {
    id: 5,
    question: "What safety measures are in place for transactions?",
    answer: (
      <>
       We recommend meeting in public places, especially during daylight hours, for transactions. Cash transactions are common, but for added security, consider using online payment methods. Be cautious of potential scams and report any suspicious activity to our support team.
      </>
    ),
    accordion_id: "headingFive",
    collapsed: "collapsed",
    data_bs_target: "#collapseFive",
    aria_expanded: false,
    aria_controls: "collapseFive",
    show: "",
  },
  {
    id: 6,
    question: "How do I report a fraudulent or suspicious listing?",
    answer: (
      <>
        If you come across a suspicious ad or user, please use the "Report" button on the listing page or contact our customer support. Provide as much detail as possible to help us investigate and take appropriate action.

      </>
    ),
    accordion_id: "headingSix",
    collapsed: "collapsed",
    data_bs_target: "#collapseSix",
    aria_expanded: false,
    aria_controls: "collapseSix",
    show: "",
  },
  {
    id: 7,
    question: "Can I edit or remove my posted ad?",
    answer: (
      <>
        Yes, you can edit or remove your ad at any time. Log in to your account, go to your listings, and select the option to edit or delete the ad as needed.
      </>
    ),
    accordion_id: "headingSeven",
    collapsed: "collapsed",
    data_bs_target: "#collapseSeven",
    aria_expanded: false,
    aria_controls: "collapseSeven",
    show: "",
  },
  {
    id: 8,
    question: "What categories can I find on the platform?",
    answer: (
      <>
        Our platform covers a wide range of categories, including electronics, furniture, clothing, vehicles, real estate, and more. You can explore these categories to find what you're looking for.
      </>
    ),
    accordion_id: "headingEight",
    collapsed: "collapsed",
    data_bs_target: "#collapseEight",
    aria_expanded: false,
    aria_controls: "collapseEight",
    show: "",
  },
  {
    id: 9,
    question: "How does the search function work?",
    answer: (
      <>
        Use the search bar on the homepage to enter keywords related to the item you're looking for. You can also filter results by category, location, and other parameters to narrow down your search.
      </>
    ),
    accordion_id: "headingNine",
    collapsed: "collapsed",
    data_bs_target: "#collapseNine",
    aria_expanded: false,
    aria_controls: "collapseNine",
    show: "",
  },
  {
    id: 10,
    question: "Is my personal information secure on the platform?",
    answer: (
      <>
        We prioritize the security of your information. Your personal details are kept confidential, and we have security measures in place to protect your data. Be cautious about sharing sensitive information in public conversations and report any privacy concerns to our support team.
      </>
    ),
    accordion_id: "headingTen",
    collapsed: "collapsed",
    data_bs_target: "#collapseTen",
    aria_expanded: false,
    aria_controls: "collapseTen",
    show: "",
  },
  {
    id: 11,
    question: "How does the rating and feedback system work?",
    answer: (
      <>
        After a successful transaction, both buyers and sellers can leave feedback and ratings for each other. This helps build a trustworthy community. You can view a user's overall rating and feedback on their profile.
      </>
    ),
    accordion_id: "headingTenOne",
    collapsed: "collapsed",
    data_bs_target: "#collapseTenOne",
    aria_expanded: false,
    aria_controls: "collapseTenOne",
    show: "",
  },
  {
    id: 12,
    question: "What should I do if I encounter a problem with a transaction?",
    answer: (
      <>
        Contact the other party involved in the transaction to address the issue. If a resolution cannot be reached, use our customer support system to report the problem, providing relevant details for our team to assist you.
      </>
    ),
    accordion_id: "headingEleven",
    collapsed: "collapsed",
    data_bs_target: "#collapseEleven",
    aria_expanded: false,
    aria_controls: "collapseEleven",
    show: "",
  },
  {
    id: 13,
    question: "Are there any restrictions on the type of items I can sell?",
    answer: (
      <>
        While we have a broad range of categories, certain items may be restricted or prohibited. Review our terms of service and guidelines to ensure your listings comply with our policies. Items like illegal substances, weapons, and counterfeit goods are typically not allowed.
      </>
    ),
    accordion_id: "headingTwelve",
    collapsed: "collapsed",
    data_bs_target: "#collapseTwelve",
    aria_expanded: false,
    aria_controls: "collapseTwelve",
    show: "",
  },
  {
    id: 14,
    question: "Can I promote my business through the platform?",
    answer: (
      <>
        Our platform is primarily designed for individual users to buy and sell personal items. Business promotion may be subject to specific advertising options or policies. Contact our support team for more information on business-related activities.
      </>
    ),
    accordion_id: "headingThirteen",
    collapsed: "collapsed",
    data_bs_target: "#collapseThirteen",
    aria_expanded: false,
    aria_controls: "collapseThirteen",
    show: "",
  },
  {
    id: 15,
    question: "What steps should I take to ensure a smooth transaction?",
    answer: (
      <>
        Communicate clearly with the other party, agree on the terms beforehand, and verify the condition of the item. For high-value transactions, consider meeting in a safe location and bringing a friend. Always trust your instincts and report any suspicious behavior.
      </>
    ),
    accordion_id: "headingFourteen",
    collapsed: "collapsed",
    data_bs_target: "#collapseFourteen",
    aria_expanded: false,
    aria_controls: "collapseFourteen",
    show: "",
  },
  {
    id: 16,
    question: "How do I change my account password or update my contact information?",
    answer: (
      <>
        Log in to your account and navigate to the settings or account management section. There, you'll find options to change your password, update your email address, or modify other account details.
      </>
    ),
    accordion_id: "headingFifteen",
    collapsed: "collapsed",
    data_bs_target: "#collapseFifteen",
    aria_expanded: false,
    aria_controls: "collapseFifteen",
    show: "",
  },
  {
    id: 17,
    question: "Are there any fees associated with selling items on the platform?",
    answer: (
      <>
        While basic listings are typically free, there may be fees for certain premium features or services, such as highlighted listings or extended visibility. Check our pricing or premium features section for more details.
      </>
    ),
    accordion_id: "headingSixteen",
    collapsed: "collapsed",
    data_bs_target: "#collapseSixteen",
    aria_expanded: false,
    aria_controls: "collapseSixteen",
    show: "",
  },
  {
    id: 18,
    question: "Can I save favorite items for later?",
    answer: (
      <>
        Yes, you can bookmark or save items you're interested in. Look for the "Save" or "Bookmark" option on the listing page. This allows you to easily revisit and track items you're considering.
      </>
    ),
    accordion_id: "headingSeventeen",
    collapsed: "collapsed",
    data_bs_target: "#collapseSeventeen",
    aria_expanded: false,
    aria_controls: "collapseSeventeen",
    show: "",
  },
  {
    id: 19,
    question: "What happens if my item doesn't sell?",
    answer: (
      <>
        If your item doesn't sell within a certain period, you can choose to renew the listing or create a new one. Consider adjusting the price, description, or images to increase its appeal.
      </>
    ),
    accordion_id: "headingEighteen",
    collapsed: "collapsed",
    data_bs_target: "#collapseEighteen",
    aria_expanded: false,
    aria_controls: "collapseEighteen",
    show: "",
  },
  {
    id: 20,
    question: "How do I deactivate or close my account?",
    answer: (
      <>
        If you no longer wish to use the platform, you can usually find an account deactivation or closure option in the account settings. Follow the provided steps to deactivate or close your account.
      </>
    ),
    accordion_id: "headingNineteen",
    collapsed: "collapsed",
    data_bs_target: "#collapseNineteen",
    aria_expanded: false,
    aria_controls: "collapseNineteen",
    show: "",
  },
];
export default answer_question_data;
