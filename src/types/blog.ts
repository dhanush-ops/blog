export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  featuredImage: string;
  readTime: number;
  featured?: boolean;
}

export interface Comment {
  id: number;
  postId: number;
  author: string;
  email: string;
  content: string;
  date: string;
}

export interface Category {
  name: string;
  count: number;
}