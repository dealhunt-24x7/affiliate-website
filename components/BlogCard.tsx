import Link from "next/link"
import { BlogPost } from "@/lib/types"

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="border rounded-lg shadow-sm overflow-hidden">
      <img
        src={post.cover}
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <Link
          href={`/blog/${post.slug}`}
          className="text-blue-500 hover:underline"
        >
          Read more
        </Link>
      </div>
    </article>
  )
}
