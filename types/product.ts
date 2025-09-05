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
