'use client';

import Link from 'next/link';
import type { ReactElement } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Linkedin, Github, Mail, Instagram, Globe } from 'lucide-react';
import { FaStackOverflow } from 'react-icons/fa';
import { getUserData, getSocialMediaLinks } from '@/lib/utils/data';
import { FOOTER_NAV_ITEMS } from '@/lib/config';

const socialMediaIcons: Record<string, ReactElement> = {
  linkedin: <Linkedin size={20} />,
  github: <Github size={20} />,
  email: <Mail size={20} />,
  stack_overflow: <FaStackOverflow size={20} />,
  instagram: <Instagram size={20} />,
  globe: <Globe size={20} />,
};

const Footer = () => {
  const userData = getUserData();
  const userSocialProfile = getSocialMediaLinks();

  return (
    <footer className="footer_bg py-16 flex items-center justify-center" id="footer">
      <div className="container mx-auto px-4">
        <div className="footer_body">
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 mb-8">
            {FOOTER_NAV_ITEMS.map((item) => (
              <div className="flex items-center" key={item.LinkTo}>
                <ScrollLink
                  to={item.LinkTo}
                  smooth
                  duration={500}
                  spy
                  className="nav-link text-center px-2 py-1 transition-all no-underline cursor-pointer"
                >
                  {item.navitem}
                </ScrollLink>
              </div>
            ))}
          </div>
          <hr className="border-black/5 mb-8" />
          <div className="flex justify-center items-center mb-6 gap-4">
            {userSocialProfile.map((item) => (
              <Link
                key={item.title}
                href={item.LinkTo}
                className="social_media_icon transition-transform hover:scale-110 no-underline"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit my ${item.title} profile`}
                title={`Visit my ${item.title} profile`}
              >
                <span aria-hidden="true">
                  {socialMediaIcons[item.iconId.toLowerCase()] || <Globe size={20} />}
                </span>
                <span className="sr-only">{item.title}</span>
              </Link>
            ))}
          </div>
          <p className="text-center text-sm text-slate-500 opacity-60">
            &copy; {new Date().getFullYear()} {userData.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
