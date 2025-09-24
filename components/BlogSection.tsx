"use client";
import { useState, useEffect } from "react";

const allBlogs = [
  { id: 1, title: "Top 10 Watches to Invest In 2025", content: "Discover the luxury watches that hold their value over time..." },
  { id: 2, title: "How to Spot a Fake Rolex", content: "Learn key differences between authentic and fake Rolex watches..." },
  { id: 3, title: "Best Jewelry Deals This Month", content: "We handpicked the most exciting jewelry discounts for you..." },
  { id: 4, title: "Luxury Watches Care Tips", content: "Keep your watches pristine with these care tips..." },
  { id: 5, title: "Guide to Investing in Luxury Jewelry", content: "Jewelry can be a smart investment if you know how..." },
  { id: 6, title: "Smartwatches vs Luxury Watches", content: "Compare features, style, and investment value..." },
  { id: 7, title: "Top Jewelry Brands in 2025", content: "Explore the brands that set trends and retain value..." },
  { id: 8, title: "Rolex Market Trends", content: "Track how Rolex watches are performing in 2025..." },
  { id: 9, title: "How to Sell Your Luxury Watch", content: "Step by step guide to selling watches securely..." },
  { id: 10, title: "Exclusive Deals You Can't Miss", content: "Limited-time luxury deals for savvy shoppers..." },
];

export default function BlogSection() {
  const [visibleCount, setVisibleCount] = useState(3);
  const [expandedBlogs, setExpandedBlogs] = useState<number[]>([]);

  // Load more blogs
  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, allBlogs.length));
  };

  const toggleExpand = (id: number) => {
    setExpandedBlogs((prev) =>
      prev.includes(id) ? prev.filter((b) => b !== id) : [...prev, id]
    );
  };

  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Latest Blogs</h2>

      <div className="grid gap-6 md:grid-cols-3">
        {allBlogs.slice(0, visibleCount).map((blog) => (
          <div key={blog.id} className="bg-white rounded-xl shadow p-4 flex flex-col justify-between">
            <h3 className="font-semibold text-lg mb-2">{blog.title}</h3>
            <p className="text-gray-600">
              {expandedBlogs.includes(blog.id) ? blog.content : blog.content.slice(0, 50) + "..."}
            </p>
            <button
              onClick={() => toggleExpand(blog.id)}
              className="text-yellow-500 font-medium mt-3 hover:underline"
            >
              {expandedBlogs.includes(blog.id) ? "View Less" : "View More"}
            </button>
          </div>
        ))}
      </div>

      {visibleCount < allBlogs.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={loadMore}
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-2 rounded-full shadow transition"
          >
            See More Blogs
          </button>
        </div>
      )}
    </section>
  );
}
