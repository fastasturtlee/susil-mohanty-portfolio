export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  type: 'journal' | 'conference' | 'preprint';
  featured?: boolean;
  doi?: string;
  pdfUrl?: string;
  codeUrl?: string;
  abstract?: string;
  metrics?: string;
}

export interface JourneyItem {
  id: string;
  type: 'education' | 'experience';
  title: string;
  institution: string;
  period: { start: number; end: number | 'present' };
  location?: string;
  supervisor?: string;
  thesis?: string;
  rank?: string;
  grant?: string;
  description?: string;
}

export interface ResearchArea {
  id: string;
  title: string;
  description: string;
  icon?: string;
  tags?: string[];
}

export interface Course {
  id: string;
  code: string;
  name: string;
  semester: string;
  year: number;
  active: boolean;
  syllabusUrl?: string;
  description?: string;
  textbooks?: string[];
}

export type SocialPlatform = 'google-scholar' | 'researchgate' | 'dblp' | 'linkedin' | 'github';

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  url: string;
}

export interface Profile {
  name: string;
  title: string;
  department: string;
  institution: string;
  email: string;
  phone: string;
  officeRoom: string;
  address: string;
  researchTagline: string;
  about: string;
  socialLinks: SocialLink[];
  cvUrl: string;
  photoUrl: string;
}
