"use client";
import { useState, useEffect } from "react";

const deals = [
  { id: 1, title: "Omega Seamaster", price: "$2499", image: "/images/deals/deal1.jpg" },
  { id: 2, title: "Rolex Daytona", price: "$12999", image: "/images/deals/deal2.jpg" },
  { id: 3, title: "Apple Watch Ultra", price: "$799", image: "/images/deals/deal3.jpg" },
  { id: 4, title: "Tag Heuer Carrera", price: "$3499", image: "/images/deals/deal4.jpg" },
];

export default function FeaturedDeals() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % deals.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="max-w-full mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Featured Deals</h2>
        <button className="text-yellow-500 font-semibold hover:underline">
          View More Deals
        </button>
      </div>

      <div className="relative flex justify-center">
        <div className="w-full max-w-3xl overflow-hidden rounded-xl shadow-lg bg-white">
          <img
            src={deals[current].image}
            alt={deals[current].title}
            className="w-full h-56 object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="font-semibold text-lg">{deals[current].title}</h3>
            <p className="text-yellow-600 font-bold">{deals[current].price}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
