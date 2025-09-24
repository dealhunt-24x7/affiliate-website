"use client";
import { useState } from "react";

const blogs = [
  {
    id: 1,
    title: "Top 10 Watches to Invest In 2025",
    content:
      "Discover the luxury watches that hold their value over time. These watches are perfect for collectors and investors alike...",
  },
  {
    id: 2,
    title: "How to Spot a Fake Rolex",
    content:
      "Learn key differences between authentic and fake Rolex watches. Avoid scams and make informed purchases with these tips...",
  },
  {
    id: 3,
    title: "Best Jewelry Deals This Month",
    content:
      "We handpicked the most exciting jewelry discounts for you. From rings to necklaces, grab your favorite pieces now...",
  },
  {
    id: 4,
    title: "Luxury Watches Worth Collecting",
    content:
      "A guide to the most valuable watches for collectors. Understand the market trends and know which pieces appreciate over time...",
  },
  {
    id: 5,
    title: "Top Jewelry Trends 2025",
    content:
      "Stay ahead with the latest jewelry trends and designs. Discover new materials, styles, and exclusive collections...",
  },
  {
    id: 6,
    title: "How to Care for Your Watches",
    content:
      "Tips and tricks to maintain your luxury timepieces. Learn about cleaning, storage, and maintenance schedules to preserve value...",
  },
];

export default function BlogSection() {
  const [showAll, setShowAll] = useState(false);
  const [expandedIds, setExpandedIds] = useState<number[]>([]);

  const displayedBlogs = showAll ? blogs : blogs.slice(0, 3);

  const toggleBlogContent = (id: number) => {
    if (expandedIds.includes(id)) {
      setExpandedIds(expandedIds.filter((i) => i !== id));
    } else {
      setExpandedIds([...expandedIds, id]);
    }
  };

  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Latest Blogs
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {displayedBlogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-xl shadow p-4 flex flex-col justify-between"
          >
            <h3 className="font-semibold text-lg mb-2">{blog.title}</h3>
            <p className="text-gray-600">
              {expandedIds.includes(blog.id)
                ? blog.content
                : blog.content.slice(0, 60) + "..."}
            </p>
            <button
              onClick={() => toggleBlogContent(blog.id)}
              className="text-yellow-500 font-medium mt-3 hover:underline"
            >
              {expandedIds.includes(blog.id) ? "View Less" : "View More"}
            </button>
          </div>
        ))}
      </div>

      {/* Global View More / Less */}
      <div className="text-center mt-6">
        <button
          className="text-yellow-500 font-semibold hover:underline"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "View Less Blogs" : "View More Blogs"}
        </button>
      </div>
    </section>
  );
}
