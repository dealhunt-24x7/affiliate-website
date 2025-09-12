"use client";
export const dynamic = "force-dynamic";

import { useRef } from "react";
import DealOfTheDay from "@/components/DealOfTheDay";
import CategoryRow from "@/components/CategoryRow";
import BlogHighlights from "@/components/BlogHighlights";
import FloatingButton from "@/components/FloatingButton";
import Link from "next/link";
import { categories } from "@/data/categoriesList";

export default function HomePage() {
  const rowRefs = useRef<Record<string, HTMLDivElement | null>>({});

  return (
    <main className="px-4 md:px-8 min-h-screen bg-[#B9BBB6] text-gray-800">
      <DealOfTheDay />

      {/* ✅ Only first 5 categories on home page */}
      {categories.slice(0, 5).map((c) => (
        <div
          key={c.slug}
          ref={(el) => {
            rowRefs.current[c.slug] = el;
          }}
          id={c.slug}
        >
          <CategoryRow category={c} />
        </div>
      ))}

      {/* ✅ Blog Section */}
      <section className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 text-white text-center py-10 px-4 rounded-2xl shadow-lg my-10">
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

      <section className="mb-10">
        <BlogHighlights />
      </section>

      <FloatingButton />
    </main>
  );
}
