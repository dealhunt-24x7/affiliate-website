export const dynamic = "force-dynamic";

import { getAllBlogPosts } from "@/lib/blog";
import { BlogCard } from "@/components/BlogCard";
import { motion } from "framer-motion";

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <main className="max-w-6xl mx-auto">
      {/* ✅ Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 text-white text-center py-14 px-6 rounded-3xl shadow-xl my-8"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg tracking-tight">
          From <span className="text-yellow-200">🛒 Cart</span> to{" "}
          <span className="text-green-200">❤️ Heart</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-white/90 leading-relaxed">
          Discover how you can <span className="font-semibold">save money</span>, 
          shop smarter, and even <span className="font-semibold">donate your savings</span> 
          to make a real difference. Shopping that truly matters. ✨
        </p>

        {/* ✅ Future AI Video Placeholder */}
        <div className="mt-6">
          <div className="aspect-video w-full md:w-[70%] mx-auto rounded-2xl overflow-hidden shadow-lg bg-black/30 flex items-center justify-center text-white/70 text-sm italic">
            🎥 AI-powered explainer video coming soon...
          </div>
        </div>
      </motion.section>

      {/* ✅ Blog Grid */}
      <section className="px-4 md:px-6 pb-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </motion.div>
      </section>
    </main>
  );
}
