"use client";

import React from "react";
import ProductCard from "./ProductCard";
import { Product } from "@/types/product";

const items: Product[] = Array.from({ length: 10 }).map((_, i) => ({
  id: i,
  name: `Deal ${i + 1}`,
  description: "Hot deal you don’t want to miss!",
  image: "/placeholder.png",
}));

const DealsCarousel: React.FC = () => {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">Hot Deals</h2>
      <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
        {items.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
};

export default DealsCarousel;
