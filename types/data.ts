export interface UserData {
  name: string;
  email: string;
  job_role: string;
  expirence_year: number;
  description: string;
  skills: string[];
  user_img: string;
  about: string;
  project_title: string;
  project: string;
  connect: string;
}

export interface SocialMediaLink {
  title: string;
  LinkTo: string;
  iconId: 'linkedin' | 'github' | 'email' | 'stack_overflow' | 'instagram';
}

export interface Project {
  id: number;
  name: string;
  image: string;
  host_link: string;
  technology_used: string[];
  linkedin_post: string;
  description?: string;
}

export interface CareerItem {
  id: string;
  companyName: string;
  companyWebsite?: string;
  role: string;
  startDate: string;
  endDate?: string | null;
  isCurrent: boolean;
  description: string;
  bullets?: string[];
  location?: string;
  type?: 'work' | 'break';
  highlight?: string;
  order?: number;
}
