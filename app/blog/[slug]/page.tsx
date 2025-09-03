import { getBlogPostBySlug, getAllBlogPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import Image from "next/image";

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 mb-2">By {post.author}</p>
      <p className="text-gray-500 mb-6">{post.date}</p>
      <Image
        src={post.image || "/placeholder.png"}
        alt={post.title}
        width={800}
        height={400}
        className="rounded-md mb-6"
      />
      <div className="prose max-w-none">
        <p>{post.content}</p>
      </div>
      <div className="mt-4">
        {post.tags.map((tag: string) => (
          <span
            key={tag}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm text-gray-700 mr-2"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}
