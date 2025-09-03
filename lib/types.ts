export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  cover: string;
  date: string;
  tags: string[];
  author: string;
  image?: string;
};

export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  affiliateLink: string;
  specs?: Record<string, string>;
};
