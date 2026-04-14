import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
// Dynamically import client components to avoid SSR issues
const NotFound = dynamic(() => import('@/components/sections/NotFound'), { ssr: true });

export const metadata: Metadata = {
  title: '404 - Page Not Found | Moideen Mashad',
  description: 'The page you are looking for does not exist.',
};

export default function NotFoundPage() {
  return <NotFound />;
}

