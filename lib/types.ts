export type Product = {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  rating: number;
  specs: Record<string, string>;
  image: string;
  affiliateLink: string;
};

export type BlogPost = {
  id: number;
  title: string;
  slug: string;
  date: string;
  author: string;
  excerpt: string;
  content: string;
  image: string;
  cover: string;
  tags: string[];
};
