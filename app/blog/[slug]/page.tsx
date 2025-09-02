import { notFound } from "next/navigation";
import { getBlogPostBySlug } from "@/lib/blog";

interface BlogPostPageProps {
  params: { slug: string };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <article className="prose max-w-none">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-sm text-gray-500 mb-6">
          {new Date(post.date).toLocaleDateString()}
        </p>
        <img
          src={post.cover}
          alt={post.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <div
          className="text-lg text-gray-700"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <div className="mt-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm text-gray-700 mr-2"
            >
              #{tag}
            </span>
          ))}
        </div>
      </article>
    </main>
  );
}
