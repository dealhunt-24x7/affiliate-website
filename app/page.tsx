"use client";
export const dynamic = "force-dynamic";

import { useRef } from "react";
import DealOfTheDay from "@/components/DealOfTheDay";
import CategoryRow from "@/components/CategoryRow";
import BlogHighlights from "@/components/BlogHighlights";
import FloatingButton from "@/components/FloatingButton";
import Link from "next/link";

const categories = [
  { name: "Mobile", slug: "mobile", image: "/images/categories/mobile.png" },
  { name: "Laptop", slug: "laptop", image: "/images/categories/laptop.png" },
  { name: "Headphones", slug: "headphones", image: "/images/categories/headphones.png" },
  { name: "Watches", slug: "watches", image: "/images/categories/watch.png" },
  { name: "Electronics", slug: "electronics", image: "/images/categories/electronics.png" },
  { name: "Men", slug: "men", image: "/images/categories/men.png" },
  { name: "Women", slug: "women", image: "/images/categories/women.png" },
  { name: "Kids", slug: "kids", image: "/images/categories/kids.png" },
  { name: "Fashion", slug: "fashion", image: "/images/categories/fashion.png" },
  { name: "Footwear", slug: "footwear", image: "/images/categories/footwear.png" },
  { name: "Home appliances", slug: "home-appliances", image: "/images/categories/home-appliances.png" },
  { name: "Sports", slug: "sports", image: "/images/categories/sports.png" },
  { name: "Jwellery", slug: "jwellery", image: "/images/categories/jwellery.png" },
  { name: "Kitchen", slug: "kitchen", image: "/images/categories/kitchen.png" },
  { name: "Home decor", slug: "home-decor", image: "/images/categories/home-decor.png" },
  { name: "Study", slug: "study", image: "/images/categories/study.png" },
  { name: "Others", slug: "others", image: "/images/categories/others.png" },
];

export default function HomePage() {
  const rowRefs = useRef<Record<string, HTMLDivElement | null>>({});

  return (
    <main className="px-4 md:px-8 min-h-screen bg-[#B9BBB6] text-gray-800">
      {/* ✅ Deal of the Day */}
      <DealOfTheDay />

      {/* ✅ Category Rows */}
      {categories.map((c) => (
        <div
          key={c.slug}
          ref={(el) => { rowRefs.current[c.slug] = el; }}
          id={c.slug}
        >
          <CategoryRow category={c} />
        </div>
      ))}

      {/* ✅ Blog Mini-Hero Section */}
      <section className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 text-white text-center py-10 px-4 rounded-2xl shadow-lg my-10">
        {/* ❌ Removed "From Our Blog" heading */}
        <h3 className="text-3xl md:text-4xl font-extrabold">
          From <span className="text-yellow-200">Cart</span> to{" "}
          <span className="text-[#FF2E2E]">Heart</span>
        </h3>
        <p className="mt-3 text-base md:text-lg max-w-2xl mx-auto text-white/90">
          Learn how to save money, shop smarter and donate your savings
          to make a difference!
        </p>
        <Link
          href="/blog"
          className="mt-4 inline-block bg-white text-pink-600 font-semibold px-5 py-2 rounded-full shadow hover:bg-gray-100 transition"
        >
          View All Blogs
        </Link>
      </section>

      {/* ✅ Blog Highlights */}
      <section className="mb-10">
        <BlogHighlights />
      </section>

      {/* ✅ Floating Buttons */}
      <FloatingButton />
    </main>
  );
}
