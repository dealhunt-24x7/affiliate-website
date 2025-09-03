// Type for Product
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  affiliateLink: string;
  specs?: Record<string, string>; // Optional product specifications
}

// Type for Blog Post
export interface BlogPost {
  slug: string;
  title: string;
  author: string;
  date: string; // ISO string format
  content: string;
  image?: string;
  tags: string[];
}
