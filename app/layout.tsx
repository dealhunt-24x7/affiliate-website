"use client";

import { useState } from "react";
import CategoryRow from "@/components/CategoryRow";

const categories = [
  { name: "Mobile", slug: "mobile", image: "/images/categories/mobile.png" },
  { name: "Laptop", slug: "laptop", image: "/images/categories/laptop.png" },
  // ... baki categories
];

export default function HomePage({ selectedCategory }: { selectedCategory: string | null }) {
  const visibleCategories = selectedCategory
    ? categories.filter((cat) => cat.slug === selectedCategory)
    : categories;

  return (
    <div className="p-4">
      {visibleCategories.map((cat, idx) => (
        <CategoryRow key={idx} category={cat} />
      ))}
    </div>
  );
}
