export interface Project {
  name: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
}

export interface Education {
  institution: string;
  degree: string;
  location: string;
  year: string;
  grade: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}