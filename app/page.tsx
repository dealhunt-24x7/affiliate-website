"use client";
import { useRef } from "react";
import DealOfTheDay from "@/components/DealOfTheDay";
import CategoryRow from "@/components/CategoryRow";
import BlogHighlights from "@/components/BlogHighlights";
import FloatingButton from "@/components/FloatingButton";
import Header from "@/components/Header";

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

  const handleCategorySelect = (slug: string) => {
    const element = rowRefs.current[slug];
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <main className="px-4 md:px-8 min-h-screen bg-[#B9BBB6] text-gray-800">
      <div className="h-[1px] bg-white"></div>

      <Header onCategorySelect={handleCategorySelect} />

      <DealOfTheDay />

      {categories.map((c, idx) => (
        <div
          key={idx}
          ref={(el) => (rowRefs.current[c.slug] = el)}
        >
          <CategoryRow category={c} />
        </div>
      ))}

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-yellow-400">From Our Blog</h2>
        <BlogHighlights />
      </section>

      <FloatingButton />
    </main>
  );
}
