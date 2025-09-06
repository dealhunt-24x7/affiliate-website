"use client";

import React from "react";
import { Product } from "@/types/product";
import ProductCard from "./ProductCard";

type Props = {
  category: string;
};

const CategoryRow: React.FC<Props> = ({ category }) => {
  const products: Product[] = Array.from({ length: 25 }).map((_, i) => ({
    id: i + 1,
    name: `${category} Product ${i + 1}`,
    description: `Top ${category} deal you can grab today!`,
    image: "/images/placeholder.png",
    slug: `${category.toLowerCase()}-product-${i + 1}`,
    price: 49.99 + i,
    rating: 4,
    specs: { Warranty: "1 Year" },
    affiliateLink: "#",
  }));

  return (
    <section className="mb-10">
      <h2 className="text-lg font-bold mb-3 text-blue-600">{category}</h2>
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
        {products.map((p) => (
          <div key={p.id} className="min-w-[160px] sm:min-w-[200px]">
            <ProductCard {...p} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryRow;
