import { UserData, SocialMediaLink, Project, CareerItem } from '@/types';
import userDataJson from '@/data/profile.json';
import userSocialMediaJson from '@/data/social-links.json';
import projectsJson from '@/data/projects.json';
import careerJson from '@/data/career.json';

export const getUserData = (): UserData => {
  return userDataJson as UserData;
};

export const getSocialMediaLinks = (): SocialMediaLink[] => {
  return userSocialMediaJson as SocialMediaLink[];
};

export const getProjects = (): Project[] => {
  return projectsJson as Project[];
};

export const getFilteredSocialMedia = (filters: string[]): SocialMediaLink[] => {
  const links = getSocialMediaLinks();
  return links.filter((link) => filters.includes(link.title));
};

export const getCareers = (): CareerItem[] => {
  return careerJson as CareerItem[];
};

