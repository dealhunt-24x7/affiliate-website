"use client";

import React, { useEffect, useRef } from "react";
import CategoryRow from "@/components/CategoryRow";
import ProductCard from "@/components/ProductCard";

export default function HomePage() {
  // Dummy products for Deal of the Day
  const dealProducts = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    name: `Deal Product ${i + 1}`,
    description: "Best deal you can grab today!",
    image: "/placeholder.png",
  }));

  const categories = [
    "Mobile",
    "Laptop",
    "Headphones",
    "Watches",
    "Electronic",
    "Fashion",
    "Men",
    "Women",
    "Kids",
    "Footwear",
    "Home appliance",
    "Sports",
    "Jewellery",
    "Kitchen",
    "Home decor",
    "Study",
    "Others",
  ];

  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll effect
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let scrollAmount = 0;
    const interval = setInterval(() => {
      if (el.scrollLeft >= el.scrollWidth - el.clientWidth) {
        scrollAmount = 0;
        el.scrollLeft = 0;
      } else {
        scrollAmount += 2;
        el.scrollLeft += 2;
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="px-4 md:px-8 py-6 bg-gray-50">
      {/* Deal of the Day */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">
          Deal of the Day
        </h2>
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto no-scrollbar pb-2"
        >
          {dealProducts.map((p) => (
            <ProductCard
              key={p.id}
              id={p.id}
              name={p.name}
              description={p.description}
              image={p.image}
            />
          ))}
        </div>
      </section>

      {/* Categories */}
      {categories.map((cat, idx) => (
        <CategoryRow key={idx} category={cat} />
      ))}
    </main>
  );
}
