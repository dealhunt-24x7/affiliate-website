export const dynamic = "force-dynamic";

import { getAllBlogPosts } from "@/lib/blog";
import { BlogCard } from "@/components/BlogCard";

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <main className="max-w-5xl mx-auto">
      {/* ✅ Hero Section */}
      <section className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 text-white text-center py-12 px-4 rounded-2xl shadow-lg my-6">
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-md">
          From <span className="text-yellow-200">Cart</span> to{" "}
          <span className="text-green-200">Heart</span>
        </h1>
        <p className="mt-3 text-lg md:text-xl max-w-2xl mx-auto text-white/90">
          Discover the best ways to save money, make smarter shopping decisions,
          and even donate your savings to make the world a better place.
        </p>
      </section>

      {/* ✅ Blog Grid */}
      <section className="p-6">
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </main>
  );
}
