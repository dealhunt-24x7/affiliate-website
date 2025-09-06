"use client";

import React, { useEffect, useState } from "react";
import { Product } from "@/types/product";

const placeholderDeals: Product[] = Array.from({ length: 15 }).map((_, i) => ({
  id: i + 1,
  name: `Deal Product ${i + 1}`,
  description: `Amazing deal on product ${i + 1}, grab it today!`,
  image: "/images/placeholder.png",
  price: 49.99 + i,
  rating: 4,
  slug: `deal-product-${i + 1}`,
  specs: { Brand: "BrandX", Warranty: "1 year" },
  affiliateLink: "#",
}));

export default function DealOfTheDay() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto scroll loop
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % placeholderDeals.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const currentDeal = placeholderDeals[currentIndex];

  return (
    <section className="max-w-2xl mx-auto my-6 px-4">
      <h2 className="text-xl font-bold mb-3 text-blue-600">Deal of the Day</h2>

      <div className="border rounded-lg p-4 bg-white shadow-lg transition-all duration-500">
        <img
          src={currentDeal.image}
          alt={currentDeal.name}
          className="w-full h-40 object-cover rounded mb-3"
        />
        <h3 className="font-semibold text-lg">{currentDeal.name}</h3>
        <p className="text-sm text-gray-500 mb-2">{currentDeal.description}</p>
        <p className="font-bold text-green-600 mb-3">${currentDeal.price}</p>
        <a
          href={currentDeal.affiliateLink}
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          View Deal
        </a>
      </div>

      {/* Small indicator dots */}
      <div className="flex justify-center mt-3 space-x-1">
        {placeholderDeals.map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full ${
              i === currentIndex ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
