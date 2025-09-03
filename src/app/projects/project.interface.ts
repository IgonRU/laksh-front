export interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  url?: string;
  github?: string;
  createdAt: string;
  updatedAt: string;
}
