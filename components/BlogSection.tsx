"use client";
import { useState } from "react";

const blogs = [
  {
    id: 1,
    title: "Top 10 Watches to Invest In 2025",
    content: "Discover the luxury watches that hold their value over time...",
  },
  {
    id: 2,
    title: "How to Spot a Fake Rolex",
    content: "Learn key differences between authentic and fake Rolex watches...",
  },
  {
    id: 3,
    title: "Best Jewelry Deals This Month",
    content: "We handpicked the most exciting jewelry discounts for you...",
  },
];

export default function BlogSection() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Latest Blogs
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-xl shadow p-4 flex flex-col justify-between"
          >
            <h3 className="font-semibold text-lg mb-2">{blog.title}</h3>
            <p className="text-gray-600">
              {expanded === blog.id ? blog.content : blog.content.slice(0, 40) + "..."}
            </p>
            <button
              onClick={() => setExpanded(expanded === blog.id ? null : blog.id)}
              className="text-yellow-500 font-medium mt-3 hover:underline"
            >
              {expanded === blog.id ? "View Less" : "View More"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
