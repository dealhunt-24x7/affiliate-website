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
    image: "/placeholder.png",
  }));

  return (
    <section className="mb-8">
      <h2 className="text-lg font-semibold mb-3">{category}</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {products.map((p) => (
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
  );
};

export default CategoryRow;
