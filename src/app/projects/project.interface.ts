export interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  alias?: string;
  github?: string;
  createdAt: string;
  updatedAt: string;
}
