'use client';

import Link from 'next/link';
import Image from 'next/image';
import type { ReactElement } from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';
import { getUserData, getFilteredSocialMedia } from '@/lib/utils/data';
import TechStack from './TechStack';
import { SocialMediaLink } from '@/types';

const socialMediaIcons: Record<string, ReactElement> = {
  linkedin: <Linkedin size={20} />,
  github: <Github size={20} />,
  email: <Mail size={20} />,
};

const Introduction = () => {
  const userData = getUserData();
  const heroSocials = getFilteredSocialMedia(['LinkedIn', 'GitHub', 'Email']);

  return (
    <div className="introduction_bg relative overflow-hidden flex items-center min-h-screen py-10 lg:py-0" id="home">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center mb-10 lg:mb-12">
            <div className="w-full lg:w-1/2 text-left">
              <h1 className="title text-color mb-4 font-semibold text-4xl sm:text-5xl lg:text-5xl">
                {userData.name}
                <span className="sr-only"> - Professional {userData.job_role} Portfolio</span>
              </h1>
              <h2 className="category_title text-color mb-3 font-medium text-xl sm:text-2xl opacity-90">
                {userData.job_role}
              </h2>
              <p className="para mb-4 text-color text-base sm:text-lg max-w-xl leading-relaxed opacity-80">
                {userData.description}
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="social_media flex flex-wrap gap-3">
                  {heroSocials.map((item: SocialMediaLink) => (
                    <Link
                      key={item.title}
                      href={item.LinkTo}
                      className="btn_base btn_outline_primary social_media_icon flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 no-underline"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit my ${item.title} profile`}
                      title={`Visit my ${item.title} profile`}
                    >
                      <span aria-hidden="true" className="flex items-center justify-center">
                        {socialMediaIcons[item.iconId.toLowerCase()] || <Mail size={20} />}
                      </span>
                      <span className="sr-only">{item.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 hidden lg:flex justify-end pr-8">
              <div className="introduction-image-container relative">
                <div className="relative z-10">
                  <Image
                    src="/profile.jpg"
                    alt={`${userData.name} - ${userData.job_role}`}
                    width={320}
                    height={320}
                    className="img-fluid rounded-3xl premium-shadow profile-feature-image"
                    priority
                    quality={90}
                    style={{ objectFit: 'cover', border: '6px solid white', transform: 'scaleX(-1)' }}
                  />
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10" />
                  <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10" />
                </div>
              </div>
            </div>
          </div>
          <div className="tech_stack_container mt-6 lg:mt-8">
            <TechStack />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
