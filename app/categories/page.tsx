"use client";

import Link from "next/link";

const categories = [
  "Watches",
  "Shoes",
  "Bags",
  "Electronics",
  "Jewelry",
  "Fashion",
];

export default function CategoriesPage() {
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
          Shop by Categories
        </h1>
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {categories.map((cat, idx) => (
          <Link
            key={idx}
            href={`/products?search=${cat}`}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg flex items-center justify-center text-lg font-semibold hover:bg-yellow-50 transition"
          >
            {cat}
          </Link>
        ))}
      </div>
    </div>
  );
}
