'use client';

import dynamic from 'next/dynamic';
import SectionSkeleton from '@/components/ui/SectionSkeleton';

// Disable SSR for Project component as it uses Swiper which requires browser APIs
const DynamicProject = dynamic(() => import('./Project'), {
  loading: () => <SectionSkeleton type="project" />,
  ssr: false,
});

export default function ProjectSection() {
  return <DynamicProject />;
}

