"use client";
import { useEffect, useRef } from "react";
import { Product } from "@/types/product";
import ProductCard from "./ProductCard";

export default function DealOfTheDay() {
  const base: Product[] = Array.from({ length: 15 }).map((_, i) => ({
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

  const items = [...base, ...base];
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let raf = 0;
    let speed = 0.5;
    const step = () => {
      el.scrollLeft += speed;
      if (el.scrollLeft >= el.scrollWidth / 2) el.scrollLeft = 0;
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="relative bg-orange-500 py-4">
      <div ref={trackRef} className="flex overflow-x-auto gap-4 pb-2 scrollbar-hide">
        {items.map((p, idx) => (
          <div key={`${p.id}-${idx}`} className="min-w-[240px] max-w-[240px]">
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </div>
  );
}
