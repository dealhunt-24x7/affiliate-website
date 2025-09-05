export const dynamic = "force-dynamic";

import { getAllBlogPosts } from "@/lib/blog";
import { BlogCard } from "@/components/BlogCard";

export default function BlogPage() {
  const posts = getAllBlogPosts();
  return (
    <main className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </main>
  );
}
