"use client";
import { useEffect, useRef, useState } from "react";

const deals = [
  { id: 1, title: "Omega Seamaster", price: "$2499", image: "/images/deals/deal1.jpg" },
  { id: 2, title: "Rolex Daytona", price: "$12999", image: "/images/deals/deal2.jpg" },
  { id: 3, title: "Apple Watch Ultra", price: "$799", image: "/images/deals/deal3.jpg" },
  { id: 4, title: "Tag Heuer Carrera", price: "$3499", image: "/images/deals/deal4.jpg" },
  { id: 5, title: "Cartier Tank", price: "$4500", image: "/images/deals/deal5.jpg" },
  { id: 6, title: "Patek Philippe Nautilus", price: "$25000", image: "/images/deals/deal6.jpg" },
];

export default function DealOfTheDay() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % deals.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Deal of the Day</h2>
        <button className="text-yellow-500 font-semibold hover:underline">
          View More Deals
        </button>
      </div>
      <div
        className="overflow-hidden relative w-full"
        ref={containerRef}
      >
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {deals.map((deal) => (
            <div
              key={deal.id}
              className="min-w-full md:min-w-[25%] px-2"
            >
              <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <h3 className="mt-2 font-semibold text-lg text-center">{deal.title}</h3>
                <p className="text-yellow-600 font-bold">{deal.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
