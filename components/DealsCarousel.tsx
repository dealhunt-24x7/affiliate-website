"use client";

import React from "react";
import ProductCard from "./ProductCard";

export type DealItem = {
  id: number;
  name: string;
  description: string;
  image: string;
};

interface Props {
  items?: DealItem[];
}

const DealsCarousel: React.FC<Props> = ({
  items = [
    { id: 1, name: "Deal 1", description: "Special Offer!", image: "/placeholder.png" },
    { id: 2, name: "Deal 2", description: "Limited Time!", image: "/placeholder.png" },
    { id: 3, name: "Deal 3", description: "Hot Deal!", image: "/placeholder.png" },
    { id: 4, name: "Deal 4", description: "Best Seller!", image: "/placeholder.png" },
    { id: 5, name: "Deal 5", description: "Trending Now!", image: "/placeholder.png" },
  ],
}) => {
  return (
    <section className="mb-6">
      <h2 className="text-lg font-bold mb-3">🔥 Deal of the Day</h2>
      <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
        {items.map((item) => (
          <ProductCard
            key={item.id}
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
