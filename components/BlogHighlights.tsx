import Link from "next/link";
import { getAllBlogPosts } from "@/lib/blog";

export default function BlogHighlights() {
  const posts = getAllBlogPosts().slice(0, 3); // Example: first 3 posts

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {posts.map((post) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="block bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition"
        >
          <h3 className="text-lg font-semibold text-blue-600 mb-2">
            {post.title}
          </h3>
          <p className="text-sm text-gray-600">{post.excerpt}</p>
          <span className="text-xs text-gray-400 mt-2 block">
            By {post.author} • {post.date}
          </span>
        </Link>
      ))}
    </div>
  );
}
