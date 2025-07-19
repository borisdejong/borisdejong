// types/resume.d.ts

export interface EducationEntry {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface WorkExperienceEntry {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}

// Interface for the overall resume data structure
export interface ResumeData {
  education: EducationEntry[]; // An array of EducationEntry objects
  workExperience: WorkExperienceEntry[]; // An array of WorkExperienceEntry objects
}
