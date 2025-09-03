import { BlogPost } from "./types";

const posts: BlogPost[] = [
  {
    id: 1,
    title: "Best Wireless Headphones Under $100",
    slug: "best-wireless-headphones-under-100",
    date: "2025-01-10",
    author: "Team DealHunt",
    content:
      "In this guide, we compare the best budget wireless headphones. We looked at comfort, ANC, battery life and value.",
    image: "/images/blog/headphones-hero.jpg",
    cover: "/images/blog/headphones-cover.jpg",
    tags: ["audio", "headphones", "budget"]
  },
  {
    id: 2,
    title: "Smartwatch Buying Guide 2025",
    slug: "smartwatch-buying-guide-2025",
    date: "2025-01-15",
    author: "Team DealHunt",
    content:
      "This guide explains key smartwatch features like GPS, battery life, health sensors and app ecosystem.",
    image: "/images/blog/smartwatch-hero.jpg",
    cover: "/images/blog/smartwatch-cover.jpg",
    tags: ["wearables", "smartwatch"]
  },
  {
    id: 3,
    title: "Portable Speakers: What Matters Most",
    slug: "portable-speakers-what-matters-most",
    date: "2025-01-20",
    author: "Team DealHunt",
    content:
      "We break down sound quality, waterproofing, battery and form factor to help you choose a great portable speaker.",
    image: "/images/blog/speaker-hero.jpg",
    cover: "/images/blog/speaker-cover.jpg",
    tags: ["audio", "speakers", "guides"]
  }
];

export function getBlogPosts(): BlogPost[] {
  return posts;
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  return posts.find((p) => p.slug === slug) ?? null;
}
