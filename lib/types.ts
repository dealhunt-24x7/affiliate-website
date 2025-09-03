export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image?: string;
  affiliateLink: string;
  category?: string;
  specs?: Record<string, string>; // ✅ Added specs property
}

export interface Blog {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  date: string;
  author: string;
  image?: string;
}
