"use client";

import React from "react";
import ProductCard from "@/components/ProductCard";
import { BaseProduct } from "@/types/product";

type Props = {
  category: string;
};

const CategoryRow: React.FC<Props> = ({ category }) => {
  // Dummy products per category
  const products: BaseProduct[] = Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    name: `${category} Product ${i + 1}`,
    description: `Best ${category} item in stock!`,
    image: "/placeholder.png",
  }));

  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">{category}</h2>
      <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
};

export default CategoryRow;
