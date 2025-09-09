"use client";

import { useState } from "react";
import CategoryRow from "@/components/CategoryRow";

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
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const visibleCategories = selectedCategory
    ? categories.filter((cat) => cat.slug === selectedCategory)
    : categories;

  return (
    <div className="p-4">
      {visibleCategories.map((cat, idx) => (
        <CategoryRow key={idx} category={cat} />
      ))}

      {selectedCategory && (
        <button
          onClick={() => setSelectedCategory(null)}
          className="mt-6 px-4 py-2 bg-gray-200 rounded-md text-sm"
        >
          Show All Categories
        </button>
      )}
    </div>
  );
}
