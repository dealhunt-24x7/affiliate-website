"use client";
import { useState, useEffect } from "react";

const deals = [
  { id: 1, title: "Omega Seamaster", price: "$2499", image: "/images/deals/deal1.jpg" },
  { id: 2, title: "Rolex Daytona", price: "$12999", image: "/images/deals/deal2.jpg" },
  { id: 3, title: "Apple Watch Ultra", price: "$799", image: "/images/deals/deal3.jpg" },
  { id: 4, title: "Tag Heuer Carrera", price: "$3499", image: "/images/deals/deal4.jpg" },
  { id: 5, title: "Cartier Tank", price: "$5999", image: "/images/deals/deal5.jpg" },
  { id: 6, title: "Fossil Smartwatch", price: "$199", image: "/images/deals/deal6.jpg" },
];

export default function DealOfTheDay() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % deals.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-8 bg-gray-50">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Deal of the Day</h2>
      <div className="overflow-x-auto w-full">
        <div className="flex space-x-4 px-6 min-w-max">
          {deals.map((deal, index) => (
            <div
              key={deal.id}
              className={`flex-shrink-0 w-64 rounded-xl shadow-lg bg-white transform transition duration-500 ${
                index === current ? "scale-105" : "scale-100"
              }`}
            >
              <img
                src={deal.image}
                alt={deal.title}
                className="w-full h-56 object-cover rounded-t-xl"
              />
              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg">{deal.title}</h3>
                <p className="text-yellow-600 font-bold">{deal.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
