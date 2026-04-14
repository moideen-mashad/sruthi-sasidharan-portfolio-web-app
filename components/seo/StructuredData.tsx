import { SITE_CONFIG } from '@/lib/config';
import userData from '@/data/profile.json';
import userSocialProfile from '@/data/social-links.json';

import { escapeHtml } from '@/lib/utils/security';

export default function StructuredData() {
  // Extract and validate social media links
  const socialLinks = (userSocialProfile?.map((item) => item.LinkTo) || []).filter(
    (link): link is string => typeof link === 'string' && link.startsWith('http')
  );

  // Sanitize user data to prevent XSS
  const safeName = typeof userData?.name === 'string' ? escapeHtml(userData.name) : SITE_CONFIG.name;
  const safeJobTitle = typeof userData?.job_role === 'string' ? escapeHtml(userData.job_role) : 'Frontend Developer';
  const safeDescription = typeof userData?.description === 'string' ? escapeHtml(userData.description) : SITE_CONFIG.description;
  const safeSkills = Array.isArray(userData?.skills)
    ? userData.skills.filter((skill): skill is string => typeof skill === 'string').map(escapeHtml)
    : ['React', 'Next.js', 'JavaScript', 'TypeScript', 'Frontend Development', 'Web Development', 'UI/UX Design'];

  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: safeName,
      jobTitle: safeJobTitle,
      description: safeDescription,
      url: SITE_CONFIG.url,
      image: `${SITE_CONFIG.url}/profile.jpg`,
      sameAs: socialLinks,
      knowsAbout: safeSkills,
      gender: 'Male',
      nationality: {
        '@type': 'Country',
        name: 'India', // Based on common contexts for this name, can be adjusted
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: `${safeName} Portfolio`,
      url: SITE_CONFIG.url,
      description: safeDescription,
      author: {
        '@type': 'Person',
        name: safeName,
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ImageObject',
      author: safeName,
      contentUrl: `${SITE_CONFIG.url}/profile.jpg`,
      datePublished: '2024-01-01',
      description: `Profile picture of ${safeName}`,
      name: safeName,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: SITE_CONFIG.url,
        },
      ],
    },
  ];

  // Use JSON.stringify which automatically escapes dangerous characters
  // This is safe because we're using trusted data from JSON files, not user input
  const jsonString = JSON.stringify(structuredData);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonString }}
    />
  );
}

