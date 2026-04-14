import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Script from 'next/script';
import { Manrope } from 'next/font/google';
import "./globals.css";
import LenisProvider from '@/components/providers/LenisProvider';

import StructuredData from '@/components/seo/StructuredData';
import { SITE_CONFIG } from '@/lib/config';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
  keywords: [
    'Sruthi Sasidharan',
    'Python Developer',
    'Django Developer',
    'Full Stack Developer',
    'Django REST Framework',
    'Backend Developer',
    'Web Developer',
    'MySQL',
    'PostgreSQL',
    'RESTful API',
    'MVT Architecture',
    'Python Full Stack',
    'Portfolio',
    'Software Developer',
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  category: 'technology',
  classification: 'Portfolio Website',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(SITE_CONFIG.url),
  alternates: { canonical: '/' },
  openGraph: {
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    url: '/',
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630, alt: SITE_CONFIG.name }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  // verification: { google: ANALYTICS.googleAnalyticsId },
  manifest: '/manifest.json',
  icons: {
    icon: [{ url: '/favicon.ico' }, { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' }],
    apple: [{ url: '/profile.jpeg', sizes: '180x180', type: 'image/jpeg' }],
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={manrope.variable}>
      <head>
        <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />
        <StructuredData />
      </head>
      <body suppressHydrationWarning>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
