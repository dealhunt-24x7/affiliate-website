"use client";
import { useEffect, useState } from "react";

const products = Array.from({ length: 15 }).map((_, i) => ({
  id: i + 1,
  name: `Deal Product ${i + 1}`,
  image: "https://via.placeholder.com/150",
}));

export default function DealOfTheDay() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % products.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden px-4 py-3">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${index * 200}px)` }}
      >
        {products.map((p) => (
          <div key={p.id} className="min-w-[200px] mr-4 bg-white rounded-lg shadow">
            <img src={p.image} alt={p.name} className="w-full h-32 object-cover rounded-t-lg" />
            <div className="p-2 text-center text-sm">{p.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
