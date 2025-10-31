"use client";

import Link from "next/link";
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
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
            Featured Deals
          </h2>
          <Link
            href="/deals"
            className="text-yellow-600 font-semibold hover:underline"
          >
            View All
          </Link>
        </div>

        {/* Carousel */}
        <div className="relative w-full overflow-hidden rounded-2xl shadow-md bg-white">
          <div className="relative h-56 sm:h-64">
            {deals.map((deal, index) => (
              <div
                key={deal.id}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  index === current ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 w-full bg-white/80 text-center py-2 rounded-b-2xl">
                  <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
                    {deal.title}
                  </h3>
                  <p className="text-yellow-600 font-bold text-sm sm:text-base">
                    {deal.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {deals.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2.5 h-2.5 rounded-full ${
                  index === current ? "bg-yellow-500" : "bg-gray-300"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
