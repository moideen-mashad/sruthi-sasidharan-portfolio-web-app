'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Link as ScrollLink } from 'react-scroll';
import NavbarToggler from '@/components/ui/NavbarToggler';
import { getUserData } from '@/lib/utils/data';
import { NAV_ITEMS } from '@/lib/config';

const Navbar = () => {
  const userData = getUserData();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => setIsMobileMenuOpen(false);

  return (
    <div className={`navbar-wrapper sticky top-0 z-[1000] ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="navbar py-3">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="profile_section flex items-center gap-3">
              <div className="relative">
                <Image
                  src="/profile.jpeg"
                  alt={`${userData.name} profile picture`}
                  width={44}
                  height={44}
                  className="rounded-full aspect-square border-2 border-white shadow-sm ring-1 ring-slate-100 object-cover transition-transform duration-300 hover:scale-105"
                  priority
                />
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white rounded-full z-10" />
              </div>
              <ScrollLink
                to="home"
                smooth
                duration={500}
                className="flex flex-col no-underline cursor-pointer"
                aria-label="Go to home"
                title={`${userData.name} - Home`}
              >
                <span className="text-lg font-bold text-slate-900">{userData.name}</span>
                <span className="text-xs font-normal text-slate-500">{userData.job_role}</span>
              </ScrollLink>
            </div>

            {/* Desktop menu */}
            <div className="hidden lg:flex items-center ml-auto">
              <ul className="flex items-center gap-2 mb-0 list-none pl-0">
                {NAV_ITEMS.map((item) => (
                  <li key={item.LinkTo} className={item.className}>
                    <ScrollLink
                      to={item.LinkTo}
                      smooth
                      duration={500}
                      spy
                      activeClass="active"
                      className="nav-link relative px-4 py-2 font-medium transition-all duration-300 no-underline"
                      aria-label={`Navigate to ${item.navitem} section`}
                    >
                      <span className="nav-link-text relative z-10">{item.navitem}</span>
                      <span className="nav-link-indicator" />
                    </ScrollLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile toggler */}
            <div className="lg:hidden ml-auto flex items-center">
              <NavbarToggler
                isOpen={isMobileMenuOpen}
                onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 pb-4 border-t border-black/5 bg-white shadow-lg rounded-b-xl animate-in slide-in-from-top-4 duration-300">
            <div className="container mx-auto px-4">
              <ul className="flex flex-col gap-1 list-none pl-0 mb-0">
                {NAV_ITEMS.map((item) => (
                  <li key={item.LinkTo} className={item.className}>
                    <ScrollLink
                      to={item.LinkTo}
                      smooth
                      duration={500}
                      spy
                      activeClass="active"
                      className="nav-link block px-4 py-3 rounded-lg text-center font-medium no-underline"
                      aria-label={`Navigate to ${item.navitem} section`}
                      onClick={handleNavClick}
                    >
                      <span className="nav-link-text">{item.navitem}</span>
                    </ScrollLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
