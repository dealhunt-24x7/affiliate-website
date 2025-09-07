"use client";

import { useEffect, useState, useRef } from "react";
import { Product } from "@/types/product";
import ProductCard from "./ProductCard";
import DealTimer from "./DealTimer";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % products.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [products.length]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.transform = `translateX(-${index * 100}%)`;
    }
  }, [index]);

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % products.length);
  };

  // swipe gestures for mobile
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let startX = 0;
    let endX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
    };

    const handleTouchMove = (e: TouchEvent) => {
      endX = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
      if (startX - endX > 50) nextSlide(); // swipe left → next
      if (endX - startX > 50) prevSlide(); // swipe right → prev
    };

    el.addEventListener("touchstart", handleTouchStart);
    el.addEventListener("touchmove", handleTouchMove);
    el.addEventListener("touchend", handleTouchEnd);

    return () => {
      el.removeEventListener("touchstart", handleTouchStart);
      el.removeEventListener("touchmove", handleTouchMove);
      el.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <section className="bg-white border-t border-b border-gray-200 group relative">
      <div className="flex justify-between items-center px-4 py-2">
        <h2 className="text-lg font-bold text-gray-800">Deal of the Day</h2>
        <DealTimer duration={6 * 60 * 60} />
      </div>

      <div className="relative w-full h-[75px] overflow-hidden">
        <div
          ref={containerRef}
          className="flex transition-transform duration-700 ease-in-out"
        >
          {products.map((p) => (
            <div key={p.id} className="min-w-full">
              <ProductCard product={p} />
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white text-black p-1.5 rounded-full shadow-md hover:bg-gray-100 opacity-0 group-hover:opacity-100 transition"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-black p-1.5 rounded-full shadow-md hover:bg-gray-100 opacity-0 group-hover:opacity-100 transition"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}
