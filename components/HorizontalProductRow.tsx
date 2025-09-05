"use client";

import React from "react";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/product";

type Props = {
  category: string;
};

// Dummy products for UI preview (all required fields present)
const generateDummyProducts = (category: string): Product[] =>
  Array.from({ length: 10 }).map((_, i) => ({
    id: i,
    name: `${category} Product ${i + 1}`,
    slug: `${category.toLowerCase()}-product-${i + 1}`,
    description: `Top ${category} deal you can grab today!`,
    price: Math.floor(Math.random() * 100) + 50,
    rating: Math.round((Math.random() * 5) * 10) / 10,
    specs: { Brand: "Demo", Feature: "Sample" },
    image: `/images/product${(i % 3) + 1}.jpg`,
    affiliateLink: "https://example.com/deal"
  }));

const HorizontalProductRow: React.FC<Props> = ({ category }) => {
  const products = generateDummyProducts(category);

  return (
    <section className="mb-6">
      <h2 className="text-lg font-semibold mb-2">{category}</h2>
      <div className="flex gap-4 overflow-x-auto pb-2">
        {products.map((p) => (
          <div key={p.id} className="min-w-[160px] sm:min-w-[200px]">
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HorizontalProductRow;
