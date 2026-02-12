
export type Language = 'kg' | 'ru';

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface NavItem {
  name: string;
  id: string;
}
