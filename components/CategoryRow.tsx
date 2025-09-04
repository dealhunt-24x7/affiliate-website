"use client";

import React from "react";
import ProductCard from "./ProductCard";

interface Props {
  category: string;
  products?: { id: number; name: string; description: string; image: string }[];
}

const CategoryRow: React.FC<Props> = ({ category, products = [] }) => {
  return (
    <section className="mb-6">
      <h2 className="text-lg font-bold mb-3">{category}</h2>
      <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
        {products.length > 0
          ? products.map((p) => (
              <ProductCard
                key={p.id}
                id={p.id}
                name={p.name}
                description={p.description}
                image={p.image}
              />
            ))
          : Array.from({ length: 25 }).map((_, idx) => (
              <ProductCard
                key={idx}
                id={idx}
                name={`Placeholder ${idx + 1}`}
                description="Coming soon..."
                image="/placeholder.png"
              />
            ))}
      </div>
    </section>
  );
};

export default CategoryRow;
