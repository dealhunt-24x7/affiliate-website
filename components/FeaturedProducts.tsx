"use client";

import { useEffect, useState, useRef } from "react";

const luxuryProducts = [
  { id: 1, title: "Omega Seamaster", price: "$2499", image: "/images/deals/deal1.jpg" },
  { id: 2, title: "Rolex Daytona", price: "$12999", image: "/images/deals/deal2.jpg" },
  { id: 3, title: "Tag Heuer Carrera", price: "$3499", image: "/images/deals/deal4.jpg" },
  { id: 4, title: "Gucci Diamond Bag", price: "$5299", image: "/images/deals/deal3.jpg" },
];

const generalProducts = [
  { id: 101, title: "Nike Air Max", price: "$120", image: "/images/general/shoe.jpg" },
  { id: 102, title: "Casio Watch", price: "$99", image: "/images/general/watch.jpg" },
  { id: 103, title: "Axe Perfume", price: "$25", image: "/images/general/perfume.jpg" },
  { id: 104, title: "Levi’s Bag", price: "$75", image: "/images/general/bag.jpg" },
];

export default function FeaturedProducts({ mode }: { mode: "luxury" | "general" }) {
  const [visibleCount, setVisibleCount] = useState(4);
  const observerRef = useRef<HTMLDivElement | null>(null);
  const products = mode === "luxury" ? luxuryProducts : generalProducts;

  useEffect(() => {
    setVisibleCount(4); // reset when mode changes
  }, [mode]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => prev + 2);
        }
      },
      { threshold: 1.0 }
    );

    if (observerRef.current) observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          {mode === "luxury" ? "Luxury Deals" : "General Items"}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.slice(0, visibleCount).map((prod) => (
            <div
              key={prod.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={prod.image}
                alt={prod.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-3 text-center">
                <h3 className="font-semibold text-gray-800">{prod.title}</h3>
                <p className="text-yellow-600 font-bold">{prod.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Infinite Scroll Target */}
        <div ref={observerRef} className="h-10"></div>
      </div>
    </section>
  );
}
