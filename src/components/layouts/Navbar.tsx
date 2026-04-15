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
    <>
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
              <div className="hidden md:flex items-center ml-auto">
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
              <div className="md:hidden ml-auto flex items-center gap-3">
                <NavbarToggler
                  isOpen={isMobileMenuOpen}
                  onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                />
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile menu Sidebar */}
      <div 
        className={`fixed inset-0 z-[2000] md:hidden transition-all duration-500 ${isMobileMenuOpen ? 'visible' : 'invisible'}`}
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-500 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Sidebar Content */}
        <div 
          className={`fixed right-0 top-0 h-screen w-[280px] bg-white shadow-2xl transition-transform duration-500 ease-out flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="p-6 flex items-center justify-between border-b border-slate-100">
            <div className="flex items-center gap-3">
              <Image
                src="/profile.jpeg"
                alt={userData.name}
                width={36}
                height={36}
                className="rounded-full aspect-square object-cover border-2 border-slate-200 shadow-sm"
              />
              <span className="font-bold text-slate-900">{userData.name}</span>
            </div>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-50 text-slate-600 hover:bg-slate-100"
              aria-label="Close menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-6 px-4">
            <ul className="flex flex-col gap-2 list-none pl-0 mb-0">
              {NAV_ITEMS.map((item) => (
                <li key={item.LinkTo}>
                  <ScrollLink
                    to={item.LinkTo}
                    smooth
                    duration={500}
                    spy
                    activeClass="!bg-slate-900 !text-white"
                    className="flex items-center px-4 py-3.5 rounded-xl font-semibold text-slate-600 hover:bg-slate-50 transition-all no-underline cursor-pointer"
                    aria-label={`Navigate to ${item.navitem} section`}
                    onClick={handleNavClick}
                  >
                    <span className="flex-1">{item.navitem}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-30"><polyline points="9 18 15 12 9 6"></polyline></svg>
                  </ScrollLink>
                </li>
              ))}
            </ul>
            
            <div className="mt-4 px-4">
              <a
                href="/resume.pdf"
                download="Sruthi_Sasidharan_Resume.pdf"
                className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl font-bold bg-slate-900 text-white hover:bg-black transition-all no-underline"
                onClick={handleNavClick}
              >
                <span>Download Resume</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              </a>
            </div>
          </div>

          <div className="p-6 border-t border-slate-100 text-center">
            <p className="text-xs text-slate-400 font-medium">© {new Date().getFullYear()} {userData.name}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
