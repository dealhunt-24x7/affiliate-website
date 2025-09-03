import { getBlogPostBySlug } from "@/lib/blog";
import { notFound } from "next/navigation";
import Image from "next/image";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-600 mb-1">By {post.author}</p>
      <p className="text-gray-500 mb-6">{post.date}</p>
      <Image
        src={post.image || "/placeholder.png"}
        alt={post.title}
        width={800}
        height={400}
        className="w-full h-auto rounded-md mb-6"
      />
      <article className="prose max-w-none">{post.content}</article>
      <div className="flex flex-wrap gap-2 mt-6">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm text-gray-700"
          >
            #{tag}
          </span>
        ))}
      </div>
    </main>
  );
}
