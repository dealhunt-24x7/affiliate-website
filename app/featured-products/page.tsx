"use client";

import Link from "next/link";

export default function FeaturedProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={() => window.history.back()}
          className="px-4 py-2 rounded-lg bg-yellow-100 hover:bg-yellow-200 text-yellow-800 font-semibold shadow"
        >
          ⬅ Back
        </button>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          Featured Products
        </h1>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition"
          >
            <img
              src="https://via.placeholder.com/400x300"
              alt={`Product ${idx + 1}`}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h2 className="mt-3 font-semibold text-lg">Product {idx + 1}</h2>
            <p className="text-green-600 font-bold">₹9,999</p>
            <Link
              href="/products"
              className="block mt-3 text-center bg-yellow-500 text-white rounded-lg py-2 hover:bg-yellow-600 transition"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
