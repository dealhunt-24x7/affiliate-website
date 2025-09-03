import { Product } from "./types";

const products: Product[] = [
  {
    id: 1,
    name: "Alpha Headphones",
    slug: "alpha-headphones",
    description: "Wireless over-ear headphones with ANC and 30h battery.",
    price: 99.99,
    rating: 4.5,
    specs: { Brand: "Alpha", Battery: "30h", Weight: "250g", ANC: "Yes" },
    image: "/images/product1.jpg",
    affiliateLink: "https://example.com/alpha"
  },
  {
    id: 2,
    name: "Beta Smartwatch",
    slug: "beta-smartwatch",
    description: "AMOLED display, GPS, heart-rate and sleep tracking.",
    price: 149.0,
    rating: 4.2,
    specs: { Brand: "Beta", Display: "AMOLED", GPS: "Yes", Water: "5ATM" },
    image: "/images/product2.jpg",
    affiliateLink: "https://example.com/beta"
  },
  {
    id: 3,
    name: "Gamma Bluetooth Speaker",
    slug: "gamma-bluetooth-speaker",
    description: "Portable speaker with deep bass and 12h playtime.",
    price: 59.0,
    rating: 4.3,
    specs: { Brand: "Gamma", Battery: "12h", Waterproof: "IPX6", Power: "20W" },
    image: "/images/product3.jpg",
    affiliateLink: "https://example.com/gamma"
  }
];

export function getProducts(): Product[] {
  return products;
}

export function getProductById(id: number): Product | null {
  return products.find((p) => p.id === id) ?? null;
}

export function getProductBySlug(slug: string): Product | null {
  return products.find((p) => p.slug === slug) ?? null;
}
