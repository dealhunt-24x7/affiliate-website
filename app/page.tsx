"use client";
export const dynamic = "force-dynamic";

import DealOfTheDay from "@/components/DealOfTheDay";
import CategoryRow from "@/components/CategoryRow";
import BlogHighlights from "@/components/BlogHighlights";
import FloatingButton from "@/components/FloatingButton";

const categories = [
  { name: "Mobile", image: "/images/categories/mobile.png" },
  { name: "Laptop", image: "/images/categories/laptop.png" },
  { name: "Headphones", image: "/images/categories/headphones.png" },
  { name: "Watches", image: "/images/categories/watch.png" },
  { name: "Electronics", image: "/images/categories/electronics.png" },
  { name: "Men", image: "/images/categories/men.png" },
  { name: "Women", image: "/images/categories/women.png" },
  { name: "Kids", image: "/images/categories/kids.png" },
  { name: "Fashion", image: "/images/categories/fashion.png" },
  { name: "Footwear", image: "/images/categories/footwear.png" },
  { name: "Home appliances", image: "/images/categories/home-appliances.png" },
  { name: "Sports", image: "/images/categories/sports.png" },
  { name: "Jwellery", image: "/images/categories/jwellery.png" },
  { name: "Kitchen", image: "/images/categories/kitchen.png" },
  { name: "Home decor", image: "/images/categories/home-decor.png" },
  { name: "Study", image: "/images/categories/study.png" },
  { name: "Others", image: "/images/categories/others.png" },
];

export default function HomePage() {
  return (
    <main className="px-4 md:px-8 py-6 min-h-screen bg-gray-50 text-gray-800">
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-yellow-400">
          Deal of the Day
        </h2>
        <DealOfTheDay />
      </section>

      {categories.map((c, idx) => (
        <CategoryRow key={idx} category={c} />
      ))}

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-yellow-400">
          From Our Blog
        </h2>
        <BlogHighlights />
      </section>

      <FloatingButton />
    </main>
  );
}
