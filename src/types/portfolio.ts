export interface ProjectData {
  title: string;
  description: string;
  detailedDescription: string;
  keyFeatures: string[];
  technologies: string[];
  githubUrl?: string;
  projectUrl?: string;
  webAvailable: boolean;
  androidAvailable: boolean;
  category: string;
  duration: string;
}

export interface ExperienceData {
  company: string;
  role: string;
  location: string;
  duration: string;
  accentColor: string;
  responsibilities: string[];
  certificateUrl?: string;
}

export interface AchievementData {
  title: string;
  organization: string;
  date: string;
  amount: string;
  description: string;
  icon: string;
  color: string;
  certificateUrl?: string;
}

export interface CertificationData {
  title: string;
  issuer: string;
  date: string;
  color: string;
  url?: string;
}

export interface SkillItem {
  name: string;
  level: number;
}

export interface CapabilityItem {
  icon: string;
  color: string;
  title: string;
  desc: string;
}

export interface SocialLinkItem {
  name: string;
  url: string;
  accent: string;
  icon?: string;
  iconImg?: string;
}
