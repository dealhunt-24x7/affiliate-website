"use client";

import Link from "next/link";

const deals = [
  { id: 1, title: "Omega Seamaster", price: "$2499", image: "/images/deals/deal1.jpg" },
  { id: 2, title: "Rolex Daytona", price: "$12999", image: "/images/deals/deal2.jpg" },
  { id: 3, title: "Apple Watch Ultra", price: "$799", image: "/images/deals/deal3.jpg" },
  { id: 4, title: "Tag Heuer Carrera", price: "$3499", image: "/images/deals/deal4.jpg" },
];

export default function FeaturedDealsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-10">
      {/* 🔙 Back Button */}
      <div className="mb-6">
        <Link
          href="/"
          className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
        >
          ⬅ Back to Home
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-gray-800 mb-8">All Featured Deals</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
              <h3 className="font-semibold text-lg">{deal.title}</h3>
              <p className="text-yellow-600 font-bold">{deal.price}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
