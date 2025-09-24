"use client";
import { useRef } from "react";

const featuredDeals = [
  { id: 1, title: "Luxury Watch A", image: "/images/featured/feat1.jpg", price: "$2999" },
  { id: 2, title: "Luxury Bag B", image: "/images/featured/feat2.jpg", price: "$499" },
  { id: 3, title: "Luxury Jewelry C", image: "/images/featured/feat3.jpg", price: "$799" },
  { id: 4, title: "Luxury Watch D", image: "/images/featured/feat4.jpg", price: "$1999" },
  { id: 5, title: "Luxury Shoe E", image: "/images/featured/feat5.jpg", price: "$399" },
];

export default function FeaturedDeals() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Featured Deals</h2>
        <button className="text-yellow-500 font-semibold hover:underline">
          See All
        </button>
      </div>
      <div className="overflow-x-auto no-scrollbar">
        <div className="flex gap-4">
          {featuredDeals.map((deal) => (
            <div
              key={deal.id}
              className="min-w-[250px] bg-white rounded-xl shadow p-4 flex flex-col items-center"
            >
              <img
                src={deal.image}
                alt={deal.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="mt-2 font-semibold text-lg text-center">{deal.title}</h3>
              <p className="text-yellow-600 font-bold">{deal.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
