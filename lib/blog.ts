export type BlogPost = {
  slug: string;
  title: string;
  author: string;
  date: string;
  image?: string;
  content: string;
  tags: string[];
};

const blogPosts: BlogPost[] = [
  {
    slug: "best-deals-september",
    title: "Best Deals to Grab in September",
    author: "Dealhunt Team",
    date: "2025-09-01",
    image: "/placeholder.png",
    content: "Here are the hottest deals you can grab in September...",
    tags: ["deals", "september", "shopping"],
  },
  {
    slug: "how-to-save-money-online",
    title: "How to Save Money on Online Shopping",
    author: "Dealhunt Experts",
    date: "2025-08-20",
    image: "/placeholder.png",
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
