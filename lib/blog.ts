import blogPostsData from "../data/blog.json";
import { BlogPost } from "./types";

export const getBlogPosts = (): BlogPost[] => {
  return blogPostsData;
};

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPostsData.find((post) => post.slug === slug);
};
