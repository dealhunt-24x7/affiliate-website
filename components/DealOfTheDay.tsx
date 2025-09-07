"use client";

import { useEffect, useState } from "react";
import { Product } from "@/types/product";
import ProductCard from "./ProductCard";

export default function DealOfTheDay() {
  const products: Product[] = Array.from({ length: 8 }).map((_, i) => ({
    id: i + 1,
    name: `Deal Product ${i + 1}`,
    description: "Best deal you can grab today!",
    image: "/images/placeholder.png",
    slug: `deal-${i + 1}`,
    price: 49.99 + i,
    rating: 4,
    specs: { Warranty: "1 Year" },
    affiliateLink: "#",
  }));

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % products.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [products.length]);

  return (
    <section className="bg-white flex items-center justify-center border-b border-gray-200">
      {/* Height = 75% of header (example header ~100px → here ~75px) */}
      <div className="w-full h-[75px] overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {products.map((p) => (
            <div
              key={p.id}
              className="min-w-full flex items-center justify-center"
            >
              {/* Direct stretched placeholders, no outer box */}
              <img
                src={p.image}
                alt={p.name}
                className="h-[75px] w-full object-cover rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
