import dynamic from 'next/dynamic';
import type { Metadata } from 'next';
import { Navbar, Footer } from '@/components/layouts';
import { ProgressBar, ScrollUp, SectionSkeleton } from '@/components/ui';
import Introduction from '@/components/sections/Introduction';
import { SITE_CONFIG } from '@/lib/config';

// Statically importing Introduction since it's the LCP element (Above the fold)
// Code-splitting below-the-fold components

const DynamicAbout = dynamic(() => import('@/components/sections/About'), {
  loading: () => <SectionSkeleton type="about" />,
  ssr: true,
});

const DynamicCareer = dynamic(() => import('@/components/sections/Career'), {
  loading: () => <SectionSkeleton type="career" />,
  ssr: true,
});

const DynamicProject = dynamic(() => import('@/components/sections/Project'), {
  loading: () => <SectionSkeleton type="project" />,
  ssr: true,
});

const DynamicEducation = dynamic(() => import('@/components/sections/Education'), {
  loading: () => <SectionSkeleton type="education" />,
  ssr: true,
});

const DynamicCertifications = dynamic(() => import('@/components/sections/Certifications'), {
  loading: () => <SectionSkeleton type="certifications" />,
  ssr: true,
});

const DynamicContact = dynamic(() => import('@/components/sections/Contact'), {
  loading: () => <SectionSkeleton type="contact" />,
  ssr: true,
});

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.title,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    'Python Developer',
    'Django Developer',
    'Full Stack Developer',
    'Backend Expert',
    'REST API Specialist',
    'Python',
    'Django',
    'MySQL',
    'Portfolio',
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} - ${SITE_CONFIG.description}`,
      },
    ],
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
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <ProgressBar />
      
      {/* Above the fold content (Static Import to improve LCP) */}
      <Introduction />
      
      {/* Below the fold content (Dynamic Imports) */}
      <DynamicAbout />
      <DynamicCareer />
      <DynamicProject />
      <DynamicEducation />
      <DynamicCertifications />
      <DynamicContact />

      <ScrollUp />
      <Footer />
    </>
  );
}
