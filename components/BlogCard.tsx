import Link from "next/link";
import { BlogPost } from "@/lib/blog";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="border p-4 rounded-lg shadow-sm bg-white hover:shadow-md transition">
      <img
        src={post.image || "/placeholder.png"}
        alt={post.title}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-semibold mb-1">
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
      </h3>
      <p className="text-sm text-gray-500 mb-2">
        {post.date} • {post.author}
      </p>
      <div className="flex flex-wrap gap-2">
        {post.tags.map((t) => (
          <span
            key={t}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm text-gray-700"
          >
            #{t}
          </span>
        ))}
      </div>
    </article>
  );
}
