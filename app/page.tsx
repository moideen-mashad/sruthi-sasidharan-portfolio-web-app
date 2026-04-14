import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';
import { Navbar, Footer } from '@/components/layouts';
import { ProgressBar, ScrollUp, SectionSkeleton } from '@/components/ui';
import ProjectSection from '@/components/sections/ProjectSection';
import { SITE_CONFIG } from '@/lib/config';

const DynamicIntroduction = dynamic(() => import('@/components/sections/Introduction'), {
  loading: () => <SectionSkeleton type="introduction" />,
  ssr: true,
});

const DynamicAbout = dynamic(() => import('@/components/sections/About'), {
  loading: () => <SectionSkeleton type="about" />,
  ssr: true,
});

const DynamicCareer = dynamic(() => import('@/components/sections/Career'), {
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
    'Frontend Developer',
    'React Developer',
    'Next.js Developer',
    'Web Developer',
    'UI/UX Designer',
    'JavaScript',
    'TypeScript',
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
      <Suspense fallback={<SectionSkeleton type="introduction" />}>
        <DynamicIntroduction />
      </Suspense>
      <Suspense fallback={<SectionSkeleton type="about" />}>
        <DynamicAbout />
      </Suspense>
      <Suspense fallback={null}>
        <DynamicCareer />
      </Suspense>
      <Suspense fallback={<SectionSkeleton type="project" />}>
        <ProjectSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton type="contact" />}>
        <DynamicContact />
      </Suspense>
      <ScrollUp />
      <Footer />
    </>
  );
}
