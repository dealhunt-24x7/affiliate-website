"use client";
export const dynamic = "force-dynamic";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import DealOfTheDay from "@/components/DealOfTheDay";
import BlogHighlights from "@/components/BlogHighlights";
import FloatingButton from "@/components/FloatingButton";
import Link from "next/link";

const CategoryRow = dynamic(() => import("@/components/CategoryRow"), {
  loading: () => <p className="text-center text-gray-400">Loading...</p>,
  ssr: false,
});

export default function HomePage() {
  const [categories, setCategories] = useState<any[]>([]);
  const [visibleCount, setVisibleCount] = useState(5);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await fetch("/api/categories");
        if (!res.ok) throw new Error("Failed to fetch categories");
        const data = await res.json();
        setCategories(data.categories || []);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }
    fetchCategories();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
        setVisibleCount((prev) => (prev < categories.length ? prev + 3 : prev));
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [categories]);

  return (
    <main className="px-4 md:px-8 min-h-screen bg-[#B9BBB6] text-gray-800">
      <DealOfTheDay />

      {categories.length > 0 ? (
        categories.slice(0, visibleCount).map((c) => (
          <div key={c.slug} id={c.slug}>
            <CategoryRow category={c} />
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500 my-10">Loading categories...</p>
      )}

      <section className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 text-white text-center py-10 px-4 rounded-2xl shadow-lg my-10">
        <h3 className="text-3xl md:text-4xl font-extrabold">
          From <span className="text-yellow-200">Cart</span> to{" "}
          <span className="text-[#FF2E2E]">Heart</span>
        </h3>
        <p className="mt-3 text-base md:text-lg max-w-2xl mx-auto text-white/90">
          Learn how to save money, shop smarter and donate your savings to make a difference!
        </p>
        <Link
          href="/blog"
          className="mt-4 inline-block bg-white text-pink-600 font-semibold px-5 py-2 rounded-full shadow hover:bg-gray-100 transition"
        >
          View All Blogs
        </Link>
      </section>

      <BlogHighlights />
      <FloatingButton />
    </main>
  );
}
