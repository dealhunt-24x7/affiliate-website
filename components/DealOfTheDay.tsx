"use client";

import { useEffect, useState, useRef } from "react";
import { Product } from "@/types/product";
import ProductCard from "./ProductCard";
import DealTimer from "./DealTimer";

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
  const touchStartX = useRef(0);

  // Auto-scroll
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % products.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [products.length]);

  // Manual handlers
  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % products.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (diff > 50) prevSlide(); // swipe right → prev
    if (diff < -50) nextSlide(); // swipe left → next
  };

  return (
    <section className="bg-white border-t border-b border-gray-200 relative">
      {/* Header row with title + timer */}
      <div className="flex justify-between items-center px-4 py-2">
        <h2 className="text-lg font-bold text-gray-800">Deal of the Day</h2>
        <DealTimer duration={6 * 60 * 60} /> {/* 6 hours countdown */}
      </div>

      {/* Scrolling deals */}
      <div
        className="w-full h-[75px] overflow-hidden relative"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {products.map((p) => (
            <div key={p.id} className="min-w-full">
              <ProductCard product={p} />
            </div>
          ))}
        </div>

        {/* Arrow buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-1 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full"
        >
          ⮜
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-1 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full"
        >
          ⮞
        </button>
      </div>
    </section>
  );
}
