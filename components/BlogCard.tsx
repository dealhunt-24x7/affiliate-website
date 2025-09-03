import Link from "next/link";
import { BlogPost } from "@/lib/types";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <img src={post.cover} alt={post.title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{post.title}</h3>
        <p className="text-sm text-gray-600 mb-2">{post.excerpt}</p>
        <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:underline">
          Read More →
        </Link>
      </div>
    </div>
  );
}
