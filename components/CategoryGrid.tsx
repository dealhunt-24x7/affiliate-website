"use client";

import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/categories";

export default function CategoryGrid() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-10">
          Shop by Category
        </h2>

        {/* Category Grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/products?category=${encodeURIComponent(cat.slug)}`}
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden shadow-md border-2 border-gray-200 group-hover:border-yellow-500 transition">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="mt-3 text-sm font-medium text-gray-700 group-hover:text-yellow-600">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>

        {/* See All Button */}
        <div className="text-center mt-6">
          <Link
            href="/categories"
            className="inline-block text-yellow-500 font-semibold hover:underline"
          >
            See All Categories
          </Link>
        </div>
      </div>
    </section>
  );
}
