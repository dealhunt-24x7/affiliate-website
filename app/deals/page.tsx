"use client";

import { useRouter } from "next/navigation";

const deals = [
  { id: 1, title: "Omega Seamaster", price: "$2499", image: "/images/deals/deal1.jpg" },
  { id: 2, title: "Rolex Daytona", price: "$12999", image: "/images/deals/deal2.jpg" },
  { id: 3, title: "Apple Watch Ultra", price: "$799", image: "/images/deals/deal3.jpg" },
  { id: 4, title: "Tag Heuer Carrera", price: "$3499", image: "/images/deals/deal4.jpg" },
];

export default function DealsPage() {
  const router = useRouter();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Back Button */}
      <button
        onClick={() => router.push("/")}
        className="mb-6 inline-flex items-center text-yellow-600 hover:text-yellow-700 font-semibold"
      >
        ← Back to Home
      </button>

      {/* Page Heading */}
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        All Featured Deals
      </h1>

      {/* Deals Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {deals.map((deal) => (
          <div
            key={deal.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={deal.image}
              alt={deal.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">{deal.title}</h3>
              <p className="text-yellow-600 font-bold">{deal.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
