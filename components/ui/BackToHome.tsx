'use client';

import Link from 'next/link';

const BackToHome = () => {
  return (
    <Link
      href="/"
      className="btn_base btn_primary"
      style={{ textDecoration: 'none', display: 'inline-block' }}
      aria-label="Return to home page"
    >
      Back to Home
    </Link>
  );
};

export default BackToHome;

