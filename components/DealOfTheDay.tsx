"use client";

import { useEffect, useState, useRef } from "react";
import { Product } from "@/types/product";
import ProductCard from "./ProductCard";
import DealTimer from "./DealTimer";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

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
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translate, setTranslate] = useState(0);

  useEffect(() => {
    if (containerRef.current && !isDragging) {
      containerRef.current.style.transition = "transform 0.5s ease-in-out";
      containerRef.current.style.transform = `translateX(-${index * 100}%)`;
    }
  }, [index, isDragging]);

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % products.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % products.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [products.length]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleTouchStart = (e: TouchEvent) => {
      setIsDragging(true);
      setStartX(e.touches[0].clientX);
      setTranslate(0);
      el.style.transition = "none";
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      const currentX = e.touches[0].clientX;
      const deltaX = currentX - startX;
      setTranslate(deltaX);
      el.style.transform = `translateX(calc(-${index * 100}% + ${deltaX}px))`;
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
      if (Math.abs(translate) > 50) {
        if (translate < 0) nextSlide();
        else prevSlide();
      } else {
        el.style.transition = "transform 0.5s ease-in-out";
        el.style.transform = `translateX(-${index * 100}%)`;
      }
      setTranslate(0);
    };

    el.addEventListener("touchstart", handleTouchStart);
    el.addEventListener("touchmove", handleTouchMove);
    el.addEventListener("touchend", handleTouchEnd);

    return () => {
      el.removeEventListener("touchstart", handleTouchStart);
      el.removeEventListener("touchmove", handleTouchMove);
      el.removeEventListener("touchend", handleTouchEnd);
    };
  }, [index, isDragging, translate]);

  return (
    <section className="bg-[#B9BBB6] border-t border-b border-gray-200">
      {/* 🔥 Heading + View All Button */}
      <div className="flex justify-between items-center px-4 py-3">
        <h2 className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-red-600 via-yellow-500 to-orange-500 text-transparent bg-clip-text animate-pulse drop-shadow">
          🔥 HOT DEALS
        </h2>
        <Link
          href="/hot-deals"
          className="px-4 py-1.5 bg-gradient-to-r from-red-500 to-orange-400 text-white text-sm font-semibold rounded-lg shadow hover:scale-105 transform transition duration-200"
        >
          View All
        </Link>
      </div>

      {/* 🔥 Deal Timer */}
      <div className="flex justify-center pb-2">
        <DealTimer duration={6 * 60 * 60} />
      </div>

      {/* 🔥 Products Slider */}
      <div className="relative w-full h-[75px] overflow-hidden">
        <div ref={containerRef} className="flex">
          {products.map((p) => (
            <div key={p.id} className="min-w-full">
              <ProductCard product={p} />
            </div>
          ))}
        </div>

        {/* Prev / Next Buttons */}
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
