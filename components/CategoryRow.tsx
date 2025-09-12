"use client";

import { useState } from "react";
import Link from "next/link";
import { Product } from "@/types/product";
import ProductCard from "@/components/ProductCard";
import PlaceholderCard from "@/components/PlaceholderCard";

type Category = {
  name: string;
  slug: string;
  image: string;
};

type Props = { category: Category };

export default function CategoryRow({ category }: Props) {
  // ⚡ Dummy subcategories (API connect later)
  const subcategories: Product[] = Array.from({ length: 12 }).map((_, i) => ({
    id: i + 1,
    name: `${category.name} Product ${i + 1}`,
    description: `Top ${category.name} deal you can grab today!`,
    image: "/images/placeholder.png",
    slug: `${category.slug}-${i + 1}`,
    price: 39.99 + i,
    rating: 4,
    specs: { Warranty: "1 Year" },
    affiliateLink: "#",
  }));

  const [showAll, setShowAll] = useState(false);
  const visibleProducts = showAll ? subcategories : subcategories.slice(0, 5);

  return (
    <section className="mb-10" id={category.slug}>
      {/* Category Heading */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <img
            src={category.image}
            alt={category.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <h2 className="text-lg font-bold text-red-600 truncate max-w-[180px]">
            {category.name}
          </h2>
        </div>

        {/* View All Button */}
        <button
          onClick={() => setShowAll((prev) => !prev)}
          className="text-sm text-blue-600 hover:underline"
        >
          {showAll ? "Show Less" : "View All →"}
        </button>
      </div>

      {/* Subcategories Row */}
      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
        {visibleProducts.map((p) => (
          <div key={p.id} className="min-w-[160px] sm:min-w-[200px]">
            <PlaceholderCard />
          </div>
        ))}
      </div>
    </section>
  );
}
