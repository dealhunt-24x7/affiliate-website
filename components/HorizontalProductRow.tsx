"use client";

import React from "react";
import ProductCard from "./ProductCard";
import { Product } from "@/types/product";

type Props = {
  category: string;
};

const CategoryRow: React.FC<Props> = ({ category }) => {
  const products: Product[] = Array.from({ length: 10 }).map((_, i) => ({
    id: i,
    name: `${category} Product ${i + 1}`,
    description: `Top ${category} deal you can grab today!`,
    image: "https://via.placeholder.com/300x200",
  }));

  return (
    <section className="mb-10">
      <h2 className="text-lg font-bold mb-4">{category}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
};

export default CategoryRow;
