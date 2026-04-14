import type { NavItem } from '@/types';

export const NAV_ITEMS: NavItem[] = [
  { navitem: 'Home', LinkTo: 'home', className: 'nav-item' },
  { navitem: 'About', LinkTo: 'aboutMe', className: 'nav-item' },
  { navitem: 'Experience', LinkTo: 'experience', className: 'nav-item' },
  { navitem: 'Project', LinkTo: 'projects', className: 'nav-item' },
  { navitem: 'Contact', LinkTo: 'contact', className: 'nav-item' },
];

export const FOOTER_NAV_ITEMS: NavItem[] = [
  { navitem: 'Home', LinkTo: 'home', className: 'nav-item me-3' },
  { navitem: 'About', LinkTo: 'aboutMe', className: 'nav-item me-3' },
  { navitem: 'Experience', LinkTo: 'experience', className: 'nav-item me-3' },
  { navitem: 'Project', LinkTo: 'projects', className: 'nav-item me-3' },
  { navitem: 'Contact', LinkTo: 'contact', className: 'nav-item me-3' },
];
