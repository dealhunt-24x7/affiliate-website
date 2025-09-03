import Link from "next/link"
import { BlogPost } from "@/lib/types"

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <div className="border p-4 rounded-lg shadow-sm">
      <img
        src={post.cover}
        alt={post.title}
        className="w-full h-48 object-cover rounded"
      />
      <h2 className="text-xl font-bold mt-2">{post.title}</h2>
      <p className="text-gray-600">{post.excerpt}</p>
      <Link href={`/blog/${post.slug}`} className="text-blue-500 mt-2 inline-block">
        Read More
      </Link>
    </div>
  )
}
