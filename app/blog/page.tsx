import Link from "next/link";
import { getBlogPosts } from "@/lib/blog";

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Latest Blog Posts</h1>

      <div className="grid gap-6">
        {posts.map((post) => (
          <article key={post.id} className="border p-4 rounded-lg shadow-sm">
            <img
              src={post.cover}
              alt={post.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-2">{post.excerpt}</p>
            <p className="text-sm text-gray-500 mb-4">
              {new Date(post.date).toLocaleDateString()}
            </p>
            <Link
              href={`/blog/${post.slug}`}
              className="text-blue-600 font-medium hover:underline"
            >
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
