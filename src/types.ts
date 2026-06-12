import { LucideIcon } from 'lucide-react';

export interface Project {
  id: number;
  name: string;
  image: string | null;
  video?: string;
  link: string;
  description: string;
  tags?: string[];
}

export interface Social {
  name: string;
  icon: LucideIcon;
  url: string;
  color: string;
}
