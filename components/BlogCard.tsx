import Link from "next/link";
import { BlogPost } from "@/lib/types";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
      <Link href={`/blog/${post.slug}`}>
        <h2 className="text-xl font-bold mb-2">{post.title}</h2>
        {post.image && (
          <img
            src={post.image}
            alt={post.title}
            className="rounded mb-2 w-full h-48 object-cover"
          />
        )}
        <p className="text-sm text-gray-600 mb-2">
          By {post.author} • {new Date(post.date).toLocaleDateString()}
        </p>
        <p className="text-gray-700">{post.content.slice(0, 100)}...</p>
      </Link>
    </div>
  );
}
