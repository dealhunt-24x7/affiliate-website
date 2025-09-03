export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  affiliateLink: string;
  specs?: Record<string, string>;
}

export interface BlogPost {
  slug: string;
  title: string;
  author: string;
  date: string;
  content: string;
  image?: string;
  tags: string[];
}
