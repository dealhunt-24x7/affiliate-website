"use client";
import { useEffect, useState } from "react";

const deals = [
  { id: 1, title: "Omega Seamaster", price: "$2499", image: "/images/deals/deal1.jpg" },
  { id: 2, title: "Rolex Daytona", price: "$12999", image: "/images/deals/deal2.jpg" },
  { id: 3, title: "Apple Watch Ultra", price: "$799", image: "/images/deals/deal3.jpg" },
  { id: 4, title: "Tag Heuer Carrera", price: "$3499", image: "/images/deals/deal4.jpg" },
  { id: 5, title: "Cartier Tank", price: "$4500", image: "/images/deals/deal5.jpg" },
];

export default function FeaturedDeals() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % deals.length);
    }, 2500); // 2.5 seconds per deal
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

      <div className="overflow-hidden w-full">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {deals.map((deal) => (
            <div key={deal.id} className="min-w-full px-0"> {/* min-w-full ensures 1 deal full width */}
              <div className="bg-white rounded-xl shadow-lg flex flex-col md:flex-row items-center w-full">
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="w-full md:w-1/2 h-64 md:h-80 object-cover rounded-l-xl md:rounded-l-xl md:rounded-r-none"
                />
                <div className="p-6 flex flex-col justify-center items-center md:items-start text-center md:text-left">
                  <h3 className="text-2xl font-semibold mb-2">{deal.title}</h3>
                  <p className="text-yellow-600 font-bold text-xl">{deal.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
