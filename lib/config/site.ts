export const SITE_CONFIG = {
  name: 'Moideen Mashad',
  title: 'Moideen Mashad - Frontend Developer | React & Next.js Expert',
  description:
    'Moideen Mashad is a professional Frontend Developer specializing in React, Next.js, and TypeScript. Explore my portfolio to see high-performance web applications, modern UI/UX designs, and technical skills.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.moideenmashad.online',
  ogImage: '/profile.jpg',
  themeColor: '#000000',
} as const;

export const ANALYTICS = {
  googleAnalyticsId: 'G-NNGN24ZCFZ',
  adsenseClientId: 'ca-pub-3212381913713535',
} as const;
