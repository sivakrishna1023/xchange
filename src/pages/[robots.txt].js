// pages/[slug].js

import { useRouter } from 'next/router';

const RobotsTxt = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Customize the response based on the slug
  const content = `User-agent: *\nDisallow:`;

  return <pre>{content}</pre>;
};

export default RobotsTxt;
