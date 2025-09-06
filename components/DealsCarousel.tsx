"use client";
import { useEffect, useState } from "react";

const items = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  name: `Deal ${i + 1}`,
  description: "Best offer available now",
  image: "/placeholder.png",
}));

export default function DealsCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const current = items[index];

  return (
    <section className="p-4 bg-orange-500">
      <h2 className="text-xl font-bold mb-3 text-white">Deal of the Day</h2>
      <div className="relative border border-orange-300 rounded-lg shadow-md p-4 flex flex-col items-center bg-black text-white">
        <img
          src={current.image}
          alt={current.name}
          className="w-64 h-40 object-cover rounded mb-2"
        />
        <h3 className="text-lg font-semibold text-gold">{current.name}</h3>
        <p className="text-sm text-gray-300">{current.description}</p>
      </div>
    </section>
  );
}
