"use client";

import React from "react";
import ProductCard from "./ProductCard";
import { Product } from "@/types/product";

interface Props {
  products: Product[];
  title: string;
}

const HorizontalProductRow: React.FC<Props> = ({ products, title }) => {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
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

export default HorizontalProductRow;
