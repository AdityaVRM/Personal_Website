export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  link?: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'AI/ML' | 'Programming' | 'Tools' | 'Robotics';
}