"use client";

import { useEffect, useState, useRef } from "react";

const luxuryProducts = [
  { id: 1, title: "Omega Seamaster", price: "$2499", image: "/images/deals/deal1.jpg" },
  { id: 2, title: "Rolex Daytona", price: "$12999", image: "/images/deals/deal2.jpg" },
  { id: 3, title: "Tag Heuer Carrera", price: "$3499", image: "/images/deals/deal4.jpg" },
  { id: 4, title: "Gucci Diamond Bag", price: "$5299", image: "/images/deals/deal3.jpg" },
  { id: 5, title: "Cartier Bracelet", price: "$2299", image: "/images/deals/deal5.jpg" },
  { id: 6, title: "Prada Sunglasses", price: "$899", image: "/images/deals/deal6.jpg" },
];

const generalProducts = [
  { id: 101, title: "Nike Air Max", price: "$120", image: "/images/general/shoe.jpg" },
  { id: 102, title: "Casio Watch", price: "$99", image: "/images/general/watch.jpg" },
  { id: 103, title: "Axe Perfume", price: "$25", image: "/images/general/perfume.jpg" },
  { id: 104, title: "Levi’s Bag", price: "$75", image: "/images/general/bag.jpg" },
  { id: 105, title: "Adidas T-Shirt", price: "$45", image: "/images/general/tshirt.jpg" },
  { id: 106, title: "Boat Earbuds", price: "$35", image: "/images/general/earbuds.jpg" },
];

export default function FeaturedProducts({ mode }: { mode: "luxury" | "general" }) {
  const [visibleCount, setVisibleCount] = useState(4);
  const observerRef = useRef<HTMLDivElement | null>(null);
  const products = mode === "luxury" ? luxuryProducts : generalProducts;

  useEffect(() => {
    setVisibleCount(4);
  }, [mode]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && visibleCount < products.length) {
          setVisibleCount((prev) => prev + 2);
        }
      },
      { threshold: 0.5 }
    );

    if (observerRef.current) observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [visibleCount, products.length]);

  return (
    <section
      className={`py-10 transition-all duration-700 ${
        mode === "luxury"
          ? "bg-gradient-to-b from-[#fff8e1] to-[#fff] backdrop-blur-md"
          : "bg-gradient-to-b from-blue-50 to-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* ✅ Fixed Heading */}
        <h2
          className={`text-2xl font-bold mb-6 text-center ${
            mode === "luxury" ? "text-yellow-700" : "text-blue-800"
          }`}
        >
          {mode === "luxury" ? "✨ Luxury Deals" : "🛒 General Deals"}
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.slice(0, visibleCount).map((prod, index) => (
            <div
              key={prod.id}
              className={`rounded-xl overflow-hidden relative group transform transition-all duration-500 hover:-translate-y-1 hover:scale-[1.03] ${
                mode === "luxury"
                  ? "bg-white/90 shadow-[0_0_15px_rgba(255,215,0,0.5)] border border-yellow-300"
                  : "bg-white/95 shadow-[0_4px_12px_rgba(0,123,255,0.15)] border border-blue-100"
              }`}
              style={{
                animation: `fadeIn 0.8s ease ${index * 0.1}s both`,
              }}
            >
              <img
                src={prod.image}
                alt={prod.title}
                loading="lazy"
                className="w-full h-48 object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="p-3 text-center">
                <h3 className="font-semibold text-gray-800 truncate">{prod.title}</h3>
                <p
                  className={`font-bold ${
                    mode === "luxury" ? "text-yellow-600" : "text-blue-600"
                  }`}
                >
                  {prod.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Infinite Scroll Trigger */}
        <div ref={observerRef} className="h-10"></div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
