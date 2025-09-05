import { BlogPost } from "./types";

const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "best-deals-september",
    title: "Best Deals to Grab in September",
    author: "Dealhunt Team",
    date: "2025-09-01",
    image: "/placeholder.png",
    cover: "/placeholder.png",
    excerpt: "Quick highlights of September’s hottest shopping deals.",
    content: "Here are the hottest deals you can grab in September...",
    tags: ["deals", "september", "shopping"],
  },
  {
    id: 2,
    slug: "how-to-save-money-online",
    title: "How to Save Money on Online Shopping",
    author: "Dealhunt Experts",
    date: "2025-08-20",
    image: "/placeholder.png",
    cover: "/placeholder.png",
    excerpt: "Tips & tricks to maximize your savings when shopping online.",
    content: "Saving money online is easier than ever if you follow these tips...",
    tags: ["shopping", "savings", "guide"],
  },
];

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts;
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
